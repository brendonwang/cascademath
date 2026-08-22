import { ArrowUpRight } from "lucide-react";
import { contactEmail, sponsors } from "@/content/site";

export function SponsorsPage() {
  return (
    <>
      <section className="sponsors-hero sponsors-hero-plain page-section" aria-labelledby="sponsors-heading">
        <div className="sponsors-hero-copy">
          <h1 id="sponsors-heading">Sponsors</h1>
          <p>
            We are grateful to the people and organizations that help make Cascade Math events possible.
          </p>
        </div>
      </section>

      <section className="page-section sponsors-directory" aria-labelledby="current-sponsors-heading">
        <div className="section-intro">
          <h2 id="current-sponsors-heading">Sponsors</h2>
        </div>
        <div className="sponsors-directory-content">
          {sponsors.length === 0 ? (
            <div className="sponsor-empty">
              <p>Sponsors will be announced here as partnerships are confirmed.</p>
            </div>
          ) : (
            <ul className="sponsor-list">
              {sponsors.map((sponsor) => (
                <li key={sponsor.name}>
                  {sponsor.website ? (
                    <a href={sponsor.website}>{sponsor.name}</a>
                  ) : (
                    sponsor.name
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
        <p className="sponsor-note">
          Interested in supporting Cascade Math?{" "}
          <a href={`mailto:${contactEmail}?subject=Cascade%20Math%20sponsorship%20interest`}>
            Get in touch <ArrowUpRight aria-hidden="true" />
          </a>
        </p>
      </section>
    </>
  );
}
