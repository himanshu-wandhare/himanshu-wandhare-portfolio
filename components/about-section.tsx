"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { useTheme } from "next-themes";

export function AboutSection() {
    const { theme } = useTheme();
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.2,
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

    return (
        <section
            id="about"
            ref={sectionRef}
            className="py-20 md:py-32 bg-accent/20"
        >
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
                            About Me
                        </DoodleUnderline>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div
                            className={`transition-all duration-700 delay-300 ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 -translate-x-20"
                            }`}
                        >
                            <DoodleBorder>
                                <div className="relative">
                                    <img
                                        src="/profile.jpg"
                                        alt="Creative workspace"
                                        className="rounded-md w-full"
                                    />
                                    <div className="absolute -right-5 -bottom-5 transform rotate-12">
                                        <PencilDoodle theme={theme} />
                                    </div>
                                </div>
                            </DoodleBorder>
                        </div>

                        <div
                            className={`space-y-6 transition-all duration-700 delay-500 ${
                                isVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-20"
                            }`}
                        >
                            <DoodleBorder>
                                <div>
                                    <h3 className="text-2xl font-bold mb-4">
                                        Creative journey
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        I'm a creative developer and designer
                                        with a keen eye for creating beautiful
                                        and functional web applications.
                                        Throughout my academic journey, I’ve
                                        applied my learning through real-world
                                        projects, internships, and part-time
                                        roles, gaining valuable hands-on
                                        experience.
                                    </p>
                                    <p className="text-muted-foreground">
                                        My approach to development combines
                                        technical expertise with creative
                                        problem-solving. I believe in writing
                                        clean, maintainable code and creating
                                        intuitive user experiences that make a
                                        difference. I believe that the best work
                                        happens at the intersection of
                                        technology, art, and human experience.
                                    </p>
                                </div>
                            </DoodleBorder>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function PencilDoodle({ theme }: { theme?: string }) {
    return (
        <svg
            width="80"
            height="80"
            viewBox="0 0 80 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M15 65L60 20C62 18 64 18 66 20C68 22 68 24 66 26L21 71C20 72 19 72 18 72L10 70C8 70 8 69 8 68L10 60C10 59 10 58 11 57L15 65Z"
                stroke={
                    theme === "dark"
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary))"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
            />
            <path
                d="M48 32L58 42"
                stroke={
                    theme === "dark"
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary))"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M15 65L10 60"
                stroke={
                    theme === "dark"
                        ? "hsl(var(--primary))"
                        : "hsl(var(--primary))"
                }
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
