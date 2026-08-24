import type { ComponentProps, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export const pageContainerClass =
  "mx-auto w-full max-w-[var(--site-width)] px-[var(--gutter)]";

export const pageSectionClass = `${pageContainerClass} py-[var(--section-space)]`;

export const sectionCopyClass =
  "max-w-[59ch] text-[clamp(1.02rem,1.4vw,1.13rem)] leading-[1.68] text-muted-foreground text-pretty";

export const infoGridClass =
  "grid grid-cols-2 gap-x-[clamp(2rem,5vw,4.5rem)] max-[700px]:grid-cols-1";

export const infoItemClass =
  "grid grid-cols-[2.4rem_minmax(0,1fr)] items-start content-start gap-x-4 gap-y-2 border-t border-border py-5";

export const infoIconClass =
  "size-9 rounded-[0.65rem] bg-surface-strong/70 p-[0.48rem] text-primary";

export function PageSection({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn(pageSectionClass, className)} {...props} />;
}

export function SectionIntro({ className, ...props }: ComponentProps<"header">) {
  return (
    <header
      className={cn(
        "mb-[clamp(1.75rem,3vw,2.5rem)] grid max-w-[42rem] gap-[0.75rem]",
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
      <h3 className="pt-1">{title}</h3>
      <p className="col-start-2 max-w-[43ch] text-[0.95rem] leading-[1.62] text-muted-foreground text-pretty">
        {children}
      </p>
    </article>
  );
}
