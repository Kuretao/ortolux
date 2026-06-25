"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { gsap } from "gsap";

export function PageMotion({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (media.matches) return;

    gsap.fromTo(
      element,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
    );
  }, []);

  return <div ref={ref}>{children}</div>;
}
