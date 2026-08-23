import { Link, NavLink, Outlet } from "react-router-dom";
import { MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode, type TransitionEvent } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { CascadeMathLogo } from "@/components/CascadeMathLogo";
import { Separator } from "@/components/ui/separator";
import { contactPlaceholders, footerLinks, navItems } from "@/content/site";
import { pageContainerClass } from "@/components/PageSection";
import { cn } from "@/lib/utils";

const navBaseClass =
  "relative text-muted-foreground no-underline transition-colors duration-200 hover:text-primary after:absolute after:right-0 after:bottom-[-0.65rem] after:left-0 after:h-0.5 after:origin-center after:scale-x-[0.35] after:bg-primary after:opacity-0 after:transition-[opacity,transform] after:duration-200 after:content-['']";

function navClass({ isActive }: { isActive: boolean }, mobile = false) {
  return cn(
    navBaseClass,
    mobile
      ? "block rounded-[0.35rem] px-[0.9rem] py-[0.85rem] text-base after:hidden"
      : "text-[0.82rem] font-[650] tracking-[0.025em]",
    isActive && (mobile ? "bg-surface text-primary" : "text-primary after:scale-x-100 after:opacity-100"),
  );
}

export function SiteShell() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDrawerMounted, setMobileDrawerMounted] = useState(false);
  const mobileOpenFrameRef = useRef<number | null>(null);
  const mobileCloseRef = useRef<HTMLButtonElement>(null);
  const mobileDrawerRef = useRef<HTMLElement>(null);

  function openMobileDrawer() {
    setMobileDrawerMounted(true);
    mobileOpenFrameRef.current = window.requestAnimationFrame(() => {
      mobileOpenFrameRef.current = null;
      setMobileOpen(true);
    });
  }

  function closeMobileDrawer() {
    if (mobileOpenFrameRef.current !== null) {
      window.cancelAnimationFrame(mobileOpenFrameRef.current);
      mobileOpenFrameRef.current = null;
    }

    setMobileOpen(false);
  }

  function handleDrawerTransitionEnd(event: TransitionEvent<HTMLElement>) {
    if (event.target !== event.currentTarget || mobileOpen) {
      return;
    }

    setMobileDrawerMounted(false);
  }

  useEffect(() => {
    if (!mobileOpen) {
      return;
    }

    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const focusFrame = window.requestAnimationFrame(() => {
      mobileCloseRef.current?.focus();
    });

    document.body.style.overflow = "hidden";

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMobileDrawer();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusable = mobileDrawerRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled])',
      );

      if (!focusable?.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [mobileOpen]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a
        className="fixed left-3 top-3 z-[60] -translate-y-[180%] rounded-[0.25rem] bg-foreground px-3.5 py-2.5 text-sm font-[650] text-background no-underline focus:translate-y-0"
        href="#content"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/95 backdrop-blur-md">
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[4.65rem] grid-cols-[auto_1fr] items-center max-[700px]:min-h-[4.1rem]",
          )}
        >
          <Link to="/" className="inline-flex w-fit items-center text-foreground no-underline">
            <CascadeMathLogo className="max-[700px]:w-[9.7rem]" />
          </Link>
          <nav
            className="flex justify-end gap-[clamp(1.1rem,3vw,2.7rem)] max-[700px]:hidden"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                end={item.href === "/"}
                to={item.href}
                className={navClass}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="relative hidden items-center self-stretch justify-self-end max-[700px]:flex">
            <Button
              className="relative z-[2]"
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              onClick={() => (mobileOpen ? closeMobileDrawer() : openMobileDrawer())}
            >
              <MenuIcon aria-hidden="true" />
              <span className="sr-only">
                {mobileOpen ? "Close navigation" : "Open navigation"}
              </span>
            </Button>
          </div>
        </div>
      </header>
      {mobileDrawerMounted && (
        <div className="pointer-events-none fixed inset-0 z-50">
          <button
            className={cn(
              "absolute inset-0 h-full w-full cursor-default border-0 bg-[rgb(12_43_67_/_24%)] transition-opacity duration-200 ease-out",
              mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
            )}
            type="button"
            aria-label="Close navigation"
            onClick={closeMobileDrawer}
          />
          <aside
            id="mobile-drawer"
            ref={mobileDrawerRef}
            className={cn(
              "absolute inset-y-0 right-0 flex w-[min(21rem,calc(100vw-1rem))] transform flex-col border-l border-border bg-background p-5 shadow-[-1rem_0_2rem_rgb(15_49_75_/_14%)] transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform",
              mobileOpen
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-none translate-x-full",
            )}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-drawer-title"
            onTransitionEnd={handleDrawerTransitionEnd}
          >
            <header className="flex items-center justify-between border-b border-border pb-4">
              <h2 id="mobile-drawer-title" className="text-[1.15rem] font-[720]">
                Menu
              </h2>
              <Button
                ref={mobileCloseRef}
                className="rounded-full border-transparent !bg-transparent text-foreground hover:!bg-transparent focus-visible:!bg-transparent"
                variant="ghost"
                size="icon-lg"
                type="button"
                aria-label="Close navigation"
                onClick={closeMobileDrawer}
              >
                <XIcon aria-hidden="true" />
                <span className="sr-only">Close navigation</span>
              </Button>
            </header>
            <nav className="flex flex-col gap-[0.35rem] pt-[1.15rem]" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <NavLink
                  key={item.href}
                  end={item.href === "/"}
                  to={item.href}
                  className={(props) => navClass(props, true)}
                  onClick={closeMobileDrawer}
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </aside>
        </div>
      )}
      <main id="content">
        <Outlet />
      </main>
      <footer className="border-t border-border bg-surface">
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[1.35fr_0.7fr_1fr] gap-[clamp(2rem,6vw,5rem)] py-10 max-[900px]:grid-cols-[1.2fr_0.8fr_1fr] max-[700px]:grid-cols-1 max-[700px]:gap-8 max-[700px]:py-[2.2rem]",
          )}
        >
          <div className="grid content-start gap-3.5">
            <Link to="/" className="inline-flex w-fit items-center text-foreground no-underline">
              <CascadeMathLogo className="w-[11rem] max-[700px]:w-[9.7rem]" />
            </Link>
            <p className="max-w-[24ch] text-[0.88rem] leading-[1.55] text-muted-foreground">
              A student-run math community in the Seattle area.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-[0.85rem] font-[720] tracking-[0.08em] uppercase">Explore</h2>
            <ul className="flex list-none flex-col gap-2 p-0">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    className="text-[0.88rem] leading-[1.55] text-muted-foreground no-underline transition-colors hover:text-primary"
                    to={link.href}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-3 text-[0.85rem] font-[720] tracking-[0.08em] uppercase">Get in touch</h2>
            <p className="text-[0.88rem] leading-[1.55] text-muted-foreground">
              Have a question or want to help?
            </p>
            <ul className="mt-3 flex list-none flex-col gap-2 p-0">
              {contactPlaceholders.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.label}
                    className="flex items-center gap-2 text-[0.88rem] leading-[1.55] text-muted-foreground"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    <a
                      className="text-muted-foreground no-underline transition-colors hover:text-primary"
                      href={item.href}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <Link
              className="mt-4 inline-block text-[0.88rem] font-[680] text-primary no-underline transition-colors hover:text-primary/80"
              to="/#mailing-list"
            >
              Join the mailing list
            </Link>
          </div>
        </div>
        <Separator />
        <p
          className={cn(
            pageContainerClass,
            "py-4 pb-8 text-center text-[0.76rem] text-muted-foreground",
          )}
        >
          © 2026 Cascade Math Foundation. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export function CtaLink({
  to,
  children,
  variant = "default",
  className,
}: {
  to: string;
  children: ReactNode;
  variant?: "default" | "outline" | "secondary";
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={buttonVariants({
        variant,
        size: "lg",
        className: cn(
          "min-h-[2.85rem] min-w-[10.5rem] rounded-[0.35rem] px-[1.05rem] font-[680] shadow-none",
          className,
        ),
      })}
    >
      {children}
    </Link>
  );
}
