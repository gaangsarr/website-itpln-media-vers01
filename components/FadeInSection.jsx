"use client";
import { useState, useEffect, useRef } from "react";

function useOnScreen(ref, rootMargin = "0px") {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hanya trigger sekali, tidak berulang
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      },
      {
        rootMargin,
        threshold: 0.1, // 10% elemen terlihat baru trigger
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}

export default function FadeInSection({
  children,
  delay = "0ms",
  direction = "up",
  duration = 700,
}) {
  const ref = useRef();
  const isVisible = useOnScreen(ref, "-50px");

  // Different animation directions
  const animations = {
    up: "translate-y-10",
    down: "translate-y-[-40px]",
    left: "translate-x-10",
    right: "translate-x-[-40px]",
    scale: "scale-95",
    fade: "",
  };

  const initialTransform = animations[direction] || animations.up;

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: delay,
        transitionDuration: `${duration}ms`,
      }}
      className={`
        opacity-0 ${initialTransform} 
        transition-all ease-out
        ${isVisible ? "opacity-100 translate-y-0 translate-x-0 scale-100" : ""}
      `}
    >
      {children}
    </div>
  );
}
