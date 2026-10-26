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

  React.useEffect(() => {
    let frameId: number | null = null;

    const updateActiveTab = () => {
      frameId = null;
      const headerBottom = document.querySelector("header")?.getBoundingClientRect().bottom ?? 64;
      const activationLine = headerBottom + 24;
      let currentTab = TABS[0].name;

      for (const tab of TABS) {
        const section = document.getElementById(tab.href.slice(1));
        if (section && section.getBoundingClientRect().top <= activationLine) {
          currentTab = tab.name;
        }
      }

      // The last section may be too short to reach the activation line.
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        currentTab = TABS[TABS.length - 1].name;
      }

      setActiveTab(currentTab);
    };

    const scheduleUpdate = () => {
      if (frameId === null) frameId = window.requestAnimationFrame(updateActiveTab);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      if (frameId !== null) window.cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, []);

  React.useEffect(() => {
    if (!isMobileMenuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMobileMenuOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isMobileMenuOpen]);

  return (
    <React.Fragment>
      <header className="sticky top-0 z-50 w-full border-b-2 border-foreground bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <a href="#home" aria-label="Tom Jose — home" className="flex items-center group">
            <div className="w-8 h-8 bg-foreground flex items-center justify-center retro-shadow-sm group-hover:bg-retro-green transition-colors">
              <span className="text-background font-pixel text-lg">TJ</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center space-x-1">
            {TABS.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={activeTab === tab.name ? "location" : undefined}
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
            <a href="https://github.com/buildwithtom" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)" className="text-foreground hover:text-retro-green transition-colors">
              <Github aria-hidden="true" className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/in/tom-jose-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)" className="text-foreground hover:text-retro-green transition-colors">
              <Linkedin aria-hidden="true" className="w-5 h-5" />
            </a>
            <Button variant="outline" size="sm" className="hidden lg:flex" disabled>
              <FileText className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            type="button"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background pt-20 px-4 md:hidden border-b-2 border-foreground h-fit pb-8 retro-shadow">
          <nav id="mobile-navigation" aria-label="Mobile navigation" className="flex flex-col space-y-4">
            {TABS.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={activeTab === tab.name ? "location" : undefined}
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
              <a href="https://github.com/buildwithtom" target="_blank" rel="noreferrer" aria-label="GitHub (opens in a new tab)" className="text-foreground">
                <Github aria-hidden="true" className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com/in/tom-jose-dev/" target="_blank" rel="noreferrer" aria-label="LinkedIn (opens in a new tab)" className="text-foreground">
                <Linkedin aria-hidden="true" className="w-6 h-6" />
              </a>
              <Button variant="default" disabled className="w-full max-w-xs mx-auto mt-4">
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </div>
          </nav>
        </div>
      )}
    </React.Fragment>
  );
}
