import { Cmf26Gallery } from "@/components/Cmf26Gallery";
import {
  PageSection,
  SectionIntro,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { cmf26PhotoSections } from "@/content/cmf26-photos";
import {
  cmf26FestivalPoints,
  cmf26IndividualGrades,
  cmf26TeamStandings,
} from "@/content/cmf26-standings";
import { eventInfo } from "@/content/site";
import { cn } from "@/lib/utils";

export function CmfPage() {
  return (
    <>
      <section
        className="border-b bg-background py-[clamp(4rem,7vw,6.5rem)] max-[700px]:py-10"
        aria-labelledby="cmf-heading"
      >
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1.2fr)_minmax(15rem,0.8fr)] items-end gap-[clamp(2.5rem,7vw,6rem)] max-[700px]:grid-cols-1",
          )}
        >
          <div className="grid max-w-[44rem] gap-5">
            <h1 id="cmf-heading" aria-label={eventInfo.title}>
              <span className="block">2026 Cascade</span>
              <span className="block text-primary">Math Fest</span>
            </h1>
            <p className={sectionCopyClass}>
              Browse the individual and team rounds, see how contestants placed, and look through photos from the 2026 Cascade Math Fest.
            </p>
            <p className="max-w-[60ch] text-sm leading-relaxed text-muted-foreground">
              {eventInfo.date} · {eventInfo.venue}
            </p>
            <nav
              aria-label="Math Fest page sections"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold"
            >
              <a className="underline-offset-4 hover:underline" href="#materials">
                Problems and solutions
              </a>
              <a className="underline-offset-4 hover:underline" href="#photos">
                Photos
              </a>
              <a className="underline-offset-4 hover:underline" href="#standings">
                Final standings
              </a>
            </nav>
          </div>
          <dl
            className="grid grid-cols-2 gap-6 border-y py-5 max-[700px]:max-w-sm"
            aria-label="Festival attendance"
          >
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">People</dt>
              <dd className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-[650] leading-none tabular-nums text-foreground">
                {eventInfo.people}
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-sm text-muted-foreground">Teams</dt>
              <dd className="m-0 text-[clamp(2.5rem,5vw,4rem)] font-[650] leading-none tabular-nums text-foreground">
                {eventInfo.teams}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <PageSection id="materials" className="scroll-mt-24" aria-labelledby="materials-heading">
        <SectionIntro>
          <h2 id="materials-heading">Problems and solutions</h2>
        </SectionIntro>
        <div className="overflow-x-auto border-y">
          <table className="w-full min-w-[34rem] border-collapse text-left">
            <caption className="sr-only">Cascade Math Fest problem and solution PDFs</caption>
            <thead>
              <tr className="border-b border-border">
                <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                  Round
                </th>
                <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                  Problems
                </th>
                <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                  Solutions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border/70">
                <th className="px-3 py-4 font-semibold sm:px-4" scope="row">
                  Individual round
                </th>
                <td className="px-3 py-4 sm:px-4">
                  <a
                    className="font-semibold underline underline-offset-4"
                    href="https://drive.google.com/file/d/1L5j3ohcePh1D1ErSXPqcWAhg2t5dwhPq/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PDF
                  </a>
                </td>
                <td className="px-3 py-4 sm:px-4">
                  <a
                    className="font-semibold underline underline-offset-4"
                    href="https://drive.google.com/file/d/1HQEa6Bzf9nG2oHdw7N2s65x6n0cA37U-/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
              <tr>
                <th className="px-3 py-4 font-semibold sm:px-4" scope="row">
                  Team round
                </th>
                <td className="px-3 py-4 sm:px-4">
                  <a
                    className="font-semibold underline underline-offset-4"
                    href="https://drive.google.com/file/d/1MDv50NqRZ7GdHZn0tsl5hAelJWZd9oM6/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PDF
                  </a>
                </td>
                <td className="px-3 py-4 sm:px-4">
                  <a
                    className="font-semibold underline underline-offset-4"
                    href="https://drive.google.com/file/d/1uQ21P8iGcZxS3kWvFwSSmuCX61zn0SrF/view?usp=drivesdk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    PDF
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PageSection>

      <Cmf26Gallery sections={cmf26PhotoSections} />

      <PageSection id="standings" className="scroll-mt-24" aria-labelledby="standings-heading">
        <SectionIntro>
          <h2 id="standings-heading">Final standings</h2>
          <p className={sectionCopyClass}>
            Team placements, festival points, and individual awards.
          </p>
        </SectionIntro>

        <section aria-labelledby="team-standings-heading">
          <h3 id="team-standings-heading" className="mb-3 text-xl font-semibold">
            Team round
          </h3>
          <div className="overflow-x-auto border-y">
            <table className="w-full min-w-[26rem] border-collapse text-left">
              <caption className="sr-only">Top eight teams</caption>
              <thead>
                <tr className="border-b border-border">
                  <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                    Place
                  </th>
                  <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {cmf26TeamStandings.map((team) => (
                  <tr className="border-b border-border/70 last:border-b-0" key={team.name}>
                    <td className="px-3 py-3 sm:px-4">{team.place}</td>
                    <th className="px-3 py-3 font-medium sm:px-4" scope="row">
                      {team.name}
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="festival-points-heading">
          <h3 id="festival-points-heading" className="mb-3 text-xl font-semibold">
            Festival points
          </h3>
          <div className="overflow-x-auto border-y">
            <table className="w-full min-w-[28rem] border-collapse text-left">
              <caption className="sr-only">Festival points leaderboard</caption>
              <thead>
                <tr className="border-b border-border">
                  <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                    Place
                  </th>
                  <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                    Student
                  </th>
                  <th className="px-3 py-3 text-sm font-semibold sm:px-4" scope="col">
                    Points
                  </th>
                </tr>
              </thead>
              <tbody>
                {cmf26FestivalPoints.flatMap((result) =>
                  result.names.map((name) => (
                    <tr
                      className="border-b border-border/70 last:border-b-0"
                      key={`${result.place}-${name}`}
                    >
                      <td className="px-3 py-3 tabular-nums sm:px-4">{result.place}</td>
                      <th className="px-3 py-3 font-medium sm:px-4" scope="row">
                        {name}
                      </th>
                      <td className="px-3 py-3 tabular-nums sm:px-4">{result.points}</td>
                    </tr>
                  )),
                )}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-10" aria-labelledby="individual-winners-heading">
          <h3 id="individual-winners-heading" className="mb-5 text-xl font-semibold">
            Individual winners <span className="font-normal text-muted-foreground">(top 10%)</span>
          </h3>
          <div className="grid grid-cols-3 gap-x-10 gap-y-8 max-[800px]:grid-cols-1">
            {cmf26IndividualGrades.map((division) => (
              <section
                key={division.grade}
                aria-labelledby={`winners-${division.grade.replaceAll(" ", "-")}`}
              >
                <h4
                  id={`winners-${division.grade.replaceAll(" ", "-")}`}
                  className="mb-3 font-semibold"
                >
                  {division.grade}
                </h4>
                <div className="overflow-x-auto border-y">
                  <table className="w-full border-collapse text-left">
                    <caption className="sr-only">Individual winners, {division.grade}</caption>
                    <thead>
                      <tr className="border-b border-border">
                        <th className="px-2 py-2.5 text-sm font-semibold" scope="col">
                          Place
                        </th>
                        <th className="px-2 py-2.5 text-sm font-semibold" scope="col">
                          Student
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {division.winners.map((winner) => (
                        <tr
                          className="border-b border-border/70 last:border-b-0"
                          key={winner.name}
                        >
                          <td className="px-2 py-2.5 tabular-nums">{winner.place}</td>
                          <th className="px-2 py-2.5 font-medium" scope="row">
                            {winner.name}
                          </th>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="mt-10" aria-labelledby="individual-honors-heading">
          <h3 id="individual-honors-heading" className="mb-5 text-xl font-semibold">
            Individual top honors <span className="font-normal text-muted-foreground">(top 30%)</span>
          </h3>
          <div className="grid grid-cols-3 gap-x-10 gap-y-8 max-[800px]:grid-cols-1">
            {cmf26IndividualGrades.map((division) => (
              <section
                key={division.grade}
                aria-labelledby={`honors-${division.grade.replaceAll(" ", "-")}`}
              >
                <h4
                  id={`honors-${division.grade.replaceAll(" ", "-")}`}
                  className="mb-3 font-semibold"
                >
                  {division.grade}
                </h4>
                <ul className="columns-1 gap-x-8 border-t pt-3 text-sm leading-relaxed sm:columns-2">
                  {division.honors.map((name) => (
                    <li className="mb-1 break-inside-avoid" key={name}>
                      {name}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>

      </PageSection>
    </>
  );
}
