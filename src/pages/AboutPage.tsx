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
              We’re a student-run nonprofit in Seattle. We started Cascade Math because we wanted
              more places to solve problems and enjoy math with other people.
            </p>
          </div>
          <figure className="relative min-h-[clamp(16rem,28vw,24rem)] overflow-hidden rounded-[1.15rem] border border-border bg-night">
            <img
              className="absolute inset-0 size-full object-cover object-[58%_center]"
              src="/assets/seattle-skyline-real.jpg"
              alt="The Seattle skyline with the Space Needle"
            />
            <figcaption className="absolute bottom-3 left-3 rounded-[0.35rem] border border-white/25 bg-night/90 px-3 py-2 text-[0.75rem] font-[620] text-white backdrop-blur-sm">
              It started here in Seattle.
            </figcaption>
          </figure>
        </div>
      </section>
      <PageSection aria-labelledby="about-mission-heading">
        <div className="grid grid-cols-[1.6rem_minmax(0,1fr)] items-start gap-4 border-y border-border py-5">
          <MissionIcon className="size-[1.45rem] text-primary" aria-hidden="true" strokeWidth={1.8} />
          <div>
            <h2 id="about-mission-heading" className="text-[clamp(1.5rem,2.5vw,2.1rem)]">
              What we’re here to do
            </h2>
            <p className="mt-2 max-w-[58rem] text-[1.02rem] leading-[1.62] text-muted-foreground">
              Give students room to take on hard problems, make mistakes, and learn from one
              another.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection aria-labelledby="values-heading">
        <SectionIntro>
          <h2 id="values-heading">What matters to us</h2>
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
          <h2 id="team-heading">Meet the team</h2>
          <p className={sectionCopyClass}>{teamIntro}</p>
        </SectionIntro>
        <div className="grid grid-cols-2 gap-x-[clamp(1.5rem,4vw,3.5rem)] border-t border-border max-[700px]:grid-cols-1">
          {teamSlots.map((slot, index) => (
            <article
              className="border-b border-border py-5"
              key={slot.name}
            >
              <header className="flex items-baseline gap-3">
                <span className="text-[0.72rem] font-[650] tabular-nums text-primary" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[1.2rem]">{slot.name}</h3>
              </header>
              <details className="group mt-3 pl-[2.15rem]">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[0.82rem] font-[640] text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3 [&::-webkit-details-marker]:hidden">
                  <span>More about {slot.name.split(" ")[0]}</span>
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
