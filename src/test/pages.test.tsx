import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HomePage from "@/app/page";
import ScopePage from "@/app/scope/page";
import MethodologyPage from "@/app/methodology/page";
import TechnologiesPage from "@/app/technologies/page";
import MilestonesPage from "@/app/milestones/page";
import DownloadsPage from "@/app/downloads/page";
import AboutPage from "@/app/about/page";
import NotFound from "@/app/not-found";

describe("Page Components Rendering Tests", () => {
  it("renders HomePage without crashing", () => {
    const { container } = render(<HomePage />);
    expect(container).toBeInTheDocument();
  });

  it("renders ScopePage without crashing", () => {
    const { container } = render(<ScopePage />);
    expect(container).toBeInTheDocument();
  });

  it("renders MethodologyPage without crashing", () => {
    const { container } = render(<MethodologyPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders TechnologiesPage without crashing", () => {
    const { container } = render(<TechnologiesPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders MilestonesPage without crashing", () => {
    const { container } = render(<MilestonesPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders DownloadsPage without crashing", () => {
    const { container } = render(<DownloadsPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders AboutPage without crashing", () => {
    const { container } = render(<AboutPage />);
    expect(container).toBeInTheDocument();
  });

  it("renders NotFound page without crashing", () => {
    const { container } = render(<NotFound />);
    expect(container).toBeInTheDocument();
  });
});
