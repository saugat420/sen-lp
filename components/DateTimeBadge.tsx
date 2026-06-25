import { workshop } from "@/lib/workshop";

export function DateTimeBadge({ confirmation = false, compact = false }: { confirmation?: boolean; compact?: boolean }) {
  const label = confirmation ? "Workshop" : "Live Workshop";

  return (
    <div className={`font-outfit inline-flex max-w-full items-center justify-center gap-2 rounded-2xl border-2 border-[#1149a6] bg-white text-center font-bold text-black shadow-[0_12px_26px_-16px_rgba(17,73,166,0.75)] ${compact ? "px-4 py-2.5 text-sm sm:px-5 sm:text-base" : "px-3.5 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base"}`}>
      <span className={`flex shrink-0 items-center justify-center rounded-xl bg-[#1149a6] text-white ${compact ? "h-6 w-6" : "h-7 w-7"}`} aria-hidden="true">
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.4]"><path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" /><path d="m9 14 2 2 4-4" /></svg>
      </span>
      <span><span className="text-[#ef2029]">{label}:</span> {workshop.date} at {workshop.time}</span>
    </div>
  );
}
