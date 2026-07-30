import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { missionCards, teamIntro, teamSlots, values } from "@/content/site";

export function AboutPage() {
  const MissionIcon = missionCards[0].icon;

  return (
    <div className="about-page">
      <section className="about-hero page-section" aria-labelledby="about-heading">
        <div className="about-copy">
          <h1 id="about-heading">About Cascade Math</h1>
          <p>
            Cascade Math Foundation is a student-run nonprofit creating welcoming ways for
            people in the Seattle area to spend time with math, together.
          </p>
        </div>
      </section>
      <section className="page-section" aria-labelledby="about-mission-heading">
        <div className="mission-panel">
          <MissionIcon className="info-icon" aria-hidden="true" />
          <div>
            <h2 id="about-mission-heading">Our Mission</h2>
            <p>
              We make room for curiosity, careful thinking, and the confidence that comes from
              figuring something out with other people.
            </p>
          </div>
        </div>
      </section>
      <section className="page-section" aria-labelledby="values-heading">
        <div className="section-intro">
          <h2 id="values-heading">Our Values</h2>
        </div>
        <div className="info-grid">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <article className="info-item" key={value.title}>
                <Icon className="info-icon" aria-hidden="true" />
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="page-section" aria-labelledby="team-heading">
        <div className="section-intro">
          <h2 id="team-heading">Our Team</h2>
          <p>{teamIntro}</p>
        </div>
        <div className="team-grid">
          {teamSlots.map((slot, index) => (
            <article className="team-card" key={`${slot.name}-${index}`}>
              <header className="team-card-header">
                <Avatar className="team-avatar" size="lg">
                  <AvatarFallback>{slot.initials}</AvatarFallback>
                </Avatar>
                <h3>{slot.name}</h3>
              </header>
              <details className="team-bio">
                <summary>
                  <span>Read bio</span>
                  <span className="team-bio-icon" aria-hidden="true">+</span>
                </summary>
                <p>{slot.bio}</p>
              </details>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
