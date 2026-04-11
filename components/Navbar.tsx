"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { FileText, Menu, X } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import { Button } from "./ui/Button";

const TABS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [activeTab, setActiveTab] = React.useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Optional: Add scroll observer to update active tab

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" className="flex items-center group">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center retro-shadow-sm group-hover:bg-retro-green transition-colors">
              <span className="text-background font-pixel text-lg">TJ</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {TABS.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => setActiveTab(tab.name)}
                className={cn(
                  "px-4 py-2 font-pixel text-lg uppercase transition-colors border-2 border-transparent",
                  activeTab === tab.name 
                    ? "bg-foreground text-background" 
                    : "text-foreground hover:border-foreground"
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>

          {/* User Links / Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-retro-green transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-retro-green transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <Button variant="outline" size="sm" className="hidden lg:flex" asChild>
              <a href="/resume.pdf" target="_blank">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden border-b-2 border-foreground h-fit pb-8 retro-shadow">
          <nav className="flex flex-col space-y-4">
            {TABS.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                onClick={() => {
                  setActiveTab(tab.name);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "p-4 font-pixel text-xl uppercase border-2 text-center transition-colors",
                  activeTab === tab.name 
                    ? "bg-foreground text-background border-foreground" 
                    : "bg-background text-foreground border-foreground hover:bg-foreground/10"
                )}
              >
                {tab.name}
              </a>
            ))}
            <div className="flex items-center justify-center space-x-6 pt-4 border-t-2 border-dashed border-foreground/30">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-foreground">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground">
                <Linkedin className="w-6 h-6" />
              </a>
              <Button variant="default" asChild className="w-full max-w-xs mx-auto mt-4">
                 <a href="/resume.pdf" target="_blank">
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </React.Fragment>
  );
}
