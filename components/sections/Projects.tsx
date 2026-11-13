"use client";

import * as React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PROJECTS } from "@/lib/data";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";
import { GithubIcon as Github } from "@/components/ui/Icons";
import { motion, useReducedMotion } from "framer-motion";

export function Projects() {
  const gridRef = React.useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = React.useState(false);
  const [initialCount, setInitialCount] = React.useState(3);
  const reduceMotion = useReducedMotion();
  const visibleProjects = expanded ? PROJECTS : PROJECTS.slice(0, initialCount);

  React.useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const updateCount = () => setInitialCount(media.matches ? 6 : 3);
    updateCount();
    media.addEventListener("change", updateCount);
    return () => media.removeEventListener("change", updateCount);
  }, []);

  React.useEffect(() => {
    const grid = gridRef.current;
    if (!grid || typeof ResizeObserver === "undefined") return;

    const items = Array.from(grid.children) as HTMLDivElement[];
    // Measure natural card heights, not their grid areas. One-pixel rows keep
    // the masonry spacing precise; the extra 32px reserves space between cards.
    const resizeObserver = new ResizeObserver(() => {
      for (const item of items) {
        const card = item.firstElementChild as HTMLElement | null;
        if (card) {
          item.style.gridRowEnd = `span ${Math.ceil(card.offsetHeight + 32)}`;
        }
      }
      grid.dataset.measured = "true";
    });

    for (const item of items) {
      if (item.firstElementChild) resizeObserver.observe(item.firstElementChild);
    }

    return () => resizeObserver.disconnect();
  }, [visibleProjects.length]);

  return (
    <section id="projects" className="py-8 md:py-16">
      <SectionHeading title="Projects" />
      
      <div
        id="project-grid"
        ref={gridRef}
        className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 md:data-[measured=true]:auto-rows-[1px] md:data-[measured=true]:gap-y-0"
      >
        {visibleProjects.map((project, index) => (
          <div key={project.title} className="min-w-0 md:self-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : (index % 3) * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card className="h-full flex flex-col motion-safe:hover:-translate-y-1 motion-safe:hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_var(--color-foreground)] transition-[transform,box-shadow] duration-300 ease-out motion-reduce:transition-none">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="leading-tight">{project.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base font-sans mt-2 break-words">
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
          </div>
        ))}
      </div>
      {!expanded && (
        <div aria-hidden="true" inert className="relative mt-8 h-28 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.slice(initialCount, initialCount + 3).map((project) => (
              <Card key={project.title}>
                <CardHeader><CardTitle>{project.title}</CardTitle></CardHeader>
                <CardContent><CardDescription>{project.description}</CardDescription></CardContent>
              </Card>
            ))}
          </div>
          <div className="absolute inset-0 bg-linear-to-b from-background/10 via-background/80 to-background" />
        </div>
      )}
      <div className="flex justify-center mt-6">
        <Button
          size="lg"
          variant="outline"
          aria-expanded={expanded}
          aria-controls="project-grid"
          onClick={() => {
            if (expanded) gridRef.current?.scrollIntoView({ behavior: reduceMotion ? "instant" : "smooth", block: "start" });
            setExpanded(!expanded);
          }}
        >
          {expanded ? "Show fewer projects" : "Show all projects"}
          {expanded ? <ChevronUp aria-hidden="true" className="ml-2 h-4 w-4" /> : <ChevronDown aria-hidden="true" className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    </section>
  );
}
