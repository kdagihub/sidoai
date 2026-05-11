import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { getCurrentUserSS } from "@/lib/userSS";
import LandingView from "@/app/landing/LandingView";
import LandingFontsWrapper from "@/app/landing/LandingFontsWrapper";
import { landingMetadata } from "@/app/landing/landingMetadata";

export const metadata: Metadata = landingMetadata;

export default async function Page() {
  try {
    const user = await getCurrentUserSS();
    if (user?.is_active && !user.is_anonymous_user) {
      redirect("/app");
    }
  } catch {
    // Backend indisponible : afficher la landing (pas de redirect vers /landing).
  }
  return (
    <LandingFontsWrapper>
      <LandingView homeHref="/" />
    </LandingFontsWrapper>
  );
}
