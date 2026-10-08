import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Header from "@/components/layout/Header";

describe("Header Component Accessibility & Rendering", () => {
  it("renders all seven navigation links in exact order", () => {
    render(<Header />);
    const expectedLabels = [
      "Home",
      "Project Scope",
      "Methodology",
      "Technologies",
      "Milestones",
      "Downloads",
      "About Us"
    ];

    const desktopNav = screen.getByRole("navigation", { name: /main navigation/i });
    const links = desktopNav.querySelectorAll("a");

    expect(links.length).toBe(7);
    expectedLabels.forEach((label, idx) => {
      expect(links[idx]?.textContent).toContain(label);
    });
  });

  it("opens and closes mobile menu using open button and Escape key", () => {
    render(<Header />);

    const openButton = screen.getByRole("button", { name: /open main navigation menu/i });
    expect(openButton).toBeInTheDocument();

    // Open mobile drawer
    fireEvent.click(openButton);
    const dialog = screen.getByRole("dialog", { name: /mobile navigation menu/i });
    expect(dialog).toBeInTheDocument();

    // Press Escape to close
    fireEvent.keyDown(window, { key: "Escape" });
    expect(screen.queryByRole("dialog", { name: /mobile navigation menu/i })).not.toBeInTheDocument();
  });
});
