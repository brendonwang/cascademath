import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CtaLink } from "@/components/SiteShell";
import { UpdateCallout } from "@/components/UpdateCallout";
import { contactEmail, eventInfo, missionCards } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";

export function HomePage() {
  return (
    <>
      <section className="home-hero" aria-labelledby="home-heading">
        <div className="hero-copy">
          <h1 id="home-heading" aria-label="Cascade Math Foundation">
            Cascade Math
          </h1>
          <p>Making space for better questions, good problems, and the people who enjoy them.</p>
          <div className="hero-actions">
            <a
              className={buttonVariants({ size: "lg", className: "cta-link" })}
              href={`mailto:${contactEmail}?subject=Cascade%20Math%20event%20updates`}
            >
              Get event updates
            </a>
            <CtaLink to="/cmf">Explore CMF</CtaLink>
          </div>
        </div>
      </section>
      <section className="page-section event-preview" aria-labelledby="upcoming-event-heading">
        <header className="section-intro">
          <h2 id="upcoming-event-heading">Upcoming Event</h2>
        </header>
        <article className="event-card">
          <div>
            <h3>{eventInfo.title}</h3>
            <p className="event-date">{eventInfo.date}</p>
          </div>
          <div className="event-summary">
            <p>
              A day of math, creativity, and community for students, families, and anyone who
              likes working through a good problem.
            </p>
            <Link to="/cmf" className={buttonVariants({ className: "learn-link" })}>
              Learn more about CMF
              <ArrowRight data-icon="inline-end" />
            </Link>
          </div>
        </article>
      </section>
      <section className="page-section" aria-labelledby="mission-heading">
        <div className="section-intro">
          <h2 id="mission-heading">Our Mission</h2>
          <p>
            We create welcoming places to think, make connections, and enjoy math together.
          </p>
        </div>
        <div className="info-grid">
          {missionCards.map((card) => {
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
        <UpdateCallout />
      </section>
    </>
  );
}
