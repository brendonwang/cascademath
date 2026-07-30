import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { UpdateCallout } from "@/components/UpdateCallout";
import { eventDetails, eventInfo, expectationCards, faqItems } from "@/content/site";

export function CmfPage() {
  return (
    <>
      <section className="cmf-hero-split" aria-labelledby="cmf-heading">
        <div className="event-hero-copy">
          <h1 id="cmf-heading">{eventInfo.title}</h1>
          <p className="event-date">{eventInfo.date}</p>
          <p>
            A day of math, creativity, and community for students, families, and anyone who
            enjoys working through a good problem.
          </p>
        </div>
      </section>
      <section className="page-section" aria-labelledby="details-heading">
        <div className="section-intro">
          <h2 id="details-heading">Event Details</h2>
        </div>
        <div className="info-grid">
          {eventDetails.map((detail) => {
            const Icon = detail.icon;
            return (
              <article className="info-item" key={detail.title}>
                <Icon className="info-icon" aria-hidden="true" />
                <h3>{detail.title}</h3>
                <p>{detail.value}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="page-section" aria-labelledby="expect-heading">
        <div className="section-intro">
          <h2 id="expect-heading">What to Expect</h2>
        </div>
        <div className="info-grid">
          {expectationCards.map((card) => {
            const Icon = card.icon;
            return (
              <article className="info-item" key={card.title}>
                <Icon className="info-icon" aria-hidden="true" />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="page-section" aria-labelledby="faq-heading">
        <div className="section-intro">
          <h2 id="faq-heading">FAQ</h2>
        </div>
        <Accordion className="faq-list">
          {faqItems.map((item, index) => (
            <AccordionItem key={item.question} value={`item-${index}`}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <UpdateCallout
          title="Get updates"
          description="We’ll share the schedule and registration details here as they take shape."
        />
      </section>
    </>
  );
}
