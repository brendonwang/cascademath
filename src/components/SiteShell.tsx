import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { ArrowRight, MenuIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode, type TransitionEvent } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { CascadeMathLogo } from "@/components/CascadeMathLogo";
import { contactEmail, contactPlaceholders, footerLinks, navItems } from "@/content/site";
import { ctaClass, pageContainerClass } from "@/components/PageSection";
import { RouteMetadata } from "@/components/RouteMetadata";
import { cn } from "@/lib/utils";

const desktopNavClass =
  "relative text-muted-foreground no-underline transition-colors duration-200 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4 after:absolute after:right-0 after:bottom-[-0.7rem] after:left-0 after:h-0.5 after:origin-center after:scale-x-[0.35] after:bg-primary after:opacity-0 after:transition-[opacity,transform] after:duration-200 after:content-['']";

function navClass({ isActive }: { isActive: boolean }) {
  return cn(
    desktopNavClass,
    "text-[0.86rem] font-[620]",
    isActive && "text-primary after:scale-x-100 after:opacity-100",
  );
}

function RouteScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const hashTarget = hash ? document.getElementById(hash.slice(1)) : null;

    if (hashTarget) {
      if (typeof hashTarget.scrollIntoView === "function") {
        hashTarget.scrollIntoView({ block: "start" });
      }
      return;
    }

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname, hash]);

  return null;
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
      setMobileDrawerMounted(false);
    }

    setMobileOpen(false);
  }

  function handleDrawerTransitionEnd(event: TransitionEvent<HTMLElement>) {
    if (
      event.target !== event.currentTarget ||
      mobileOpen
    ) {
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
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <RouteMetadata />
      <RouteScrollManager />
      <a
        className="fixed left-3 top-3 z-[60] -translate-y-[180%] rounded-[0.55rem] bg-foreground px-3.5 py-2.5 text-sm font-[650] text-background no-underline focus:translate-y-0"
        href="#content"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-xl">
        <div
          className={cn(
            pageContainerClass,
            "grid min-h-[4.65rem] grid-cols-[auto_1fr] items-center max-[700px]:min-h-16",
          )}
        >
          <Link to="/" className="inline-flex w-fit items-center text-foreground no-underline">
            <CascadeMathLogo className="w-[10.8rem] max-[700px]:w-[8.9rem]" />
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
            <button
              className="inline-flex h-11 items-center gap-2.5 border-0 bg-transparent px-1 text-sm font-[650] text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              type="button"
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-drawer"
              onClick={() => (mobileOpen ? closeMobileDrawer() : openMobileDrawer())}
            >
              <span aria-hidden="true">Menu</span>
              <MenuIcon className="size-5" aria-hidden="true" strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </header>
      {mobileDrawerMounted && (
        <div className="pointer-events-none fixed inset-0 z-50 min-[701px]:hidden">
          <button
            className={cn(
              "absolute inset-0 h-full w-full cursor-default border-0 bg-night/45 transition-opacity duration-300 ease-out",
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
              "absolute inset-y-0 right-0 flex w-[calc(100%-1rem)] max-w-[30rem] flex-col overflow-y-auto border-l bg-background transition-[translate] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
              mobileOpen
                ? "pointer-events-auto translate-x-0"
                : "pointer-events-none translate-x-full",
            )}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            inert={!mobileOpen}
            onTransitionEnd={handleDrawerTransitionEnd}
          >
            <div className="flex min-h-full flex-col px-[var(--gutter)] pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <header className="flex min-h-16 shrink-0 items-center justify-between border-b">
                <CascadeMathLogo className="w-[8.9rem]" />
                <Button
                  ref={mobileCloseRef}
                  className="size-11 -mr-2 !bg-transparent text-foreground hover:!bg-transparent focus-visible:!bg-transparent"
                  variant="ghost"
                  size="icon-lg"
                  type="button"
                  aria-label="Close navigation"
                  onClick={closeMobileDrawer}
                >
                  <XIcon className="size-5" aria-hidden="true" strokeWidth={2} />
                  <span className="sr-only">Close navigation</span>
                </Button>
              </header>
              <nav className="grid pt-6" aria-label="Mobile navigation">
                {navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    end={item.href === "/"}
                    to={item.href}
                    className={({ isActive }) =>
                      cn(
                        "flex min-h-16 items-center border-b text-2xl font-[620] text-foreground no-underline transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-[-2px]",
                        isActive && "text-primary",
                      )
                    }
                    onClick={closeMobileDrawer}
                  >
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>
              <a
                className="mt-auto w-fit pt-8 text-sm font-[600] text-primary underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                href={`mailto:${contactEmail}`}
              >
                Email us
              </a>
            </div>
          </aside>
        </div>
      )}
      <main className="flex-1" id="content">
        <Outlet />
      </main>
      <footer className="border-t border-white/10 bg-night text-white">
        <div
          className={cn(
            pageContainerClass,
            "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-[clamp(2rem,6vw,5rem)] py-[clamp(3rem,5vw,4.5rem)] max-[700px]:grid-cols-1 max-[700px]:items-start max-[700px]:gap-7 max-[700px]:py-10",
          )}
        >
          <div className="grid max-w-[25rem] content-start gap-3.5">
            <Link to="/" className="inline-flex w-fit items-center gap-3 text-white no-underline">
              <CascadeMathLogo markOnly className="size-11" />
              <span className="text-[1rem] font-[680]">Cascade Math</span>
            </Link>
            <p className="max-w-[34ch] text-[0.88rem] leading-[1.58] text-white/62">
              Math events run by students in Seattle. Cascade Math is a 501(c)(3) nonprofit
              organization.
            </p>
          </div>
          <div className="grid justify-items-end gap-5 max-[700px]:w-full max-[700px]:justify-items-start">
            <nav className="max-[700px]:w-full" aria-label="Footer navigation">
              <ul className="flex list-none flex-wrap justify-end gap-x-5 gap-y-2 p-0 max-[700px]:grid max-[700px]:w-full max-[700px]:grid-cols-2 max-[700px]:gap-0 max-[700px]:border-y max-[700px]:border-white/12">
                {footerLinks.map((link) => (
                  <li className="max-[700px]:border-b max-[700px]:border-white/12 max-[700px]:odd:border-r max-[700px]:nth-last-2:border-b-0 max-[700px]:last:border-b-0" key={link.href}>
                    <Link
                      className="text-[0.84rem] font-[620] leading-[1.55] text-white/68 no-underline transition-colors hover:text-aqua max-[700px]:flex max-[700px]:min-h-12 max-[700px]:items-center max-[700px]:px-3 max-[700px]:text-[0.88rem]"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 max-[700px]:grid max-[700px]:w-full max-[700px]:justify-start max-[700px]:gap-3">
              {contactPlaceholders.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    className="inline-flex min-h-11 items-center gap-2 text-[0.84rem] text-white/68 no-underline transition-colors hover:text-aqua max-[700px]:break-all"
                    href={item.href}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {item.label}
                  </a>
                );
              })}
              <a
                className="inline-flex min-h-11 items-center text-[0.84rem] font-[680] text-aqua no-underline transition-colors hover:text-white"
                href="/cmfregistration26"
              >
                Waiting list
              </a>
              <a
                className="inline-flex min-h-11 items-center text-[0.84rem] font-[680] text-aqua no-underline transition-colors hover:text-white"
                href="/cmfguide26"
              >
                Guide
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div
            className={cn(
              pageContainerClass,
              "flex items-center justify-between gap-4 py-4 text-[0.73rem] text-white/45 max-[520px]:items-start max-[520px]:flex-col",
            )}
          >
            <p>© 2026 Cascade Math Foundation. All rights reserved.</p>
          </div>
        </div>
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
          ctaClass,
          className,
        ),
      })}
    >
      {children}
    </Link>
  );
}
