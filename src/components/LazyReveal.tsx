import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface LazyRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const LazyReveal = ({ children, className, delay = 0 }: LazyRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-12",
        className
      )}
    >
      {children}
    </div>
  );
};
