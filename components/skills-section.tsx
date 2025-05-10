"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { SKILLS } from "@/lib/constants";
import { useTheme } from "next-themes";
import { Code, Database, Laptop, Wrench } from "lucide-react";

export function SkillsSection() {
  const { theme } = useTheme();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState<keyof typeof SKILLS>("languages");
  
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

  const categories = [
    { key: "languages" as const, label: "Languages", icon: <Code className="w-5 h-5" /> },
    { key: "frameworks" as const, label: "Frameworks & Libraries", icon: <Laptop className="w-5 h-5" /> },
    { key: "databases" as const, label: "Databases", icon: <Database className="w-5 h-5" /> },
    { key: "tools" as const, label: "Tools", icon: <Wrench className="w-5 h-5" /> },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-accent/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <DoodleUnderline thickness={3} animated={true}>Technical Skills</DoodleUnderline>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className={`space-y-6 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
              <DoodleBorder>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Skill Categories</h3>
                  <div className="space-y-4">
                    {categories.map((category) => (
                      <button
                        key={category.key}
                        onClick={() => setActiveCategory(category.key)}
                        className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-300 ${
                          activeCategory === category.key
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-accent"
                        }`}
                      >
                        {category.icon}
                        <span className="font-medium">{category.label}</span>
                      </button>
                    ))}
                  </div>
                  
                  <div className="mt-6 relative">
                    <NotepadDoodle theme={theme} />
                  </div>
                </div>
              </DoodleBorder>
            </div>
            
            <div className={`space-y-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
              <DoodleBorder>
                <div>
                  <h3 className="text-2xl font-bold mb-6">{categories.find(c => c.key === activeCategory)?.label}</h3>
                  <div className="space-y-6">
                    {SKILLS[activeCategory].map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="h-3 bg-accent relative rounded-full overflow-hidden">
                          <div
                            className="absolute top-0 left-0 h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                            style={{ 
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100}ms`
                            }}
                          />
                          
                          {/* Doodle dots on the progress bar */}
                          {Array.from({ length: 6 }).map((_, i) => {
                            const position = (i + 1) * 16.66;
                            return (
                              <div
                                key={i}
                                className={`absolute top-1/2 w-2 h-2 rounded-full bg-background transform -translate-y-1/2 transition-opacity duration-300 ${
                                  isVisible && skill.level >= position ? 'opacity-100' : 'opacity-30'
                                }`}
                                style={{ 
                                  left: `${position}%`,
                                  transitionDelay: `${index * 100 + i * 50}ms`
                                }}
                              />
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </DoodleBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NotepadDoodle({ theme }: { theme?: string }) {
  return (
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        d="M20 10H180C185 10 190 15 190 20V100C190 105 185 110 180 110H20C15 110 10 105 10 100V20C10 15 15 10 20 10Z" 
        stroke={theme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))"}
        strokeWidth="2" 
        strokeLinejoin="round"
        fill="none"
      />
      <path 
        d="M40 30H160M40 50H160M40 70H160M40 90H120" 
        stroke={theme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))"}
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}