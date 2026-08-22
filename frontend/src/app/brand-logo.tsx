export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex min-w-0 items-center" aria-hidden="true">
      <img
        src="/brand/lightpath-open-path-logo-cropped.png"
        alt=""
        className={compact ? "h-12 w-auto shrink-0 object-contain" : "h-14 w-auto shrink-0 object-contain"}
      />
    </span>
  );
}
