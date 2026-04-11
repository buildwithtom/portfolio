"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "@/components/ui/Icons";
import { Mail, FileText, ArrowUp, Phone } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="pt-20 pb-10 border-t-2 border-dashed border-foreground/30 mt-20 relative">
      <SectionHeading title="Contact" />
      
      <div className="max-w-3xl flex flex-col md:flex-row gap-12 mt-12">
        <div className="flex-1 space-y-6">
          <p className="font-sans text-lg text-foreground/80 leading-relaxed">
            I&apos;m currently looking for new opportunities. Whether you have a question, a project in mind, or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <Button size="lg" asChild className="w-full sm:w-auto">
            <a href="mailto:tomjose.connect@gmail.com">
              <Mail className="w-5 h-5 mr-3" />
              Say Hello
            </a>
          </Button>
        </div>
        
        <div className="flex-1 border-l-2 border-dashed border-foreground/30 pl-0 md:pl-12 pt-8 md:pt-0 border-t-2 md:border-t-0">
          <h3 className="font-pixel text-xl uppercase mb-6 text-foreground">Find Me Online</h3>
          <ul className="space-y-4 font-mono">
            <li>
              <a href="https://github.com" className="flex items-center text-foreground hover:text-retro-green transition-colors group">
                <Github className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/tom-jose-dev" target="_blank" rel="noreferrer" className="flex items-center text-foreground hover:text-retro-green transition-colors group">
                <Linkedin className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="tel:+919633867277" className="flex items-center text-foreground hover:text-retro-green transition-colors group">
                <Phone className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                +91 9633867277
              </a>
            </li>
            <li>
              <a href="/resume.pdf" className="flex items-center text-foreground hover:text-retro-green transition-colors group">
                <FileText className="w-5 h-5 mr-3 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-32 pt-8 flex justify-end items-center text-sm font-mono text-foreground/60 border-t-2 border-foreground">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center hover:text-retro-green transition-colors font-pixel uppercase tracking-widest text-foreground"
        >
          <ArrowUp className="w-4 h-4 mr-2" />
          Back to Top
        </button>
      </div>
    </section>
  );
}
