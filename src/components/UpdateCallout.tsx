import { Mail } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { contactEmail } from "@/content/site";

export function UpdateCallout({
  title = "Stay in the loop",
  description = "Email us to get updates about Cascade Math programs and Cascade Math Fest.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="update-callout" aria-labelledby="updates-heading">
      <div className="callout-icon" aria-hidden="true">
        <Mail />
      </div>
      <div className="callout-copy">
        <h2 id="updates-heading">{title}</h2>
        <p>{description}</p>
      </div>
      <div className="update-form">
        <a
          className={buttonVariants({ size: "lg", className: "cta-link update-email-link" })}
          href={`mailto:${contactEmail}?subject=Cascade%20Math%20updates`}
        >
          Email us
        </a>
      </div>
    </section>
  );
}
