import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { DEFAULT_APP_DISPLAY_NAME, MONA_LOGO_PUBLIC_PATH } from "@/lib/branding";

const LANDING_ROUTE = "/" as Route;

/** Logo et titre MonaChat (pages login / signup) — logo cliquable vers la landing. */
export default function MonaChatAuthBranding() {
  return (
    <div className="flex w-full flex-col items-center gap-2 mb-1">
      <Link
        href={LANDING_ROUTE}
        className="outline-none transition-opacity hover:opacity-90 focus-visible:ring-2 focus-visible:ring-theme-primary-05 focus-visible:ring-offset-2 rounded-md"
        aria-label={`${DEFAULT_APP_DISPLAY_NAME} — retour à l’accueil`}
      >
        <Image
          src={MONA_LOGO_PUBLIC_PATH}
          alt=""
          width={200}
          height={80}
          className="h-16 sm:h-20 w-auto max-w-[min(280px,85vw)] object-contain object-center"
          priority
        />
      </Link>
      <p className="text-center text-text-05 font-semibold text-lg tracking-tight">
        {DEFAULT_APP_DISPLAY_NAME}
      </p>
    </div>
  );
}
