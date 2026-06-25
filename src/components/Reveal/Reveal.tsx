"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { gsap } from "gsap";

type RevealProps = PropsWithChildren<{
  delay?: number;
  className?: string;
}>;

export function Reveal({ children, delay = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55, delay, ease: "power3.out" },
    );
  }, [delay]);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
