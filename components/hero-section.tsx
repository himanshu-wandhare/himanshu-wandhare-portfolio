"use client";

import { SITE_CONFIG } from "@/lib/constants";
import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { Button } from "./ui/button";
import { ArrowDownCircle, Download } from "lucide-react";

export function HeroSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToAbout = () => {
        document.querySelector("#about")?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <section
            id="hero"
            ref={containerRef}
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
        >
            <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <DoodleBorder className="bg-background/80 backdrop-blur-sm">
                        <div className="text-center space-y-6">
                            <div className="relative inline-block">
                                <h1
                                    className={`text-4xl md:text-6xl lg:text-7xl font-bold transition-all duration-1000 ease-out ${
                                        isVisible
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                    }`}
                                >
                                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
                                        {SITE_CONFIG.name}
                                    </span>
                                </h1>
                                <div
                                    className={`absolute -right-6 -top-6 opacity-70 transition-all duration-1000 delay-500 ${
                                        isVisible
                                            ? "opacity-100 translate-y-0 rotate-0"
                                            : "opacity-0 translate-y-10 rotate-45"
                                    }`}
                                >
                                    <StarDoodle />
                                </div>
                            </div>

                            <h2
                                className={`text-xl md:text-2xl text-foreground/80 transition-all duration-1000 delay-200 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                            >
                                {SITE_CONFIG.title}
                            </h2>

                            <p
                                className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                            >
                                {SITE_CONFIG.description}
                            </p>

                            <div
                                className={`pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-600 ${
                                    isVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }`}
                            >
                                <Button
                                    onClick={scrollToAbout}
                                    variant="default"
                                    size="lg"
                                    className="group"
                                >
                                    Explore My Work
                                    <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:animate-bounce" />
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    className="group"
                                    asChild
                                >
                                    <a
                                        href="/Himanshu Wandhare Resume.pdf"
                                        download
                                    >
                                        Download CV
                                        <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </DoodleBorder>
                </div>
            </div>

            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className={`absolute rounded-full bg-primary/5 dark:bg-primary/10 transition-all duration-1000 ease-out`}
                        style={{
                            width: `${Math.random() * 50 + 20}px`,
                            height: `${Math.random() * 50 + 20}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: isVisible ? 0.5 + Math.random() * 0.5 : 0,
                            transform: isVisible
                                ? `translate(-50%, -50%) scale(${
                                      0.5 + Math.random()
                                  })`
                                : "translate(-50%, -50%) scale(0)",
                            transitionDelay: `${i * 50}ms`,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}

function StarDoodle() {
    return (
        <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 2C20.5 8.5 22.5 17.5 29 20C22.5 22.5 20.5 32 20 38C19.5 32 17.5 22.5 11 20C17.5 17.5 19.5 8.5 20 2Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
            />
        </svg>
    );
}
