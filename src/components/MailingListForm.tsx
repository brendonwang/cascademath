import { useState, type FormEvent } from "react";
import { contactEmail } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function MailingListForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [hasError, setHasError] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalizedEmail = email.trim();

    if (!isEmail(normalizedEmail)) {
      setHasError(true);
      setMessage("Enter a valid email address.");
      return;
    }

    const subject = encodeURIComponent("Join the Cascade Math mailing list");
    const body = encodeURIComponent(
      `Please add ${normalizedEmail} to the Cascade Math mailing list.`,
    );
    setHasError(false);
    setMessage("We’ll open your email app so you can finish signing up.");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="grid gap-2" onSubmit={handleSubmit} noValidate>
      <label className="sr-only" htmlFor="mailing-list-email">
        Email address
      </label>
      <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-2 max-[700px]:grid-cols-1">
        <Input
          className="h-[2.85rem] min-h-[2.85rem] border-white/25 bg-white/10 text-white placeholder:text-white/55 focus-visible:border-aqua focus-visible:ring-aqua/25"
          id="mailing-list-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email address"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            if (hasError) {
              setHasError(false);
              setMessage("");
            }
          }}
          aria-invalid={hasError}
          aria-describedby={message ? "mailing-list-message" : undefined}
        />
        <button
          className={buttonVariants({
            size: "lg",
            className:
              "h-[2.85rem] min-h-[2.85rem] bg-aqua font-[700] text-night hover:bg-white hover:text-night max-[700px]:w-full",
          })}
          type="submit"
        >
          Get updates
        </button>
      </div>
      <p
        className={cn(
          "min-h-[1.1rem] text-[0.72rem] leading-[1.4] text-white/60",
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
