import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { getCurrentUserSS } from "@/lib/userSS";
import LandingView from "@/app/landing/LandingView";
import LandingFontsWrapper from "@/app/landing/LandingFontsWrapper";
import { landingMetadata } from "@/app/landing/landingMetadata";

export const metadata: Metadata = landingMetadata;

/**
 * Alias `/landing` : mêmes contenus que `/` pour les visiteurs.
 * Les utilisateurs connectés sont renvoyés vers l’app (cohérent avec la racine).
 */
export default async function LandingPage() {
  try {
    const user = await getCurrentUserSS();
    if (user?.is_active && !user.is_anonymous_user) {
      redirect("/app");
    }
  } catch {
    // idem page d’accueil
  }
  return (
    <LandingFontsWrapper>
      <LandingView homeHref="/" />
    </LandingFontsWrapper>
  );
}
