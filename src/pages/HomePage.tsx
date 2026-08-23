import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/SiteShell";
import { UpdateCallout } from "@/components/UpdateCallout";
import {
  InfoGrid,
  InfoItem,
  PageSection,
  SectionIntro,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { eventInfo, missionCards } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroActionClass =
  "min-h-[2.85rem] min-w-[10.5rem] rounded-[0.35rem] px-[1.05rem] font-[680] shadow-none max-[700px]:w-full max-[700px]:justify-center";

export function HomePage() {
  return (
    <>
      <section
        className="border-b border-border"
        aria-labelledby="home-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[min(40rem,calc(100dvh-4.4rem))] grid-cols-[minmax(0,1.02fr)_minmax(20rem,0.98fr)] items-center gap-[clamp(2.5rem,6vw,5.5rem)] py-[clamp(3.5rem,6vw,5.5rem)] max-[800px]:min-h-0 max-[800px]:grid-cols-1 max-[800px]:gap-9 max-[700px]:py-10",
          )}
        >
          <div className="grid max-w-[38rem] justify-items-start gap-[1.2rem]">
            <h1 id="home-heading" className="max-w-[10ch]">
              Good problems. <span className="font-[520] italic text-primary">Good company.</span>
            </h1>
            <p className="max-w-[34rem] text-[clamp(1.05rem,1.7vw,1.22rem)] leading-[1.62] text-muted-foreground text-pretty">
              Student-led contests, puzzles, and workshops for Seattle’s math community.
            </p>
            <div className="mt-2 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({ size: "lg", className: heroActionClass })}
                href="#mailing-list"
              >
                Get updates
              </a>
              <CtaLink
                to="/cmf"
                variant="outline"
                className={cn(
                  heroActionClass,
                  "border-border bg-transparent text-foreground hover:border-primary/45 hover:bg-surface hover:text-primary",
                )}
              >
                See Math Fest
              </CtaLink>
            </div>
          </div>
          <figure className="relative min-h-[clamp(21rem,37vw,31rem)] overflow-hidden rounded-[1.15rem] border border-border bg-surface max-[800px]:min-h-[22rem] max-[700px]:min-h-[18rem]">
            <img
              className="absolute inset-0 size-full object-cover object-[58%_center]"
              src="/assets/seattle-skyline-real.jpg"
              alt="The Seattle skyline with the Space Needle"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-[0.35rem] border border-white/25 bg-night/90 px-3 py-2 text-[0.75rem] font-[620] text-white backdrop-blur-sm">
              Seattle, Washington
            </figcaption>
          </figure>
        </div>
      </section>
      <PageSection className="pb-[clamp(2.5rem,5vw,4rem)]" aria-labelledby="upcoming-event-heading">
        <SectionIntro className="max-w-[38rem]">
          <h2 id="upcoming-event-heading">Up next</h2>
        </SectionIntro>
        <article className="grid grid-cols-[5.75rem_minmax(0,1.2fr)_minmax(15rem,0.8fr)] items-center gap-[clamp(1rem,3vw,2.5rem)] border-y border-border py-5 max-[900px]:grid-cols-[5.75rem_minmax(0,1fr)] max-[700px]:grid-cols-[4.7rem_minmax(0,1fr)] max-[700px]:gap-4">
          <div
            className="grid aspect-[0.88] w-[5.75rem] place-content-center justify-items-center rounded-[0.55rem] border border-border bg-surface text-foreground leading-none max-[700px]:w-[4.7rem]"
            aria-hidden="true"
          >
            <span className="text-[0.68rem] font-[720] tracking-[0.15em]">SEP</span>
            <strong className="my-1 text-[2.35rem] font-[760] tracking-[-0.08em]">19</strong>
            <span className="text-[0.68rem] font-[720] tracking-[0.15em]">2026</span>
          </div>
          <div className="grid content-center gap-[0.45rem]">
            <h3 className="text-[clamp(1.35rem,2.2vw,1.8rem)]">{eventInfo.title}</h3>
            <p className="text-[0.88rem] font-[680] leading-[1.4] text-primary">{eventInfo.date}</p>
            <p className="max-w-[46rem] text-[0.98rem] leading-[1.58] text-muted-foreground text-pretty">
              Contests, puzzles, workshops, and prizes—with room for every kind of problem solver.
            </p>
          </div>
          <div className="grid items-center justify-items-end max-[900px]:col-start-2 max-[700px]:col-span-full max-[700px]:col-start-1 max-[700px]:justify-items-stretch max-[700px]:pt-[0.45rem]">
            <Link
              to="/cmf"
              className={buttonVariants({
                className:
                  "min-h-[2.85rem] min-w-[10.5rem] w-fit rounded-[0.35rem] px-[1.05rem] font-[680] shadow-none max-[700px]:w-full",
              })}
            >
              Event details
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </article>
      </PageSection>
      <PageSection aria-labelledby="mission-heading">
        <SectionIntro>
          <h2 id="mission-heading">Make room for curiosity.</h2>
          <p className={sectionCopyClass}>
            A place to try ideas, ask better questions, and enjoy math with other people.
          </p>
        </SectionIntro>
        <InfoGrid>
          {missionCards.map((card) => (
            <InfoItem icon={card.icon} title={card.title} key={card.title}>
              {card.description}
            </InfoItem>
          ))}
        </InfoGrid>
        <UpdateCallout />
      </PageSection>
    </>
  );
}
