import { Mail } from "lucide-react";
import { MailingListForm } from "@/components/MailingListForm";

export function UpdateCallout({
  title = "Event updates",
  description = "We’ll email you when registration opens and the schedule is ready.",
  id = "mailing-list",
}: {
  title?: string;
  description?: string;
  id?: string;
}) {
  return (
    <section
      className="relative mt-[clamp(2.5rem,5vw,4rem)] grid grid-cols-[2.25rem_minmax(0,0.9fr)_minmax(19rem,1.1fr)] items-center gap-5 overflow-hidden rounded-[1.1rem] border border-white/10 bg-night p-[clamp(1.5rem,3vw,2.35rem)] text-white before:pointer-events-none before:absolute before:-right-20 before:-top-24 before:size-72 before:rounded-full before:bg-aqua/8 before:blur-3xl before:content-[''] max-[900px]:grid-cols-[2.25rem_minmax(0,1fr)] max-[700px]:grid-cols-[2.25rem_minmax(0,1fr)] max-[700px]:gap-x-3.5 max-[700px]:gap-y-4 max-[700px]:rounded-[0.9rem] max-[700px]:p-5"
      id={id}
      aria-labelledby="updates-heading"
    >
      <div className="relative" aria-hidden="true">
        <Mail className="size-9 rounded-[0.65rem] bg-white/8 p-[0.48rem] text-aqua" />
      </div>
      <div className="relative grid gap-[0.4rem]">
        <h2 id="updates-heading" className="font-sans text-[clamp(1.3rem,2vw,1.65rem)] font-[650] tracking-[-0.035em]">
          {title}
        </h2>
        <p className="max-w-[42ch] text-[0.9rem] leading-[1.55] text-white/70">{description}</p>
      </div>
      <div className="relative min-w-0 max-[900px]:col-start-2 max-[700px]:col-span-2 max-[700px]:col-start-1 max-[700px]:w-full">
        <MailingListForm />
      </div>
    </section>
  );
}
