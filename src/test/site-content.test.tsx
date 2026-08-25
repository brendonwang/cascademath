import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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
    expect(teamSlots.every((slot) => slot.title.includes("Founding Member"))).toBe(true);
    expect(teamSlots.filter((slot) => /Co-President/.test(slot.title)).map((slot) => slot.name)).toEqual([
      "Laura Wang",
      "Eric Shao",
    ]);
    expect(teamSlots.find((slot) => slot.name === "Brendon Wang")?.title).toMatch(/Tech Director/);
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
    expect(screen.getByRole("img", { name: "HRT" })).toHaveAttribute(
      "src",
      "/assets/sponsors/hrt.svg",
    );
    expect(screen.getByRole("img", { name: "HRT" })).toHaveClass(
      "h-[clamp(4.5rem,8vw,6rem)]",
    );
    expect(screen.getByRole("img", { name: "Jane Street" })).toHaveAttribute(
      "src",
      "/assets/sponsors/jane-street.png",
    );
    expect(screen.getByRole("img", { name: "Jane Street" })).toHaveClass(
      "h-[clamp(4rem,7.5vw,5.5rem)]",
    );
    expect(screen.getByRole("img", { name: "AoPS" })).toHaveAttribute(
      "src",
      "/assets/sponsors/aops.svg",
    );
    expect(screen.getByRole("img", { name: "AoPS" })).toHaveClass(
      "h-[clamp(3.5rem,7vw,5rem)]",
    );
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

  it("opens the mobile menu and keeps it mounted through its exit transition", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    const openButton = screen.getByRole("button", { name: "Open navigation" });
    fireEvent.click(openButton);

    const dialog = await screen.findByRole("dialog", { name: "Menu" });
    await waitFor(() => {
      expect(openButton).toHaveAttribute("aria-expanded", "true");
      expect(document.body.style.overflow).toBe("hidden");
    });
    expect(within(dialog).getByRole("link", { name: "Math Fest" })).toBeInTheDocument();

    fireEvent.click(within(dialog).getByRole("button", { name: "Close navigation" }));
    expect(openButton).toHaveAttribute("aria-expanded", "false");
    expect(dialog).toBeInTheDocument();

    fireEvent.transitionEnd(dialog, { propertyName: "translate" });
    expect(screen.queryByRole("dialog", { name: "Menu" })).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
  });

  it("resets document scroll when navigating to another route", async () => {
    const page = render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>,
    );

    document.documentElement.scrollTop = 900;
    document.body.scrollTop = 900;

    const primaryNavigation = screen.getByRole("navigation", {
      name: /Primary navigation/i,
    });
    fireEvent.click(within(primaryNavigation).getByRole("link", { name: "About" }));

    await screen.findByRole("heading", { name: /About Cascade Math/i });
    await waitFor(() => {
      expect(document.documentElement.scrollTop).toBe(0);
      expect(document.body.scrollTop).toBe(0);
    });

    page.unmount();
  });
});
