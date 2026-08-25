import { useEffect, useRef, useState, type FormEvent } from "react";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js";
const MAX_EMAIL_LENGTH = 254;
type FormStatus = "idle" | "submitting" | "success" | "error";

function isEmail(value: string) {
  return value.length <= MAX_EMAIL_LENGTH && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function loadTurnstileScript() {
  if (window.turnstile) {
    return Promise.resolve();
  }

  return new Promise<void>((resolve, reject) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-cascade-turnstile="true"]',
    );
    const script = existingScript ?? document.createElement("script");

    const onLoad = () => {
      if (window.turnstile) {
        resolve();
      } else {
        reject(new Error("Turnstile did not load."));
      }
    };
    const onError = () => reject(new Error("Turnstile failed to load."));

    script.addEventListener("load", onLoad, { once: true });
    script.addEventListener("error", onError, { once: true });

    if (!existingScript) {
      script.async = true;
      script.defer = true;
      script.src = TURNSTILE_SCRIPT_URL;
      script.dataset.cascadeTurnstile = "true";
      document.head.appendChild(script);
    }
  });
}

export function MailingListForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [turnstileToken, setTurnstileToken] = useState("");
  const [turnstileError, setTurnstileError] = useState("");
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | null>(null);
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    if (!turnstileSiteKey) {
      setTurnstileError("Subscriptions are temporarily unavailable. Please try again later.");
      return;
    }

    let isActive = true;
    loadTurnstileScript()
      .then(() => {
        if (!isActive || !turnstileContainerRef.current || !window.turnstile) {
          return;
        }

        turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          callback: (token) => {
            if (isActive) {
              setTurnstileToken(token);
              setTurnstileError("");
            }
          },
          "error-callback": () => {
            if (isActive) {
              setTurnstileToken("");
              setTurnstileError("Verification could not be loaded. Please try again.");
            }
          },
          "expired-callback": () => {
            if (isActive) {
              setTurnstileToken("");
            }
          },
          sitekey: turnstileSiteKey,
          theme: "dark",
        });
      })
      .catch(() => {
        if (isActive) {
          setTurnstileError("Verification could not be loaded. Please try again.");
        }
      });

    return () => {
      isActive = false;
      const widgetId = turnstileWidgetIdRef.current;
      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }
      turnstileWidgetIdRef.current = null;
    };
  }, [turnstileSiteKey]);

  function resetTurnstile() {
    const widgetId = turnstileWidgetIdRef.current;
    if (widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
    setTurnstileToken("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") {
      return;
    }

    const normalizedEmail = email.trim().toLowerCase();
    if (!isEmail(normalizedEmail)) {
      setStatus("error");
      setMessage("Enter a valid email address.");
      return;
    }

    if (!turnstileSiteKey || !turnstileToken) {
      setStatus("error");
      setMessage("Complete the verification to continue.");
      return;
    }

    setStatus("submitting");
    setMessage("Submitting…");

    try {
      const response = await fetch("/api/subscribe", {
        body: JSON.stringify({ email: normalizedEmail, turnstileToken }),
        headers: { "content-type": "application/json" },
        method: "POST",
      });
      const responseBody: unknown = await response.json().catch(() => null);

      if (!response.ok || !isSuccessfulResponse(responseBody)) {
        throw new Error("Subscription request failed.");
      }

      setEmail("");
      setStatus("success");
      setMessage("You’re subscribed to Cascade Math updates.");
      resetTurnstile();
    } catch {
      setStatus("error");
      setMessage("We couldn’t subscribe you right now. Please try again.");
      resetTurnstile();
    }
  }

  function handleEmailChange(value: string) {
    setEmail(value);
    if (status !== "idle") {
      setStatus("idle");
      setMessage("");
    }
  }

  const hasError = status === "error";
  const isSubmitting = status === "submitting";

  return (
    <form
      className="grid gap-2.5"
      onSubmit={handleSubmit}
      noValidate
      aria-busy={isSubmitting}
    >
      <label
        className="text-[0.78rem] font-[620] leading-none text-white/78"
        htmlFor="mailing-list-email"
      >
        Email address
      </label>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 max-[700px]:grid-cols-1">
        <Input
          className="h-12 rounded-[0.65rem] border-white/25 bg-white/10 px-3.5 text-white placeholder:text-white/55 focus-visible:border-aqua focus-visible:ring-aqua/25"
          id="mailing-list-email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={MAX_EMAIL_LENGTH}
          placeholder="Email address"
          value={email}
          onChange={(event) => handleEmailChange(event.target.value)}
          aria-invalid={hasError}
          aria-describedby={message ? "mailing-list-message" : "mailing-list-consent"}
          disabled={isSubmitting}
        />
        <button
          className={buttonVariants({
            size: "lg",
            className:
              "h-12 rounded-[0.65rem] bg-aqua px-5 font-[680] text-night hover:bg-white hover:text-night max-[700px]:w-full",
          })}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting…" : status === "success" ? "Subscribed" : "Get updates"}
        </button>
      </div>
      <p className="text-[0.72rem] leading-[1.4] text-white/60" id="mailing-list-consent">
        By submitting, you agree to receive Cascade Math updates by email. You can unsubscribe anytime.
      </p>
      {turnstileSiteKey ? (
        <div ref={turnstileContainerRef} className="min-h-[65px]" />
      ) : null}
      {turnstileError ? (
        <p className="text-[0.72rem] leading-[1.4] text-red-200" role="alert">
          {turnstileError}
        </p>
      ) : null}
      <p
        className={cn(
          "min-h-[1rem] text-[0.72rem] leading-[1.4] text-white/60",
          hasError && "text-red-200",
        )}
        id="mailing-list-message"
        role={message ? (hasError ? "alert" : "status") : undefined}
      >
        {message}
      </p>
    </form>
  );
}

function isSuccessfulResponse(value: unknown): value is { success: true } {
  return typeof value === "object" && value !== null && "success" in value && value.success === true;
}
