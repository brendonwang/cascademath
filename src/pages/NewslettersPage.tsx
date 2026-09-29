import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PageSection, SectionIntro, sectionCopyClass } from "@/components/PageSection";
import { newsletterIssues } from "@/content/newsletters";

export function NewslettersPage() {
  return (
    <PageSection aria-labelledby="newsletters-heading">
      <SectionIntro>
        <h1 id="newsletters-heading">Newsletters</h1>
        <p className={sectionCopyClass}>Recaps and updates from Cascade Math.</p>
      </SectionIntro>

      <ul className="max-w-[60rem] border-t">
        {newsletterIssues.map((issue) => (
          <li className="border-b" key={issue.slug}>
            <Link
              className="group block py-7 text-foreground no-underline focus-visible:outline-2 focus-visible:outline-primary sm:py-9"
              to={`/newsletters/${issue.slug}`}
            >
              <h2 className="text-[clamp(1.65rem,3vw,2.4rem)] leading-tight">{issue.title}</h2>
              <p className="mt-3 max-w-[65ch] leading-relaxed text-muted-foreground text-pretty">
                {issue.excerpt}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:underline">
                Read newsletter
                <ArrowRight className="size-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageSection>
  );
}
