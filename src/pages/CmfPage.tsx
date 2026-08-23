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
  "min-h-[2.85rem] min-w-[10.5rem] rounded-[0.35rem] px-[1.05rem] font-[680] shadow-none max-[700px]:w-full max-[700px]:justify-center";

export function CmfPage() {
  return (
    <>
      <section className="cmf-surface py-[clamp(3.75rem,6vw,5.75rem)] max-[700px]:py-12" aria-labelledby="cmf-heading">
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1fr)_minmax(18rem,0.72fr)] items-center gap-[clamp(2rem,5vw,4.5rem)] max-[900px]:grid-cols-[minmax(0,1fr)_minmax(15rem,0.65fr)] max-[900px]:gap-8 max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[48rem] gap-[1.1rem]">
            <h1 id="cmf-heading" className="max-w-[8ch]">{eventInfo.title}</h1>
            <p className="mt-[-0.2rem] text-[1rem] font-[680] leading-[1.4] text-primary">
              {eventInfo.date}
            </p>
            <p className={sectionCopyClass}>
              A day of contests, puzzles, workshops, and good company for students, families, and
              anyone who likes a challenge.
            </p>
            <div className="mt-1 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({ size: "lg", className: heroActionClass })}
                href="#mailing-list"
              >
                Get registration details
              </a>
              <CtaLink
                to="/about"
                variant="outline"
                className={cn(
                  heroActionClass,
                  "border-white/45 bg-white/90 text-night hover:border-white/75 hover:bg-white hover:text-night",
                )}
              >
                Meet the team
              </CtaLink>
            </div>
          </div>
          <aside
            className="grid gap-3.5 border-l border-border pl-[clamp(1.25rem,4vw,2.5rem)] max-[700px]:grid-cols-3 max-[700px]:border-l-0 max-[700px]:border-t max-[700px]:pl-0 max-[700px]:pt-4 max-[460px]:grid-cols-1"
            aria-label="Cascade Math Fest highlights"
          >
            <div className="grid gap-[0.35rem]">
              <span className="text-[0.8rem] font-[720] text-primary">Registration</span>
              <strong className="max-w-[20ch] text-[1.05rem] font-[680] leading-[1.3]">
                {eventInfo.registration}
              </strong>
            </div>
            <div className="grid gap-[0.35rem]">
              <span className="text-[0.8rem] font-[720] text-primary">Prizes</span>
              <strong className="max-w-[20ch] text-[1.05rem] font-[680] leading-[1.3]">
                {eventInfo.prizes}
              </strong>
            </div>
            <div className="grid gap-[0.35rem]">
              <span className="text-[0.8rem] font-[720] text-primary">Who it’s for</span>
              <strong className="max-w-[20ch] text-[1.05rem] font-[680] leading-[1.3]">
                {eventInfo.skillLevels}
              </strong>
            </div>
          </aside>
        </div>
      </section>
      <PageSection aria-labelledby="details-heading">
        <SectionIntro>
          <h2 id="details-heading">Plan your day</h2>
          <p className={sectionCopyClass}>
            The venue and schedule are still being finalized. The date and $10 registration fee are
            set.
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
          <h2 id="expect-heading">Something for every problem solver</h2>
          <p className={sectionCopyClass}>
            You do not have to be the strongest competitor in the room to have a good day. Students
            at every level can win prizes and trophies.
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
        <UpdateCallout
          title="Get event updates"
          description="Leave your email and we’ll send the registration link and event details when they’re ready."
        />
      </PageSection>
    </>
  );
}
