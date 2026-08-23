import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const pageContainerClass =
  "mx-auto w-full max-w-[var(--site-width)] px-[var(--gutter)]";

export const pageSectionClass = `${pageContainerClass} py-[var(--section-space)]`;

export const sectionCopyClass =
  "max-w-[59ch] text-[clamp(1rem,1.4vw,1.12rem)] leading-[1.65] text-muted-foreground text-pretty";

export const infoGridClass =
  "grid grid-cols-3 gap-x-[clamp(1.5rem,3vw,2.5rem)] gap-y-[clamp(1.75rem,3vw,2.4rem)] max-[900px]:grid-cols-2 max-[700px]:grid-cols-1";

export const infoItemClass =
  "grid grid-cols-[2rem_minmax(0,1fr)] items-center content-start gap-x-3.5 gap-y-3 border-t border-border pt-5";

export const infoIconClass = "size-8 rounded-[0.4rem] bg-surface p-[0.42rem] text-primary";

export function PageSection({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn(pageSectionClass, className)} {...props} />;
}

export function SectionIntro({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "mb-[clamp(1.5rem,3vw,2.25rem)] grid max-w-[43rem] gap-[0.65rem]",
        className,
      )}
      {...props}
    />
  );
}

export function InfoGrid({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn(infoGridClass, className)} {...props} />;
}

export function InfoItem({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <article className={cn(infoItemClass, className)}>
      <Icon className={infoIconClass} aria-hidden="true" strokeWidth={1.8} />
      <h3>{title}</h3>
      <p className="col-span-full max-w-[43ch] text-[0.94rem] leading-[1.62] text-muted-foreground text-pretty">
        {children}
      </p>
    </article>
  );
}
