import { Mail } from "lucide-react";
import { MailingListForm } from "@/components/MailingListForm";

export function UpdateCallout({
  title = "Want event updates?",
  description = "We’ll email you when registration opens and the schedule is ready.",
  id = "mailing-list",
}: {
  title?: string;
  description?: string;
  id?: string;
}) {
  return (
    <section
      className="mt-[clamp(2rem,4vw,3.5rem)] grid grid-cols-[2rem_minmax(0,1fr)_minmax(18rem,0.9fr)] items-center gap-5 rounded-[1rem] bg-night p-[clamp(1.35rem,3vw,2.1rem)] text-white max-[900px]:grid-cols-[2rem_minmax(0,1fr)] max-[700px]:grid-cols-1 max-[700px]:gap-3.5"
      id={id}
      aria-labelledby="updates-heading"
    >
      <div aria-hidden="true">
        <Mail className="size-8 rounded-[0.4rem] bg-white/8 p-[0.42rem] text-aqua" />
      </div>
      <div className="grid gap-[0.35rem]">
        <h2 id="updates-heading" className="font-sans text-[clamp(1.2rem,2vw,1.55rem)] font-[680] tracking-[-0.035em]">
          {title}
        </h2>
        <p className="max-w-[46ch] text-[0.88rem] leading-[1.5] text-white/70">{description}</p>
      </div>
      <div className="min-w-0 max-[900px]:col-start-2 max-[700px]:col-start-1 max-[700px]:w-full">
        <MailingListForm />
      </div>
    </section>
  );
}
