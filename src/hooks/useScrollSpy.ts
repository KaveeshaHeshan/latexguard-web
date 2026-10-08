"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: string[], offset = 100): string {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined" || ids.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const id = ids[i];
        if (!id) continue;
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveId(id);
          return;
        }
      }

      if (ids[0]) {
        setActiveId(ids[0]);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids, offset]);

  return activeId;
}
