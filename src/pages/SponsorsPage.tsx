import { ArrowUpRight } from "lucide-react";
import {
  PageSection,
  SectionIntro,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { contactEmail, sponsors } from "@/content/site";
import { cn } from "@/lib/utils";

const tierDetails = {
  platinum: {
    label: "Platinum",
    logoClass: "w-[clamp(16rem,22vw,20rem)]",
  },
  gold: {
    label: "Gold",
    logoClass: "w-[clamp(15rem,20vw,18rem)]",
  },
  bronze: {
    label: "Bronze",
    logoClass: "w-[clamp(14rem,18vw,16rem)]",
  },
} as const;

const sponsorTiers = ["platinum", "gold", "bronze"] as const;

const sponsorNameClass =
  "break-words text-[clamp(1.75rem,3.8vw,2.75rem)] font-[700]";

const sponsorLogoClass =
  "h-auto max-w-full object-contain object-left";

export function SponsorsPage() {
  const hasSponsors = sponsors.length > 0;

  return (
    <>
      <section className="border-b bg-background" aria-labelledby="sponsors-heading">
        <div className={cn(pageContainerClass, "py-[clamp(4rem,7vw,6.5rem)] max-[700px]:py-10")}>
          <div className="grid max-w-[46rem] gap-[1.15rem]">
            <h1 id="sponsors-heading" className="max-w-[9ch]">
              Sponsors
            </h1>
            <p className={sectionCopyClass}>
              Their support helps us be able to host events for the community.
            </p>
          </div>
        </div>
      </section>

      <PageSection aria-labelledby="current-sponsors-heading">
        <SectionIntro>
          <h2 id="current-sponsors-heading">2026 sponsors</h2>
        </SectionIntro>
        {hasSponsors ? (
          <div className="border-y">
            {sponsorTiers.map((tier) => {
              const tierSponsors = sponsors.filter((sponsor) => sponsor.tier === tier);
              const details = tierDetails[tier];

              if (tierSponsors.length === 0) {
                return null;
              }

              return (
                <article
                  aria-labelledby={`${tier}-sponsors-heading`}
                  className="grid grid-cols-[minmax(8rem,0.34fr)_minmax(0,1fr)] items-center gap-[clamp(1.5rem,5vw,5rem)] border-b py-[clamp(1.6rem,4vw,2.7rem)] last:border-b-0 max-[700px]:grid-cols-1 max-[700px]:items-start max-[700px]:gap-4"
                  key={tier}
                >
                  <h3
                    id={`${tier}-sponsors-heading`}
                    className="text-[1rem] font-[650] text-primary"
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
                            aria-label={sponsor.name}
                            target="_blank"
                            rel="noreferrer"
                          >
                            {sponsor.logo ? (
                              <img
                                className={cn(sponsorLogoClass, details.logoClass)}
                                src={sponsor.logo}
                                alt={sponsor.name}
                                decoding="async"
                              />
                            ) : (
                              <span className={sponsorNameClass}>{sponsor.name}</span>
                            )}
                            <ArrowUpRight className="size-4 shrink-0 text-primary" aria-hidden="true" strokeWidth={2} />
                          </a>
                        ) : (
                          sponsor.logo ? (
                            <img
                              className={cn(sponsorLogoClass, details.logoClass)}
                              src={sponsor.logo}
                              alt={sponsor.name}
                              decoding="async"
                            />
                          ) : (
                            <span className={sponsorNameClass}>{sponsor.name}</span>
                          )
                        )}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border-y py-5 text-[0.95rem] leading-[1.55] text-muted-foreground">
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
