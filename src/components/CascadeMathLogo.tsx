import { cn } from "@/lib/utils";

type CascadeMathLogoProps = {
  className?: string;
  markOnly?: boolean;
};

export function CascadeMathLogo({ className = "", markOnly = false }: CascadeMathLogoProps) {
  return (
    <span className="inline-flex items-center leading-none">
      <img
        className={cn(
          markOnly
            ? "size-[2.3rem]"
            : "h-auto w-[clamp(9.5rem,17vw,12rem)] object-contain",
          className,
        )}
        src={markOnly ? "/assets/cascade-math-mark.png" : "/assets/cascade-math-wordmark.png"}
        alt=""
      />
    </span>
  );
}
