type CascadeMathLogoProps = {
  className?: string;
};

export function CascadeMathLogo({ className = "" }: CascadeMathLogoProps) {
  return (
    <span className={`cascade-logo ${className}`.trim()}>
      <svg
        className="cascade-logo-mark"
        viewBox="0 0 48 48"
        aria-hidden="true"
        focusable="false"
      >
        <path
          className="cascade-logo-mark-c"
          d="M34.5 13.5a14.5 14.5 0 1 0 0 21"
        />
        <path className="cascade-logo-mark-times" d="m19.5 19.5 9 9m0-9-9 9" />
      </svg>
      <span className="cascade-logo-wordmark">
        <span>Cascade</span>
        <span>Math</span>
      </span>
    </span>
  );
}
