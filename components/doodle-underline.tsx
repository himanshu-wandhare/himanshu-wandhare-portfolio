"use client";

import { useTheme } from "next-themes";
import { useEffect, useRef, useState } from "react";

interface DoodleUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  thickness?: number;
  animated?: boolean;
}

export function DoodleUnderline({
  children,
  className = "",
  color,
  thickness = 2,
  animated = true,
}: DoodleUnderlineProps) {
  const { theme } = useTheme();
  const textRef = useRef<HTMLDivElement>(null);
  const [path, setPath] = useState<string>("");
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!textRef.current) return;

    const updateUnderlinePath = () => {
      const rect = textRef.current?.getBoundingClientRect();
      if (!rect) return;

      setDimensions({ width: rect.width, height: rect.height });

      // Generate wavy underline path
      let newPath = `M 0,${rect.height} `;
      const steps = 20;

      for (let i = 0; i <= steps; i++) {
        const x = (rect.width * i) / steps;
        const y = rect.height + Math.sin(i * 0.5) * 3 + (Math.random() * 2 - 1);
        newPath += `L ${x},${y} `;
      }

      setPath(newPath);
    };

    updateUnderlinePath();

    if (animated) {
      const interval = setInterval(updateUnderlinePath, 3000);
      window.addEventListener("resize", updateUnderlinePath);

      return () => {
        clearInterval(interval);
        window.removeEventListener("resize", updateUnderlinePath);
      };
    }
  }, [animated, isClient]);

  const strokeColor = color || (theme === "dark" ? "hsl(var(--primary))" : "hsl(var(--primary))");

  if (!isClient) {
    return <span className={className}>{children}</span>;
  }

  return (
    <div ref={textRef} className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="absolute left-0 bottom-0 pointer-events-none"
        width={dimensions.width}
        height={10}
        style={{ overflow: "visible" }}
      >
        <path
          d={path}
          fill="none"
          stroke={strokeColor}
          strokeWidth={thickness}
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transition: animated ? "d 1s ease-in-out" : "none",
          }}
        />
      </svg>
    </div>
  );
}