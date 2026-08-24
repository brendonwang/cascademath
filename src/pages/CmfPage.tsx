import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
import { eventDetails, eventInfo, expectationCards, faqItems } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const heroActionClass =
  "min-h-12 min-w-[10.5rem] rounded-[0.65rem] px-[1.15rem] font-[650] shadow-none max-[700px]:min-h-13 max-[700px]:w-full max-[700px]:justify-center";

export function CmfPage() {
  return (
    <>
      <section
        className="border-b border-border bg-background py-[clamp(4rem,7vw,6.5rem)] max-[700px]:py-10"
        aria-labelledby="cmf-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)] items-center gap-[clamp(2.5rem,7vw,6rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(18rem,0.9fr)] max-[900px]:gap-8 max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[42rem] gap-[1.2rem]">
            <h1 id="cmf-heading" aria-label={eventInfo.title} className="max-w-none">
              <span className="block">2026 Cascade</span>
              <span className="block text-primary">Math Fest</span>
            </h1>
            <p className={sectionCopyClass}>
              A day of math contests, puzzles, and workshops for students at every skill level.
            </p>
            <div className="mt-1 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({ size: "lg", className: heroActionClass })}
                href="#mailing-list"
              >
                Get updates
              </a>
              <CtaLink
                to="/about"
                variant="outline"
                className={cn(
                  heroActionClass,
                  "border-border bg-background text-foreground hover:border-primary/45 hover:bg-background hover:text-primary",
                )}
              >
                About Cascade Math
              </CtaLink>
            </div>
          </div>
          <aside
            className="rounded-[1.1rem] border border-border bg-background p-[clamp(1.35rem,3vw,2.25rem)] max-[700px]:rounded-[0.9rem] max-[700px]:p-4"
            aria-label="Cascade Math Fest date and highlights"
          >
            <p className="pb-5 text-[1.05rem] font-[630] leading-[1.4] text-foreground">
              {eventInfo.date}
            </p>
            <dl className="grid gap-0 border-t border-border">
              {[
                ["Registration", eventInfo.registration],
                ["Prizes", eventInfo.prizes],
                ["Eligibility", eventInfo.skillLevels],
              ].map(([label, value]) => (
                <div
                  className="grid grid-cols-[minmax(6.5rem,0.7fr)_minmax(0,1fr)] gap-4 border-b border-border py-3.5 last:border-b-0"
                  key={label}
                >
                  <dt className="text-[0.82rem] font-[620] text-muted-foreground">{label}</dt>
                  <dd className="m-0 text-[0.94rem] font-[620] leading-[1.4] text-foreground">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>
      <PageSection aria-labelledby="details-heading">
        <SectionIntro>
          <h2 id="details-heading">Event details</h2>
          <p className={sectionCopyClass}>
            The date and $10 registration fee are confirmed. The venue and schedule are still
            being finalized.
          </p>
        </SectionIntro>
        <InfoGrid>
          {eventDetails.map((detail) => (
            <InfoItem icon={detail.icon} title={detail.title} key={detail.title}>
              {detail.value}
            </InfoItem>
          ))}
        </InfoGrid>
      </PageSection>
      <PageSection aria-labelledby="expect-heading">
        <SectionIntro>
          <h2 id="expect-heading">What to expect</h2>
          <p className={sectionCopyClass}>
            The event includes individual competition, team problem solving, puzzles, and
            workshops.
          </p>
        </SectionIntro>
        <InfoGrid>
          {expectationCards.map((card) => (
            <InfoItem icon={card.icon} title={card.title} key={card.title}>
              {card.description}
            </InfoItem>
          ))}
        </InfoGrid>
      </PageSection>
      <PageSection aria-labelledby="faq-heading">
        <SectionIntro>
          <h2 id="faq-heading">FAQ</h2>
        </SectionIntro>
        <Accordion className="border-t border-border">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger className="min-h-0 py-[1.15rem] text-base">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[50rem] leading-[1.6] text-muted-foreground">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <UpdateCallout />
      </PageSection>
    </>
  );
}
