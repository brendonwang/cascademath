import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { UpdateCallout } from "@/components/UpdateCallout";
import {
  InfoItem,
  PageSection,
  SectionIntro,
  heroCtaClass,
  pageContainerClass,
  sectionCopyClass,
} from "@/components/PageSection";
import { missionCards } from "@/content/site";
import { newsletterIssues } from "@/content/newsletters";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HomePage() {
  return (
    <>
      <section
        className="relative isolate overflow-hidden border-b bg-night text-white"
        aria-labelledby="home-heading"
      >
        <img
          className="absolute inset-0 -z-20 size-full object-cover object-[58%_center] max-[700px]:object-[56%_center]"
          src="/assets/seattle-skyline-real.jpg"
          alt=""
          width="1800"
          height="1349"
          fetchPriority="high"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-night/78 max-[700px]:bg-night/72"
          aria-hidden="true"
        />
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[min(42rem,calc(100dvh-4.65rem))] items-center py-[clamp(3.5rem,6vw,5.5rem)] max-[700px]:min-h-[calc(100dvh-4rem)] max-[700px]:py-8",
          )}
        >
          <div className="grid max-w-[42rem] justify-items-start gap-[1.25rem]">
            <h1
              id="home-heading"
              aria-label="Student-run math organization in Seattle"
              className="text-[clamp(3.3rem,5.2vw,4.9rem)] leading-[0.96] max-[700px]:text-[clamp(2.85rem,12.7vw,3.1rem)]"
            >
              <span className="block">Student-run math</span>
              <span className="block">
                organization in <span className="text-aqua">Seattle</span>
              </span>
            </h1>
            <p className="max-w-[32rem] text-[clamp(1.06rem,1.7vw,1.22rem)] leading-[1.62] text-white/78 text-pretty">
              We create math contests, puzzles, and workshops for younger students in the Seattle area.
            </p>
            <div className="mt-2 flex flex-wrap gap-[0.7rem] max-[700px]:w-full">
              <a
                className={buttonVariants({
                  size: "lg",
                  className: cn(
                    heroCtaClass,
                    "bg-aqua text-night hover:bg-white hover:text-night",
                  ),
                })}
                href="#mailing-list"
              >
                Join the mailing list
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b bg-background" aria-labelledby="newsletters-heading">
        <div className={cn(pageContainerClass, "max-w-[68rem] py-[var(--section-space)]")}>
          <div className="mb-7 flex flex-wrap items-end justify-between gap-3">
            <h2 id="newsletters-heading">Newsletters</h2>
            <Link className="text-sm font-semibold text-primary underline underline-offset-4" to="/newsletters">
              All newsletters
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {newsletterIssues
              .filter((issue) => ["cmf26-recap", "cmf26-registration-open"].includes(issue.slug))
              .map((issue) => {
                const isRecap = issue.slug === "cmf26-recap";
                return (
                  <div
                    className="mx-auto w-full max-w-[25rem] overflow-hidden rounded-[1.1rem] border border-foreground/10 bg-background"
                    key={issue.slug}
                  >
                    <img
                      className="aspect-[16/10] w-full object-cover object-center"
                      src={isRecap ? "/assets/cmf26/29.webp" : "/assets/cmf26/91.webp"}
                      alt={isRecap ? "Taking apart and reassembling prizes" : "Cascade MathFest registration flyer"}
                      width={isRecap ? 2000 : 1414}
                      height={isRecap ? 1333 : 2000}
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="p-6">
                      <h3 className="text-[1.7rem] leading-[1.12]">{issue.title}</h3>
                      <p className="mt-3 max-w-[55ch] leading-[1.6] text-muted-foreground text-pretty">
                        {issue.excerpt}
                      </p>
                      <Link className="mt-5 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-primary" to={`/newsletters/${issue.slug}`}>
                        {isRecap ? "Read the recap" : "Read the announcement"}
                        <ArrowRight className="size-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <PageSection aria-labelledby="mission-heading">
        <div className="grid grid-cols-[0.72fr_1.28fr] items-start gap-[clamp(2.5rem,8vw,7.5rem)] max-[800px]:grid-cols-1 max-[800px]:gap-8">
          <SectionIntro className="mb-0">
            <h2 id="mission-heading">What we do</h2>
            <p className={sectionCopyClass}>
              Our team of mathematically advanced high school students organizes events for younger students with an interest in math. Using experience from our own contest math journey we create contests and other events that are able to be both help the students grow as mathematicians and give them a place to meet and have fun with like-minded peers.
            </p>
          </SectionIntro>
          <div>
            {missionCards.map((card) => (
              <InfoItem
                icon={card.icon}
                title={card.title}
                className="first:border-t-0"
                key={card.title}
              >
                {card.description}
              </InfoItem>
            ))}
          </div>
        </div>
        <UpdateCallout />
      </PageSection>
    </>
  );
}
