/// <reference types="node" />
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Cmf26Gallery } from "@/components/Cmf26Gallery";
import { cmf26PhotoSections, cmf26Photos } from "@/content/cmf26-photos";

describe("CMF26 gallery", () => {
  it("renders grouped photos with captions and no full-size links", () => {
    const photos = [
      { src: "/assets/cmf26/team.webp", alt: "Students solving a puzzle", caption: "Team round", width: 2000, height: 1333 },
      { src: "/assets/cmf26/awards.webp", alt: "A student holding a trophy", caption: "Awards ceremony", width: 1333, height: 2000 },
    ];
    const { container } = render(
      <Cmf26Gallery sections={[{ title: "Rounds", photos }]} />,
    );
    const disclosure = container.querySelector("details");
    expect(disclosure).not.toBeNull();
    if (disclosure) disclosure.open = true;
    const figures = screen.getAllByRole("figure");
    expect(figures).toHaveLength(2);
    expect(screen.getByText("2 photos")).toBeInTheDocument();
    photos.forEach((photo, index) => {
      const figure = within(figures[index]);
      expect(figure.getByText(photo.caption).tagName).toBe("FIGCAPTION");
      expect(figure.queryByRole("link")).not.toBeInTheDocument();
      const image = figure.getByRole("img", { name: photo.alt });
      expect(image).toHaveAttribute("src", photo.src);
      expect(image).toHaveAttribute("width", String(photo.width));
      expect(image).toHaveAttribute("height", String(photo.height));
      expect(image).toHaveAttribute("loading", "lazy");
    });
  });

  it("keeps published entries captioned and backed by unique local image files", () => {
    expect(new Set(cmf26Photos.map((photo) => photo.src)).size).toBe(cmf26Photos.length);
    expect(cmf26PhotoSections.map((section) => section.photos.length)).toEqual([20, 27, 26, 3]);
    for (const photo of cmf26Photos) {
      expect(photo.src).toMatch(/^\/assets\/cmf26\/[a-z0-9-]+\.(webp|jpe?g)$/);
      expect(existsSync(resolve("public", photo.src.slice(1)))).toBe(true);
      expect(photo.caption.trim()).not.toBe("");
      expect(photo.alt.trim()).not.toBe("");
      expect(Number.isInteger(photo.width) && photo.width > 0).toBe(true);
      expect(Number.isInteger(photo.height) && photo.height > 0).toBe(true);
    }
  });
});
