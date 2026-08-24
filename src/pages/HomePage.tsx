import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/SiteShell";
import { UpdateCallout } from "@/components/UpdateCallout";
import {
  InfoItem,
  PageSection,
  SectionIntro,
  ctaClass,
  heroCtaClass,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { eventInfo, missionCards } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b bg-night text-white"
        aria-labelledby="home-heading"
      >
        <img
          className="absolute inset-0 -z-20 size-full object-cover object-[58%_center] max-[700px]:object-[56%_center]"
          src="/assets/seattle-skyline-real.jpg"
          alt=""
          width="1800"
          height="1349"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-night/78 max-[700px]:bg-night/72"
          aria-hidden="true"
        />
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[min(42rem,calc(100dvh-4.65rem))] items-center py-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:min-h-[calc(100dvh-4rem)] max-[700px]:py-8",
          )}
        >
          <div className="grid max-w-[42rem] justify-items-start gap-[1.25rem]">
            <h1
              id="home-heading"
              aria-label="Student-run math events in Seattle."
              className="text-[clamp(3.3rem,5.2vw,4.9rem)] leading-[0.96] max-[700px]:text-[clamp(2.85rem,12.7vw,3.1rem)]"
            >
              <span className="block">Student-run math</span>
              <span className="block">
                events in <span className="text-aqua">Seattle.</span>
              </span>
            </h1>
            <p className="max-w-[32rem] text-[clamp(1.06rem,1.7vw,1.22rem)] leading-[1.62] text-white/78 text-pretty">
              We organize contests, puzzles, and workshops for students across the Seattle area.
            </p>
            <div className="mt-2 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({
                  size: "lg",
                  className: cn(
                    heroCtaClass,
                    "bg-aqua text-night hover:bg-white hover:text-night",
                  ),
                })}
                href="#mailing-list"
              >
                Get updates
              </a>
              <CtaLink
                to="/cmf"
                variant="outline"
                className={cn(
                  heroCtaClass,
                  "border-white/45 bg-white/6 text-white hover:border-white/70 hover:bg-white/14 hover:text-white",
                )}
              >
                Event details
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b bg-background" aria-labelledby="upcoming-event-heading">
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[0.52fr_1.48fr] items-start gap-[clamp(2.5rem,7vw,6.5rem)] py-[var(--section-space)] max-[900px]:grid-cols-1 max-[900px]:gap-8",
          )}
        >
          <SectionIntro className="mb-0 max-w-[23rem]">
            <h2 id="upcoming-event-heading">Upcoming event</h2>
            <p className={sectionCopyClass}>A full day of problem solving for students at every skill level.</p>
          </SectionIntro>
          <article className="grid grid-cols-[minmax(0,1fr)_auto] h-full items-center gap-[clamp(1.25rem,3vw,2.5rem)] rounded-[1.1rem] border bg-background p-[clamp(1.25rem,2.7vw,2rem)] max-[700px]:grid-cols-1 max-[700px]:gap-4 max-[700px]:rounded-[0.9rem] max-[700px]:p-4">
            <div className="grid content-center gap-[0.45rem]">
              <h3 className="text-[clamp(1.4rem,2.2vw,1.9rem)]">{eventInfo.title}</h3>
              <p className="text-[0.9rem] font-[620] leading-[1.4] text-muted-foreground">{eventInfo.date}</p>
              <p className="max-w-[34rem] text-[0.98rem] leading-[1.58] text-muted-foreground text-pretty">
                Contests, puzzles, workshops, and prizes in one welcoming event.
              </p>
            </div>
            <div className="grid justify-items-end max-[700px]:justify-items-stretch max-[700px]:pt-1">
              <Link
                to="/cmf"
                className={buttonVariants({
                  className: cn(ctaClass, "w-fit max-[700px]:w-full"),
                })}
              >
                Event details
                <ArrowRight data-icon="inline-end" />
              </Link>
            </div>
          </article>
        </div>
      </section>
      <PageSection aria-labelledby="mission-heading">
        <div className="grid grid-cols-[0.72fr_1.28fr] items-start gap-[clamp(2.5rem,8vw,7.5rem)] max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <SectionIntro className="mb-0">
            <h2 id="mission-heading">What we do</h2>
            <p className={sectionCopyClass}>
              We give students room to solve challenging problems, try new ideas, and learn from
              one another.
            </p>
          </SectionIntro>
          <div>
            {missionCards.map((card) => (
              <InfoItem
                icon={card.icon}
                title={card.title}
                className="first:border-t-0"
                key={card.title}
              >
                {card.description}
              </InfoItem>
            ))}
          </div>
        </div>
        <UpdateCallout />
      </PageSection>
    </>
  );
}
