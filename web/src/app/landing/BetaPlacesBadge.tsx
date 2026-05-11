"use client";

/** Compteur illustratif pour la beta (non connecté à une API — valeur marketing). */
export default function BetaPlacesBadge() {
  const remaining = 28;
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#FFD700]/80 bg-[#0a2d1e]/90 px-4 py-2 text-sm text-white shadow-md">
      <span
        className="h-2 w-2 animate-pulse rounded-full bg-[#1FA43F]"
        aria-hidden
      />
      <span>
        <strong className="font-semibold text-[#FFD700]">{remaining}</strong>{" "}
        places « pionniers » restantes sur{" "}
        <strong className="text-white">100</strong>
      </span>
    </div>
  );
}
