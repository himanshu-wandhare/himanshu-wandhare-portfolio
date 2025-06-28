"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { PROJECTS } from "@/lib/constants";
import { Button } from "./ui/button";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    useEffect(() => {
        if (isVisible) {
            const interval = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % PROJECTS.length);
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isVisible]);

    return (
        <section id="projects" ref={sectionRef} className="py-20 md:py-32">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h2
                        className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        <DoodleUnderline thickness={3} animated={true}>
                            My Projects
                        </DoodleUnderline>
                    </h2>

                    <div className="flex flex-col md:flex-row gap-6 md:gap-10">
                        {/* Project Thumbnails */}
                        <div className="w-full md:w-1/3 space-y-4 order-2 md:order-1">
                            {PROJECTS.map((project, index) => (
                                <div
                                    key={project.id}
                                    className={cn(
                                        "cursor-pointer transition-all duration-300",
                                        index === activeIndex
                                            ? ""
                                            : "opacity-60 hover:opacity-80"
                                    )}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    <DoodleBorder
                                        className={cn(
                                            "h-32 transition-all",
                                            index === activeIndex
                                                ? "bg-accent/40 scale-105"
                                                : "bg-background hover:bg-accent/20"
                                        )}
                                        animated={index === activeIndex}
                                    >
                                        <div
                                            className={`h-full flex flex-col justify-center transition-all duration-500 ${
                                                isVisible
                                                    ? "opacity-100 translate-x-0"
                                                    : "opacity-0 -translate-x-10"
                                            }`}
                                            style={{
                                                transitionDelay: `${
                                                    200 + index * 100
                                                }ms`,
                                            }}
                                        >
                                            <h3 className="font-bold mb-2">
                                                {project.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </DoodleBorder>
                                </div>
                            ))}
                        </div>

                        {/* Active Project */}
                        <div className="w-full md:w-2/3 order-1 md:order-2">
                            <DoodleBorder
                                className="bg-background h-full"
                                animated={true}
                            >
                                <div
                                    className={`transition-all duration-700 ${
                                        isVisible
                                            ? "opacity-100 scale-100"
                                            : "opacity-0 scale-95"
                                    }`}
                                >
                                    {PROJECTS.map((project, index) => (
                                        <div
                                            key={project.id}
                                            className={cn(
                                                "transition-all duration-500",
                                                index === activeIndex
                                                    ? "opacity-100 translate-y-0 h-auto"
                                                    : "opacity-0 translate-y-8 h-0 overflow-hidden"
                                            )}
                                        >
                                            <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                                                />
                                            </div>
                                            <h3 className="text-2xl font-bold mb-3">
                                                {project.title}
                                            </h3>
                                            <p className="text-muted-foreground mb-4">
                                                {project.description}
                                            </p>
                                            <div className="flex gap-3">
                                                <Button
                                                    size="sm"
                                                    className="group"
                                                >
                                                    <ExternalLink className="w-4 h-4 mr-2 group-hover:animate-pulse" />
                                                    View Project
                                                </Button>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    className="group"
                                                >
                                                    <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                                                    Source Code
                                                </Button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </DoodleBorder>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
