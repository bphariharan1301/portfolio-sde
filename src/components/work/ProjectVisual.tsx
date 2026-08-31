import { Check, Sparkles } from "lucide-react";
import type { VisualKey } from "@/content/types";

/**
 * Hand-built abstract product previews.
 *
 * These are not screenshots and are not meant to be read as UI mockups of the
 * real products — they're a visual shorthand for the kind of system each
 * project is. Built in CSS/SVG so they cost nothing to load, scale cleanly and
 * stay on-brand. Decorative, so aria-hidden.
 */
export function ProjectVisual({
  variant,
  size = "card",
}: {
  variant: VisualKey;
  /** "page" centres the panel so it doesn't stretch across a full-bleed hero. */
  size?: "card" | "page";
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none relative h-full w-full select-none overflow-hidden"
    >
      <div className="absolute inset-0 grid-lines opacity-60" />
      <div
        className={
          "relative h-full w-full p-5 sm:p-6 " +
          (size === "page" ? "mx-auto max-w-2xl md:py-10" : "")
        }
      >
        {variant === "claims" && <ClaimsVisual />}
        {variant === "oee" && <OeeVisual />}
        {variant === "permit" && <PermitVisual />}
        {variant === "pos" && <PosVisual />}
        {variant === "commerce" && <CommerceVisual />}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-bg to-transparent" />
    </div>
  );
}

const label =
  "font-mono text-[0.5625rem] uppercase tracking-[0.12em] text-faint";
const panel = "rounded-lg border border-line bg-bg/70 backdrop-blur-[1px]";

/* ---------------------------------- claims -------------------------------- */

const claimSteps = [
  { name: "Patient", state: "done" },
  { name: "Provider", state: "done" },
  { name: "Hospital", state: "active" },
  { name: "Settled", state: "todo" },
] as const;

