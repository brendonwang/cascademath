import {
  InfoGrid,
  InfoItem,
  PageSection,
  SectionIntro,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { missionCards, teamIntro, teamSlots, values } from "@/content/site";
import { cn } from "@/lib/utils";

export function AboutPage() {
  const MissionIcon = missionCards[0].icon;

  return (
    <div>
      <section
        className="border-b border-border bg-surface py-[clamp(3.75rem,6vw,5.75rem)] max-[700px]:py-10"
        aria-labelledby="about-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] items-center gap-[clamp(2rem,5vw,4.5rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,0.65fr)] max-[900px]:gap-8 max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[40rem] gap-[1.1rem]">
            <h1 id="about-heading" className="max-w-[9ch]">About Cascade Math</h1>
            <p className={sectionCopyClass}>
              Cascade Math is a student-run nonprofit based in Seattle. We organize math contests,
              puzzles, and workshops for local students.
            </p>
          </div>
          <figure className="relative min-h-[clamp(16rem,28vw,24rem)] overflow-hidden rounded-[1.15rem] border border-border bg-night">
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
      <PageSection aria-labelledby="about-mission-heading">
        <div className="grid grid-cols-[1.6rem_minmax(0,1fr)] items-start gap-4 border-y border-border py-5">
          <MissionIcon className="size-[1.45rem] text-primary" aria-hidden="true" strokeWidth={1.8} />
          <div>
            <h2 id="about-mission-heading" className="text-[clamp(1.5rem,2.5vw,2.1rem)]">
              Our mission
            </h2>
            <p className="mt-2 max-w-[58rem] text-[1.02rem] leading-[1.62] text-muted-foreground">
              We give students opportunities to solve challenging problems, make mistakes, and
              learn from one another.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection aria-labelledby="values-heading">
        <SectionIntro>
          <h2 id="values-heading">Our values</h2>
        </SectionIntro>
        <InfoGrid className="min-[901px]:grid-cols-2">
          {values.map((value) => (
            <InfoItem icon={value.icon} title={value.title} key={value.title}>
              {value.description}
            </InfoItem>
          ))}
        </InfoGrid>
      </PageSection>
      <PageSection aria-labelledby="team-heading">
        <SectionIntro>
          <h2 id="team-heading">Our team</h2>
          <p className={sectionCopyClass}>{teamIntro}</p>
        </SectionIntro>
        <div className="grid grid-cols-2 gap-x-[clamp(1.5rem,4vw,3.5rem)] border-t border-border max-[700px]:grid-cols-1">
          {teamSlots.map((slot) => (
            <article
              className="grid grid-cols-[4.5rem_minmax(0,1fr)] items-start gap-x-4 border-b border-border py-5 max-[420px]:grid-cols-[4rem_minmax(0,1fr)]"
              key={slot.name}
            >
              <div
                className="row-span-2 grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[0.45rem] border border-border bg-surface text-[0.78rem] font-[680] text-primary"
                data-team-portrait
              >
                {slot.imageSrc ? (
                  <img
                    className="size-full object-cover"
                    src={slot.imageSrc}
                    alt={slot.imageAlt ?? `Portrait of ${slot.name}`}
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <span aria-hidden="true">{slot.initials}</span>
                )}
              </div>
              <header className="pt-0.5">
                <h3 className="text-[1.2rem]">{slot.name}</h3>
              </header>
              <details className="group mt-3">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[0.82rem] font-[640] text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3 [&::-webkit-details-marker]:hidden">
                  <span>Read bio</span>
                  <span className="text-base transition-transform duration-150 group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-[0.88rem] leading-[1.58] text-muted-foreground">{slot.bio}</p>
              </details>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
