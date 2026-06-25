"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function HomeGsap() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (reduceMotion.matches) {
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const contexts = gsap.utils.toArray<HTMLElement>("[data-gsap]");
    const triggers: ScrollTrigger[] = [];

    contexts.forEach((container) => {
      const cards = gsap.utils.toArray<HTMLElement>(
        ":scope > article, :scope > a, :scope > div",
        container,
      );

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          once: true,
        },
      });

      if (tl.scrollTrigger) {
        triggers.push(tl.scrollTrigger);
      }

      tl.fromTo(
        container,
        { autoAlpha: 0, y: 34, scale: 0.985 },
        { autoAlpha: 1, y: 0, scale: 1, duration: 0.75 },
      );

      if (cards.length) {
        tl.fromTo(
          cards,
          { autoAlpha: 0, y: 26, scale: 0.965, filter: "blur(10px)" },
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 0.68,
            stagger: 0.055,
          },
          "-=0.42",
        );
      }
    });

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
