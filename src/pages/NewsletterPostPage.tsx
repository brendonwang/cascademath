import { Link, useParams } from "react-router-dom";
import { PageSection } from "@/components/PageSection";
import { NotFoundPage } from "@/pages/NotFoundPage";
import { newsletterIssues } from "@/content/newsletters";

export function NewsletterPostPage() {
  const { slug } = useParams();
  const issue = newsletterIssues.find((item) => item.slug === slug);

  if (!issue) return <NotFoundPage />;

  return (
    <PageSection>
      <div className="mx-auto max-w-[48rem]">
        <p className="mb-10 text-sm">
          <Link className="font-semibold text-primary underline underline-offset-4" to="/newsletters">
            All newsletters
          </Link>
        </p>
        <article aria-labelledby="newsletter-post-title">
          <header className="mb-10">
            <h1 id="newsletter-post-title" className="max-w-[18ch] text-[clamp(2.7rem,5vw,4.5rem)] leading-[1.03]">
              {issue.title}
            </h1>
            <p className="mt-6 max-w-[58ch] text-[clamp(1.15rem,2vw,1.35rem)] leading-[1.55] text-muted-foreground text-pretty">
              {issue.excerpt}
            </p>
          </header>
          <div>
            {issue.content.map((block, index) =>
              block.type === "heading" ? (
                block.level <= 2 ? (
                  <h2 className="mt-14 text-[clamp(1.55rem,2.5vw,2rem)] leading-tight" key={index}>
                    {block.text}
                  </h2>
                ) : (
                  <h3 className="mt-9 text-xl" key={index}>
                    {block.text}
                  </h3>
                )
              ) : (
                <p className="mt-5 text-[1.06rem] leading-[1.8] text-foreground/90 text-pretty" key={index}>
                  {block.text}
                </p>
              ),
            )}
          </div>
        </article>
        <p className="mt-14 text-sm">
          <Link className="font-semibold text-primary underline underline-offset-4" to="/newsletters">
            Back to newsletters
          </Link>
        </p>
      </div>
    </PageSection>
  );
}
