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
        className="home-skyline relative isolate grid min-h-[min(38rem,calc(100dvh-4.65rem))] overflow-hidden max-[700px]:min-h-0 max-[700px]:bg-[position:66%_center]"
        aria-labelledby="home-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-1 items-end gap-[clamp(2rem,5vw,4.5rem)] px-[var(--gutter)] pb-[clamp(3rem,5vw,4.5rem)] pt-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:gap-8 max-[700px]:py-12",
          )}
        >
          <div className="grid max-w-[44rem] justify-items-start gap-[1.1rem]">
            <h1 id="home-heading" className="max-w-[12ch] text-white max-[700px]:max-w-[11ch] max-[700px]:text-[clamp(3.35rem,15vw,5rem)]">
              A student-run math community.
            </h1>
            <p className="max-w-[35rem] text-[clamp(1.05rem,1.7vw,1.25rem)] leading-[1.55] text-white/85">
              We bring students, families, and volunteers together for contests, puzzles, and
              workshops in the Seattle area.
            </p>
            <div className="mt-1 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({ size: "lg", className: heroActionClass })}
                href="#mailing-list"
              >
                Join the mailing list
              </a>
              <CtaLink
                to="/cmf"
                variant="outline"
                className={cn(
                  heroActionClass,
                  "border-white/45 bg-white/90 text-night hover:border-white/75 hover:bg-white hover:text-night",
                )}
              >
                See the event
              </CtaLink>
            </div>
          </div>
        </div>
      </section>
      <PageSection className="pb-[clamp(2.5rem,5vw,4rem)]" aria-labelledby="upcoming-event-heading">
        <SectionIntro className="max-w-[38rem]">
          <h2 id="upcoming-event-heading">The next event</h2>
          <p className={sectionCopyClass}>
            A day of contests, puzzles, workshops, and prizes for students at every level.
          </p>
        </SectionIntro>
        <article className="grid grid-cols-[5.75rem_minmax(0,1.2fr)_minmax(15rem,0.8fr)] items-center gap-[clamp(1rem,3vw,2.5rem)] border-y border-border py-5 max-[900px]:grid-cols-[5.75rem_minmax(0,1fr)] max-[700px]:grid-cols-[4.7rem_minmax(0,1fr)] max-[700px]:gap-4">
          <div
            className="grid aspect-[0.88] w-[5.75rem] place-content-center justify-items-center rounded-[0.55rem] bg-night text-white leading-none max-[700px]:w-[4.7rem]"
            aria-hidden="true"
          >
            <span className="text-[0.68rem] font-[720] tracking-[0.15em]">SEP</span>
            <strong className="my-1 text-[2.35rem] font-[760] tracking-[-0.08em]">19</strong>
            <span className="text-[0.68rem] font-[720] tracking-[0.15em]">2026</span>
          </div>
          <div className="grid content-center gap-[0.45rem]">
            <h3 className="text-[clamp(1.35rem,2.2vw,1.8rem)]">{eventInfo.title}</h3>
            <p className="text-[0.88rem] font-[680] leading-[1.4] text-primary">{eventInfo.date}</p>
            <p className="text-[0.98rem] leading-[1.55] text-muted-foreground">
              A welcoming math event for students and families, with room for different interests
              and different levels of experience.
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
          <h2 id="mission-heading">Math should feel open to more people.</h2>
          <p className={sectionCopyClass}>
            We want students to have a place to think hard, ask questions, and enjoy the process.
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
