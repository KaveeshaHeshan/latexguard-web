import React from "react";
import Badge from "./Badge";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
  align = "left",
  className
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-10 sm:mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {badge && (
        <div className={cn("mb-3", align === "center" && "flex justify-center")}>
          <Badge variant="brand">{badge}</Badge>
        </div>
      )}
      <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--ink)] sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
