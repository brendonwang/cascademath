import {
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
        className="relative isolate overflow-hidden border-b bg-night text-white"
        aria-labelledby="about-heading"
      >
        <div
          className="absolute inset-0 -z-20 bg-[url('/assets/cmf26/89.webp')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 -z-10 bg-night/78 max-[700px]:bg-night/72" aria-hidden="true" />
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[min(34rem,calc(100dvh-4.65rem))] items-center py-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:min-h-[calc(72dvh-4rem)] max-[700px]:py-8",
          )}
        >
          <div className="grid max-w-[42rem] justify-items-start gap-[1.25rem]">
            <h1 id="about-heading" className="text-[clamp(3.3rem,5.2vw,4.9rem)] leading-[0.96] max-[700px]:text-[clamp(2.85rem,12.7vw,3.1rem)]">
              <span className="block">About</span>
              <span className="block text-aqua">Cascade Math</span>
            </h1>
            <p className="max-w-[32rem] text-[clamp(1.06rem,1.7vw,1.22rem)] leading-[1.62] text-white/78 text-pretty">
              Cascade Math is a student-run 501(c)(3) nonprofit organization based in Seattle. We organize math contests,
              puzzles, and workshops for local students.
            </p>
          </div>
        </div>
      </section>
      <PageSection aria-labelledby="about-mission-heading">
        <div className="grid grid-cols-[0.72fr_1.28fr] items-start gap-[clamp(2.5rem,8vw,7.5rem)] max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <SectionIntro className="mb-0">
            <h2 id="about-mission-heading">Our mission</h2>
          </SectionIntro>
          <p className={sectionCopyClass}>
            We give students opportunities to solve challenging problems, work on interesting puzzles, and learn from one another all while having lots of fun.
          </p>
        </div>
      </PageSection>
      <PageSection aria-labelledby="values-heading">
        <div className="grid grid-cols-[0.72fr_1.28fr] items-start gap-[clamp(2.5rem,8vw,7.5rem)] max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <SectionIntro className="mb-0">
            <h2 id="values-heading">Our values</h2>
          </SectionIntro>
          <div>
            {values.map((value) => (
              <InfoItem
                icon={value.icon}
                title={value.title}
                className="first:border-t-0"
                key={value.title}
              >
                {value.description}
              </InfoItem>
            ))}
          </div>
        </div>
      </PageSection>
      <PageSection aria-labelledby="team-heading">
        <SectionIntro>
          <h2 id="team-heading">Our team</h2>
          <p className={sectionCopyClass}>{teamIntro}</p>
        </SectionIntro>
        <div className="grid grid-cols-2 gap-x-[clamp(2rem,5vw,4.5rem)] border-t max-[700px]:grid-cols-1">
          {teamSlots.map((slot) => (
            <article
              className="grid content-start gap-4 border-b py-[clamp(1.6rem,3vw,2.25rem)]"
              key={slot.name}
            >
              <div
                className="grid aspect-square w-24 place-items-center overflow-hidden rounded-full bg-surface-strong/70 text-[0.82rem] font-[680] text-primary max-[420px]:w-20"
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
              <div>
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
