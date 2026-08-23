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
        className="bg-surface py-[clamp(3.75rem,6vw,5.75rem)] max-[700px]:py-12"
        aria-labelledby="about-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] items-center gap-[clamp(2rem,5vw,4.5rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,0.65fr)] max-[900px]:gap-8 max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[43rem] gap-[1.1rem]">
            <h1 id="about-heading" className="max-w-[9ch]">About Cascade Math</h1>
            <p className={sectionCopyClass}>
              Cascade Math is a student-run nonprofit in the Seattle area. We organize math events
              that are thoughtful, welcoming, and fun to talk about on the way home.
            </p>
          </div>
          <figure className="about-skyline-art relative grid min-h-[clamp(16rem,28vw,24rem)] place-content-center justify-items-center overflow-hidden rounded-[0.75rem] border border-primary/45">
            <img
              className="relative z-[1] w-[clamp(9rem,22vw,15rem)] drop-shadow-[0_1rem_2rem_rgb(4_20_35_/_30%)]"
              src="/assets/cascade-math-mark.png"
              alt="Cascade Math logo mark"
            />
            <figcaption className="absolute inset-x-4 bottom-4 z-[1] max-w-[23rem] text-[0.78rem] leading-[1.45] text-white/80">
              There is more than one good way to think about a problem.
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
              We want students to have room to think carefully, try ideas, and figure things out
              with other people.
            </p>
          </div>
        </div>
      </PageSection>
      <PageSection aria-labelledby="values-heading">
        <SectionIntro>
          <h2 id="values-heading">Our values</h2>
        </SectionIntro>
        <InfoGrid>
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
        <div className="grid grid-cols-3 gap-[clamp(1rem,2vw,1.5rem)] max-[900px]:grid-cols-2 max-[700px]:grid-cols-1">
          {teamSlots.map((slot) => (
            <article
              className="rounded-[0.55rem] border border-border bg-background px-5 pb-5 pt-[1.15rem]"
              key={slot.name}
            >
              <header className="grid gap-[0.3rem]">
                <h3 className="text-[1.2rem]">{slot.name}</h3>
              </header>
              <details className="group mt-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[0.82rem] font-[640] text-muted-foreground focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-3 [&::-webkit-details-marker]:hidden">
                  <span>About {slot.name.split(" ")[0]}</span>
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
