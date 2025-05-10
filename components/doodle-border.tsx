"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface DoodleBorderProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export function DoodleBorder({ 
  children, 
  className = "", 
  animated = true 
}: DoodleBorderProps) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    
    const generatePath = () => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return "";
      
      const width = rect.width;
      const height = rect.height;
      
      // Create a slightly "wobbly" rectangle path
      let newPath = `M 0,0 `;
      
      // Top edge
      for (let x = 0; x < width; x += width / 10) {
        const y = Math.random() * 5 - 2.5;
        newPath += `L ${x},${y} `;
      }
      newPath += `L ${width},0 `;
      
      // Right edge
      for (let y = 0; y < height; y += height / 10) {
        const x = width + Math.random() * 5 - 2.5;
        newPath += `L ${x},${y} `;
      }
      newPath += `L ${width},${height} `;
      
      // Bottom edge
      for (let x = width; x > 0; x -= width / 10) {
        const y = height + Math.random() * 5 - 2.5;
        newPath += `L ${x},${y} `;
      }
      newPath += `L 0,${height} `;
      
      // Left edge
      for (let y = height; y > 0; y -= height / 10) {
        const x = Math.random() * 5 - 2.5;
        newPath += `L ${x},${y} `;
      }
      newPath += `Z`;
      
      return newPath;
    };
    
    setPath(generatePath());
    
    if (animated) {
      const interval = setInterval(() => {
        setPath(generatePath());
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [animated, isClient]);
  
  if (!isClient) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          overflow: "visible",
          zIndex: 1,
        }}
      >
        <path
          d={path}
          fill="none"
          stroke={theme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))"}
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          style={{ 
            transition: animated ? "d 1s ease-in-out" : "none",
          }}
        />
      </svg>
      <div className="relative z-10 p-5">{children}</div>
    </div>
  );
}