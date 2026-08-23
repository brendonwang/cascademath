import { ArrowUpRight } from "lucide-react";
import { PageSection, SectionIntro, sectionCopyClass } from "@/components/PageSection";
import { contactEmail, sponsors } from "@/content/site";

const tierDetails = {
  platinum: {
    label: "Platinum",
    accent: "text-[oklch(0.43_0.05_240)]",
  },
  gold: {
    label: "Gold",
    accent: "text-[oklch(0.52_0.1_72)]",
  },
  bronze: {
    label: "Bronze",
    accent: "text-[oklch(0.5_0.08_55)]",
  },
} as const;

export function SponsorsPage() {
  const tiers = ["platinum", "gold", "bronze"] as const;
  const hasSponsors = sponsors.length > 0;

  return (
    <>
      <PageSection className="pb-[clamp(3rem,6vw,5rem)]" aria-labelledby="sponsors-heading">
        <div className="grid max-w-[43rem] gap-[1.1rem]">
          <h1 id="sponsors-heading" className="max-w-[9ch]">Sponsors</h1>
          <p className={sectionCopyClass}>
            Sponsors help pay for the venue, food, materials, and awards. They also help students
            who may not be able to pay the registration fee.
          </p>
        </div>
      </PageSection>

      <PageSection className="border-t border-border" aria-labelledby="current-sponsors-heading">
        <SectionIntro>
          <h2 id="current-sponsors-heading">Our 2026 sponsors</h2>
          <p className={sectionCopyClass}>These organizations support this year’s event.</p>
        </SectionIntro>
        {hasSponsors ? (
          <div className="border-y border-border">
            {tiers.map((tier) => {
              const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
              const details = tierDetails[tier];

              if (tierSponsors.length === 0) {
                return null;
              }

              return (
                <article
                  aria-labelledby={`${tier}-sponsors-heading`}
                  className="grid grid-cols-[minmax(8rem,0.34fr)_minmax(0,1fr)] items-center gap-[clamp(1.5rem,5vw,5rem)] border-b border-border py-[clamp(1.6rem,4vw,2.7rem)] last:border-b-0 max-[700px]:grid-cols-1 max-[700px]:items-start max-[700px]:gap-4"
                  key={tier}
                >
                  <h3
                    id={`${tier}-sponsors-heading`}
                    className={`text-[0.78rem] font-[720] tracking-[0.12em] uppercase ${details.accent}`}
                  >
                    {details.label}
                  </h3>
                  <ul className="flex list-none flex-wrap items-center gap-x-[clamp(1.5rem,5vw,4.5rem)] gap-y-5 p-0">
                    {tierSponsors.map((sponsor) => (
                      <li className="max-w-full" key={sponsor.name}>
                        {sponsor.website ? (
                          <a
                            className="inline-flex max-w-full items-center gap-[0.4rem] text-foreground no-underline transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3"
                            href={sponsor.website}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="break-words text-[clamp(1.7rem,3.8vw,2.65rem)] font-[760] tracking-[-0.08em]">
                              {sponsor.name}
                            </span>
                            <ArrowUpRight className="size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={2} />
                          </a>
                        ) : (
                          <span className="break-words text-[clamp(1.7rem,3.8vw,2.65rem)] font-[760] tracking-[-0.08em]">
                            {sponsor.name}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border-y border-border py-5 text-[0.95rem] leading-[1.55] text-muted-foreground">
            <p>We’ll add sponsors here as they’re confirmed.</p>
          </div>
        )}
        <p className="mt-7 text-[0.95rem] leading-[1.55] text-muted-foreground">
          Interested in sponsoring Cascade Math Fest?{" "}
          <a
            className="inline-flex items-center gap-[0.4rem] text-foreground no-underline transition-colors hover:text-primary"
            href={`mailto:${contactEmail}?subject=Cascade%20Math%20sponsorship%20interest`}
          >
            Email us
            <ArrowUpRight className="size-4 text-primary" aria-hidden="true" strokeWidth={2} />
          </a>
        </p>
      </PageSection>
    </>
  );
}
