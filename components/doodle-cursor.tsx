"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function DoodleCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [dots, setDots] = useState<{ x: number; y: number; timestamp: number }[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
      
      setDots(prev => {
        const now = Date.now();
        const newDot = { x: e.clientX, y: e.clientY, timestamp: now };
        const filteredDots = prev.filter(dot => now - dot.timestamp < 500);
        return [...filteredDots, newDot].slice(-15);
      });
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };
    
    window.addEventListener("mousemove", updatePosition);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    
    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);
  
  if (!isClient) return null;

  return (
    <>
      {dots.map((dot, i) => (
        <div
          key={i}
          className={cn(
            "fixed pointer-events-none rounded-full mix-blend-difference z-50",
            "bg-primary/30 dark:bg-primary/40"
          )}
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            width: `${5 + (i / dots.length) * 4}px`,
            height: `${5 + (i / dots.length) * 4}px`,
            opacity: 1 - (i / dots.length),
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <div
        className={cn(
          "fixed rounded-full pointer-events-none mix-blend-difference z-50 transition-opacity",
          "w-8 h-8 border-2 border-primary dark:border-primary",
          visible ? "opacity-100" : "opacity-0"
        )}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </>
  );
}