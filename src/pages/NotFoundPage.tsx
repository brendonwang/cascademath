import { Link } from "react-router-dom";
import { PageSection, sectionCopyClass } from "@/components/PageSection";
import { buttonVariants } from "@/components/ui/button";

export function NotFoundPage() {
  return (
    <PageSection
      className="grid min-h-[calc(100dvh-18rem)] content-center justify-items-start gap-5"
      aria-labelledby="not-found-heading"
    >
      <h1 id="not-found-heading" className="max-w-[11ch]">
        Page not found
      </h1>
      <p className={sectionCopyClass}>The page may have moved, or the address may be incorrect.</p>
      <Link
        to="/"
        className={buttonVariants({
          size: "lg",
          className: "min-h-[2.85rem] rounded-[0.35rem] px-[1.05rem] font-[680] shadow-none",
        })}
      >
        Go to homepage
      </Link>
    </PageSection>
  );
}
