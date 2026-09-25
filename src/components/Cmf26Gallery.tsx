import { PageSection, SectionIntro } from "@/components/PageSection";
import type { Cmf26PhotoSection } from "@/content/cmf26-photos";

export function Cmf26Gallery({ sections }: { sections: readonly Cmf26PhotoSection[] }) {
  return (
    <PageSection id="photos" className="scroll-mt-24" aria-labelledby="photos-heading">
      <SectionIntro>
        <h2 id="photos-heading">CMF26 photos</h2>
      </SectionIntro>
      <div className="divide-y border-y">
        {sections.map((section) => (
          <details key={section.title}>
            <summary className="cursor-pointer py-4 font-semibold text-foreground marker:text-muted-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
              {section.title}
              <span className="ml-2 text-sm font-normal text-muted-foreground">
                {section.photos.length} photos
              </span>
            </summary>
            <div className="columns-1 gap-x-6 pb-4 sm:columns-2 lg:columns-3">
              {section.photos.map((photo) => (
                <figure className="mb-8 min-w-0 break-inside-avoid" key={photo.src}>
                  <img
                    className="h-auto w-full rounded-lg"
                    src={photo.src}
                    alt={photo.alt}
                    width={photo.width}
                    height={photo.height}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="mt-3 break-words text-[0.95rem] leading-relaxed text-muted-foreground">
                    {photo.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </details>
        ))}
      </div>
    </PageSection>
  );
}
