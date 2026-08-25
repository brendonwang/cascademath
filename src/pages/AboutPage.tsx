import {
  InfoGrid,
  InfoItem,
  PageSection,
  SectionIntro,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { teamIntro, teamSlots, values } from "@/content/site";
import { cn } from "@/lib/utils";

export function AboutPage() {
  return (
    <div>
      <section
        className="border-b bg-background py-[clamp(4rem,7vw,6.5rem)] max-[700px]:py-10"
        aria-labelledby="about-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,0.9fr)_minmax(20rem,1.1fr)] items-center gap-[clamp(2.5rem,7vw,6rem)] max-[900px]:grid-cols-[minmax(0,0.9fr)_minmax(17rem,1.1fr)] max-[900px]:gap-8 max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[36rem] gap-[1.15rem]">
            <h1 id="about-heading" className="max-w-[10ch]">About Cascade Math</h1>
            <p className={sectionCopyClass}>
              Cascade Math is a student-run nonprofit based in Seattle. We organize math contests,
              puzzles, and workshops for local students.
            </p>
          </div>
          <figure>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.1rem] border bg-surface-strong">
              <img
                className="absolute inset-0 size-full object-cover"
                src="/assets/student-math-collaboration.webp"
                alt="Students working together on a geometry problem"
                width="1448"
                height="1086"
                fetchPriority="high"
              />
            </div>
          </figure>
        </div>
      </section>
      <section className="border-b bg-surface" aria-labelledby="about-mission-heading">
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,0.55fr)_minmax(0,1.45fr)] gap-[clamp(2.5rem,7vw,6rem)] py-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:grid-cols-1 max-[700px]:gap-7",
          )}
        >
          <h2 id="about-mission-heading" className="max-w-[8ch]">
            Our mission
          </h2>
          <div className="border-l pl-[clamp(2rem,5vw,4.5rem)] max-[700px]:border-l-0 max-[700px]:border-t max-[700px]:pt-7 max-[700px]:pl-0">
            <p className="max-w-[31ch] text-[clamp(1.65rem,3vw,2.65rem)] font-[560] leading-[1.16] text-foreground text-pretty">
              We give students opportunities to solve challenging problems, make mistakes, and
              learn from one another.
            </p>
          </div>
        </div>
      </section>
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
        <div className="grid grid-cols-2 gap-x-[clamp(2rem,5vw,4.5rem)] border-t max-[700px]:grid-cols-1">
          {teamSlots.map((slot) => (
            <article
              className="grid grid-cols-[5rem_minmax(0,1fr)] items-start gap-x-5 border-b py-[clamp(1.6rem,3vw,2.25rem)] max-[420px]:grid-cols-[4.25rem_minmax(0,1fr)] max-[420px]:gap-x-4"
              key={slot.name}
            >
              <div
                className="grid aspect-[4/5] w-full place-items-center overflow-hidden rounded-[0.8rem] border bg-surface text-[0.82rem] font-[680] text-primary"
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
              <div className="pt-0.5">
                <h3 className="text-[1.3rem]">{slot.name}</h3>
                <p className="mt-1 text-[0.82rem] font-[620] text-primary">{slot.title}</p>
                <p className="mt-3 max-w-[52ch] text-[0.94rem] leading-[1.64] text-muted-foreground text-pretty">
                  {slot.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
