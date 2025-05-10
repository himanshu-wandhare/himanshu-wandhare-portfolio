"use client";

import { useEffect, useRef, useState } from "react";
import { DoodleBorder } from "./doodle-border";
import { DoodleUnderline } from "./doodle-underline";
import { CERTIFICATIONS } from "@/lib/constants";
import { Award, Calendar } from "lucide-react";

export function CertificationsSection() {
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
      id="certifications"
      ref={sectionRef}
      className="py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-bold text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <DoodleUnderline thickness={3} animated={true}>Certifications</DoodleUnderline>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <DoodleBorder>
                  <div className="space-y-4">
                    <div className="relative aspect-video rounded-md overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Award className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <h3 className="font-bold">{cert.name}</h3>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{cert.date}</span>
                      </div>
                      
                      <p className="text-muted-foreground">{cert.issuer}</p>
                    </div>
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