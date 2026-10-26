"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <SectionHeading title="Projects" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-all duration-200">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <CardTitle className="leading-tight">{project.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base font-sans mt-2 line-clamp-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.stack.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              {(project.githubUrl || project.liveUrl) && (
                <CardFooter className="border-t-2 border-dashed border-foreground/30 mt-auto pt-4">
                  {project.githubUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub (opens in a new tab)`}>
                        <Github aria-hidden="true" className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title} (opens in a new tab)`}>
                        <ExternalLink aria-hidden="true" className="w-4 h-4 mr-2" />
                        {project.liveLabel ?? "Visit Site"}
                      </a>
                    </Button>
                  )}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
