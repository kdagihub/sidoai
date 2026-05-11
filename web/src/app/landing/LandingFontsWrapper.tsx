import { Libre_Baskerville, Lora, Open_Sans } from "next/font/google";

/**
 * Polices landing : Open Sans (corps), Libre Baskerville (titres — proche Copernicus si pas de fichiers locaux), Lora light (accents type Tiempos).
 * Pour Copernicus / Tiempos officiels : ajouter les .woff2 dans `public/fonts/` et @font-face dans globals.css.
 */
const landingSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-landing-body",
  display: "swap",
});

const landingHeadline = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-landing-headline",
  display: "swap",
});

const landingAccent = Lora({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-landing-accent",
  display: "swap",
});

export default function LandingFontsWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${landingSans.className} ${landingSans.variable} ${landingHeadline.variable} ${landingAccent.variable} min-h-screen`}
    >
      {children}
    </div>
  );
}

/** Classes utilitaires (Tailwind arbitrary) — headline serif */
export const landingFontClasses = {
  headline: `${landingHeadline.className}`,
  accent: `${landingAccent.className}`,
  body: `${landingSans.className}`,
};
