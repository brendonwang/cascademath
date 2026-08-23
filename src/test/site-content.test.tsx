import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import App from "@/App";
import {
  contactEmail,
  eventInfo,
  expectationCards,
  faqItems,
  navItems,
  sponsors,
  teamIntro,
  teamProfiles,
  teamSlots,
} from "@/content/site";

describe("Cascade Math site content contract", () => {
  it("keeps the public CMF date exact and unknown logistics draft-safe", () => {
    expect(eventInfo.title).toBe("2026 Cascade Math Fest");
    expect(eventInfo.date).toBe("Saturday, September 19, 2026");
    expect(eventInfo.venue).toMatch(/TBA/i);
    expect(eventInfo.registration).toMatch(/\$10/i);
    expect(eventInfo.prizes).toMatch(/prizes and trophies/i);
    expect(eventInfo.skillLevels).toMatch(/every skill level/i);
  });

  it("keeps team, sponsor, contact, and FAQ data editable", () => {
    expect(contactEmail).toBe("cascademathcm@gmail.com");
    expect(navItems.some((item) => item.href === "/sponsors")).toBe(true);
    expect(teamSlots).toHaveLength(6);
    expect(teamProfiles).toHaveLength(teamSlots.length);
    expect(teamIntro).toMatch(/students/i);
    expect(teamSlots.every((slot) => slot.name !== "Team Member")).toBe(true);
    expect(sponsors.map((sponsor) => sponsor.name)).toEqual(["HRT", "Jane Street", "AoPS"]);
    expect(expectationCards.map((card) => card.title)).toEqual([
      "Creative contest",
      "Team round",
      "Puzzles, games, and workshops",
      "Awards",
    ]);
    expect(faqItems.some((item) => /register/i.test(item.question))).toBe(true);
    expect(faqItems.some((item) => /\$10/i.test(item.answer))).toBe(true);
  });

  it("renders the home, CMF, sponsors, and about routes", () => {
    const home = render(
      <MemoryRouter initialEntries={["/", "/cmf", "/about"]} initialIndex={0}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Student-run math events in Seattle\./i })).toBeInTheDocument();
    home.unmount();

    const cmf = render(
      <MemoryRouter initialEntries={["/cmf"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /2026 Cascade Math Fest/i })).toBeInTheDocument();
    expect(screen.queryByRole("heading", { name: /Help keep CMF free/i })).not.toBeInTheDocument();
    cmf.unmount();

    const sponsors = render(
      <MemoryRouter initialEntries={["/sponsors"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /^Sponsors$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /Our 2026 sponsors/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /HRT/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Jane Street/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /AoPS/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Email us/i })).toBeInTheDocument();
    sponsors.unmount();

    render(
      <MemoryRouter initialEntries={["/about"]}>
        <App />
      </MemoryRouter>,
    );
    expect(screen.getByRole("heading", { name: /About Cascade Math/i })).toBeInTheDocument();
    expect(screen.getAllByText(contactEmail).length).toBeGreaterThan(0);
    const teamSection = screen.getByRole("region", { name: /Our team/i });
    expect(teamSection.querySelectorAll("[data-team-portrait]")).toHaveLength(teamSlots.length);
    expect(within(teamSection).queryByText(/^0[1-6]$/)).not.toBeInTheDocument();
  });

  it("updates route metadata and renders a real not-found page", () => {
    const cmf = render(
      <MemoryRouter initialEntries={["/cmf"]}>
        <App />
      </MemoryRouter>,
    );

    expect(document.title).toBe("2026 Cascade Math Fest | Seattle math event");
    expect(document.head.querySelector('meta[name="description"]')).toHaveAttribute(
      "content",
      expect.stringMatching(/September 19/i),
    );
    expect(document.head.querySelector('link[rel="canonical"]')).toHaveAttribute(
      "href",
      expect.stringMatching(/\/cmf$/),
    );
    expect(document.getElementById("site-structured-data")?.textContent).toMatch(
      /Cascade Math Foundation/,
    );
    cmf.unmount();

    render(
      <MemoryRouter initialEntries={["/missing-page"]}>
        <App />
      </MemoryRouter>,
    );

    expect(screen.getByRole("heading", { name: /Page not found/i })).toBeInTheDocument();
    expect(document.head.querySelector('meta[name="robots"]')).toHaveAttribute(
      "content",
      "noindex, nofollow",
    );
    expect(document.head.querySelector('link[rel="canonical"]')).not.toBeInTheDocument();
  });
});