function ClaimsVisual() {
  return (
    <div className="flex h-full flex-col justify-between gap-4">
      <div className={`${panel} p-3.5`}>
        <div className="flex items-center justify-between">
          <span className={label}>Claim CLM-4821</span>
          <span className="rounded border border-accent/25 bg-accent-soft px-1.5 py-0.5 font-mono text-[0.5625rem] text-accent">
            In review
          </span>
        </div>

        <div className="mt-4 flex items-center">
          {claimSteps.map((step, i) => (
            <div key={step.name} className="flex flex-1 items-center last:flex-none">
              <div className="flex flex-col items-center gap-1.5">
                <span
                  className={
                    "grid h-5 w-5 place-items-center rounded-full border text-[0.5rem] " +
                    (step.state === "done"
                      ? "border-accent/40 bg-accent-soft text-accent"
                      : step.state === "active"
                        ? "border-accent bg-accent text-bg"
                        : "border-line bg-surface text-faint")
                  }
                >
                  {step.state === "done" ? (
                    <Check className="h-2.5 w-2.5" strokeWidth={3} />
                  ) : (
                    i + 1
                  )}
                </span>
                <span className="font-mono text-[0.5rem] text-subtle">
                  {step.name}
                </span>
              </div>
              {i < claimSteps.length - 1 && (
                <span
                  className={
                    "mx-1 mb-4 h-px flex-1 " +
                    (step.state === "done" ? "bg-accent/40" : "bg-line")
                  }
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className={`${panel} flex items-start gap-2.5 p-3`}>
        <Sparkles className="mt-px h-3 w-3 shrink-0 text-accent" />
        <div className="min-w-0">
          <p className="font-mono text-[0.5625rem] text-subtle">
            Suggested provider · from diagnosis
          </p>
          <div className="mt-2 flex gap-1.5">
            <span className="h-1.5 w-16 rounded-full bg-fg/20" />
            <span className="h-1.5 w-8 rounded-full bg-fg/10" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {["FHIR", "RxNorm", "LangChain"].map((t) => (
          <div
            key={t}
            className="rounded-md border border-line bg-surface/60 px-2 py-1.5 text-center font-mono text-[0.5625rem] text-subtle"
          >
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ----------------------------------- oee ---------------------------------- */

const bars = [58, 72, 45, 81, 64, 92, 70, 55, 86, 62, 78, 49];
const kpis = [
  { k: "Availability", v: "92.4%" },
  { k: "Performance", v: "87.1%" },
  { k: "Quality", v: "98.6%" },
];

function OeeVisual() {
  const points = bars
    .map((b, i) => `${(i / (bars.length - 1)) * 100},${100 - b}`)
    .join(" ");

  return (
    <div className="flex h-full flex-col gap-3">
      <div className="grid grid-cols-3 gap-2">
        {kpis.map((kpi) => (
          <div key={kpi.k} className={`${panel} px-2.5 py-2`}>
            <p className="font-mono text-[0.5rem] uppercase tracking-wider text-faint">
              {kpi.k}
            </p>
            <p className="mt-1 font-mono text-xs text-fg">{kpi.v}</p>
          </div>
        ))}
      </div>

      <div className={`${panel} flex flex-1 flex-col p-3.5`}>
        <div className="flex items-center justify-between">
          <span className={label}>OEE · live</span>
          <span className="inline-flex items-center gap-1.5 font-mono text-[0.5625rem] text-live">
            <span className="h-1 w-1 rounded-full bg-live" />
            streaming
          </span>
        </div>

        <div className="relative mt-3 flex-1">
          <div className="absolute inset-0 flex items-end gap-[3px]">
            {bars.map((b, i) => (
              <span
                key={i}
                style={{ height: `${b}%` }}
                className="flex-1 rounded-sm bg-linear-to-t from-fg/[0.06] to-fg/20"
              />
            ))}
          </div>
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute inset-0 h-full w-full overflow-visible"
          >
            <polyline
              points={points}
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="1.2"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- permit -------------------------------- */

const permitRows = [
  { role: "Requester", name: "Line supervisor", state: "done" },
  { role: "Safety officer", name: "Hazard review", state: "done" },
  { role: "Area owner", name: "Isolation check", state: "active" },
  { role: "Plant head", name: "Final approval", state: "todo" },
] as const;

function PermitVisual() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className={label}>Permit PTW-0912 · hot work</span>
        <span className="rounded border border-signal/25 bg-signal/10 px-1.5 py-0.5 font-mono text-[0.5625rem] text-signal">
          Stage 3 / 4
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {permitRows.map((row) => (
          <div
            key={row.role}
            className={`${panel} flex items-center gap-3 px-3 py-2.5`}
          >
            <span
              className={
                "grid h-4 w-4 shrink-0 place-items-center rounded-full border " +
                (row.state === "done"
                  ? "border-accent/40 bg-accent-soft"
                  : row.state === "active"
                    ? "border-signal/50 bg-signal/15"
                    : "border-line bg-surface")
              }
            >
              {row.state === "done" ? (
                <Check className="h-2 w-2 text-accent" strokeWidth={3.5} />
              ) : row.state === "active" ? (
                <span className="h-1 w-1 rounded-full bg-signal" />
              ) : null}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-mono text-[0.5625rem] text-fg">
                {row.role}
              </p>
              <p className="truncate font-mono text-[0.5rem] text-faint">
                {row.name}
              </p>
            </div>
            <span className="h-1 w-8 shrink-0 rounded-full bg-fg/10" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------ pos --------------------------------- */

const terminals = [
  { id: "TRM-01", w: 78 },
  { id: "TRM-02", w: 54 },
  { id: "TRM-03", w: 91 },
  { id: "TRM-04", w: 37 },
];

function PosVisual() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className={`${panel} p-3.5`}>
        <div className="flex items-baseline justify-between">
          <span className={label}>Client · terminals</span>
          <span className="font-mono text-[0.5625rem] text-subtle">
            reconciled
          </span>
        </div>
        <div className="mt-3 space-y-2.5">
          {terminals.map((t) => (
            <div key={t.id} className="flex items-center gap-3">
              <span className="w-12 shrink-0 font-mono text-[0.5rem] text-faint">
                {t.id}
              </span>
              <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-fg/[0.06]">
                <span
                  style={{ width: `${t.w}%` }}
                  className="block h-full rounded-full bg-linear-to-r from-accent/50 to-accent/80"
                />
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className={`${panel} flex flex-col justify-between p-3`}>
          <span className="font-mono text-[0.5rem] uppercase tracking-wider text-faint">
            Expense summary
          </span>
          <div className="space-y-1.5">
            <span className="block h-1.5 w-full rounded-full bg-fg/15" />
            <span className="block h-1.5 w-3/5 rounded-full bg-fg/[0.08]" />
          </div>
        </div>
        <div className={`${panel} flex flex-col justify-between p-3`}>
          <span className="font-mono text-[0.5rem] uppercase tracking-wider text-faint">
            Export
          </span>
          <span className="inline-flex w-fit rounded border border-line bg-surface px-1.5 py-0.5 font-mono text-[0.5rem] text-subtle">
            .csv
          </span>
        </div>
      </div>
    </div>
  );
}

/* --------------------------------- commerce ------------------------------- */

const skus = [
  { sku: "SKU-1043", stock: 82, state: "ok" },
  { sku: "SKU-2210", stock: 41, state: "ok" },
  { sku: "SKU-3187", stock: 12, state: "low" },
  { sku: "SKU-4402", stock: 67, state: "ok" },
] as const;

function CommerceVisual() {
  return (
    <div className="flex h-full flex-col gap-3">
      <div className="flex items-center gap-2">
        {["Inventory", "Orders", "Shipments"].map((tab, i) => (
          <span
            key={tab}
            className={
              "rounded-md border px-2 py-1 font-mono text-[0.5625rem] " +
              (i === 0
                ? "border-line-hi bg-surface-hi text-fg"
                : "border-transparent text-faint")
            }
          >
            {tab}
          </span>
        ))}
      </div>

      <div className={`${panel} flex-1 divide-y divide-line overflow-hidden`}>
        {skus.map((row) => (
          <div key={row.sku} className="flex items-center gap-3 px-3 py-2.5">
            <span className="w-16 shrink-0 font-mono text-[0.5rem] text-subtle">
              {row.sku}
            </span>
            <span className="h-1 flex-1 overflow-hidden rounded-full bg-fg/[0.06]">
              <span
                style={{ width: `${row.stock}%` }}
                className={
                  "block h-full rounded-full " +
                  (row.state === "low" ? "bg-signal/70" : "bg-fg/25")
                }
              />
            </span>
            <span
              className={
                "w-8 shrink-0 text-right font-mono text-[0.5rem] " +
                (row.state === "low" ? "text-signal" : "text-faint")
              }
            >
              {row.stock}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="rounded border border-line bg-surface/60 px-1.5 py-0.5 font-mono text-[0.5rem] text-subtle">
          JWT
        </span>
        <span className="rounded border border-line bg-surface/60 px-1.5 py-0.5 font-mono text-[0.5rem] text-subtle">
          Google OAuth
        </span>
      </div>
    </div>
  );
}
