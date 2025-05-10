"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { EXPERIENCE } from "@/lib/constants";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
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
      id="experience"
      ref={sectionRef}
      className="py-20 md:py-32 bg-accent/20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <DoodleUnderline thickness={3} animated={true}>Experience</DoodleUnderline>
          </h2>
          
          <div className="space-y-8">
            {EXPERIENCE.map((job, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <DoodleBorder>
                  <div className="space-y-4">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <h3 className="text-xl font-bold">{job.position}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{job.period}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-primary">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                    
                    <p className="text-muted-foreground">{job.description}</p>
                    
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </DoodleBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}