import { Link, NavLink, Outlet } from "react-router-dom";
import { MenuIcon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CascadeMathLogo } from "@/components/CascadeMathLogo";
import { Separator } from "@/components/ui/separator";
import { contactPlaceholders, footerLinks, navItems } from "@/content/site";
import { cn } from "@/lib/utils";

function navClass({ isActive }: { isActive: boolean }) {
  return cn("nav-link", isActive && "active");
}

export function SiteShell() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="site-header-inner">
          <Link to="/" className="brand-link" aria-label="Cascade Math home">
            <CascadeMathLogo />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href} className={navClass}>
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="mobile-menu-shell">
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger render={<Button variant="ghost" size="icon" />}>
                <MenuIcon data-icon="inline-start" />
                <span className="sr-only">Open navigation</span>
              </SheetTrigger>
              <SheetContent className="w-[min(82vw,22rem)]">
                <SheetHeader>
                  <SheetTitle>
                    <CascadeMathLogo className="cascade-logo--menu" />
                  </SheetTitle>
                  <SheetDescription>Choose a page.</SheetDescription>
                </SheetHeader>
                <nav className="mobile-nav" aria-label="Mobile navigation">
                  {navItems.map((item) => (
                    <NavLink
                      key={item.href}
                      to={item.href}
                      className={navClass}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand">
            <Link to="/" className="brand-link" aria-label="Cascade Math home">
              <CascadeMathLogo className="cascade-logo--footer" />
            </Link>
            <p>Math events for students, families, and the wider community.</p>
          </div>
          <div>
            <h2>Explore</h2>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link to={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Get in touch</h2>
            <p>Questions or want to help?</p>
            <ul>
              {contactPlaceholders.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.label} className="footer-contact">
                    <Icon aria-hidden="true" />
                    <a href={item.href}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <Separator />
        <p className="copyright">© 2026 Cascade Math Foundation. All rights reserved.</p>
      </footer>
    </div>
  );
}

export function CtaLink({
  to,
  children,
  variant = "default",
}: {
  to: string;
  children: ReactNode;
  variant?: "default" | "outline" | "secondary";
}) {
  return (
    <Link to={to} className={buttonVariants({ variant, size: "lg", className: "cta-link" })}>
      {children}
    </Link>
  );
}
