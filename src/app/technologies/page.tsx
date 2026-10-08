"use client";

import React, { useState } from "react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Badge from "@/components/ui/Badge";
import Tag from "@/components/ui/Tag";
import Reveal from "@/components/ui/Reveal";
import { technologyCategories, technologyItems } from "@/data/technologies";
import { Cpu, Code2, Server, Radio, Cloud, ShieldCheck, Check } from "lucide-react";

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredItems =
    selectedCategory === "all"
      ? technologyItems
      : technologyItems.filter((item) => item.category === selectedCategory);

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "ai-ml":
        return Cpu;
      case "frontend":
        return Code2;
      case "backend":
        return Server;
      case "iot":
        return Radio;
      case "cloud":
        return Cloud;
      case "testing":
        return ShieldCheck;
      default:
        return Cpu;
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-[var(--card)] border-b border-[var(--line)] py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Badge variant="brand" className="mb-3">
            Technology Stack
          </Badge>
          <h1 className="font-heading text-3xl font-extrabold text-[var(--ink)] sm:text-4xl">
            Technologies & Frameworks Used
          </h1>
          <p className="mt-3 max-w-3xl text-base text-[var(--muted)] leading-relaxed">
            Full technology stack powering the LatexGuard IoT multi-sensor probe, cloud machine-learning microservices, collection logistics, and static portfolio platform.
          </p>
        </div>
      </section>

      {/* Filterable Grid Section */}
      <Section bg="wash">
        <SectionHeading
          badge="Interactive Stack Filter"
          title="System Stack by Domain"
          description="Filter technologies by research domain or select individual items to view their exact role within the LatexGuard architecture."
        />

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center sm:justify-start">
          <Tag
            isActive={selectedCategory === "all"}
            onClick={() => setSelectedCategory("all")}
          >
            All Technologies ({technologyItems.length})
          </Tag>
          {technologyCategories.map((cat) => (
            <Tag
              key={cat.id}
              isActive={selectedCategory === cat.id}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </Tag>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((tech, idx) => {
            const IconComp = getCategoryIcon(tech.category);
            const categoryObj = technologyCategories.find((c) => c.id === tech.category);
            return (
              <Reveal key={idx} direction="up" delay={(idx % 6) * 0.05}>
                <div className="flex flex-col justify-between gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] p-6 shadow-xs hover:border-[var(--brand-deep)] transition-all h-full">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--brand-soft)] text-[var(--brand-deep)]">
                        <IconComp className="h-5 w-5" />
                      </div>
                      <Badge variant="neutral" size="sm">
                        {categoryObj?.label}
                      </Badge>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-[var(--ink)] flex items-center justify-between">
                      <span>{tech.name}</span>
                      {tech.isConfirmed && (
                        <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#dcfce7] text-[#166534]" title="Confirmed Production Tool">
                          <Check className="h-2.5 w-2.5" />
                        </span>
                      )}
                    </h3>

                    <p className="text-xs text-[var(--muted)] leading-relaxed">
                      {tech.purpose}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
