import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@opal/components";
import {
  APP_FOOTER_CREDIT,
  DEFAULT_APP_DISPLAY_NAME,
  MONA_LOGO_PUBLIC_PATH,
} from "@/lib/branding";

export const metadata: Metadata = {
  title: `${DEFAULT_APP_DISPLAY_NAME} — Plateforme d’IA conversationnelle`,
  description:
    "MonaChat : une plateforme d’intelligence artificielle pour équiper vos équipes — chat, agents, recherche et intégrations, avec Mona comme assistante.",
};

const features = [
  {
    title: "Une assistante, un ton de marque",
    body: "Mona incarne MonaChat dans chaque échange : réponses claires, utiles et alignées sur votre organisation.",
  },
  {
    title: "Agents & savoir-faire métier",
    body: "Créez des agents dédiés, reliez vos sources et outils, et gardez le contrôle sur ce que l’IA peut faire pour vous.",
  },
  {
    title: "Hébergement maîtrisé",
    body: "Une stack pensée pour le self-host et la confidentialité : vos données, vos règles, votre déploiement.",
  },
] as const;

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-text">
      <header className="border-b border-border-01 bg-background-tint-00/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link
            href="/landing"
            className="flex items-center gap-2 min-w-0"
            aria-label={DEFAULT_APP_DISPLAY_NAME}
          >
            <Image
              src={MONA_LOGO_PUBLIC_PATH}
              alt=""
              width={40}
              height={40}
              className="h-9 w-auto object-contain shrink-0"
              priority
            />
            <span className="font-semibold text-lg text-text-05 tracking-tight truncate">
              {DEFAULT_APP_DISPLAY_NAME}
            </span>
          </Link>
          <nav className="flex items-center gap-2 sm:gap-3">
            <Button href="/auth/login" prominence="tertiary" size="md">
              Se connecter
            </Button>
            <Button href="/auth/signup" prominence="primary" size="md">
              Essayer gratuitement
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border-01">
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            aria-hidden
            style={{
              background:
                "radial-gradient(ellipse 80% 55% at 50% -20%, var(--theme-primary-04), transparent 55%), radial-gradient(ellipse 60% 40% at 100% 50%, color-mix(in srgb, var(--theme-primary-05) 25%, transparent), transparent 50%)",
            }}
          />
          <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-wider text-theme-primary-05 mb-3">
                Vision produit
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-05 leading-tight tracking-tight">
                L’IA conversationnelle au service de vos équipes
              </h1>
              <p className="mt-5 text-lg sm:text-xl text-text-03 leading-relaxed">
                {DEFAULT_APP_DISPLAY_NAME} rassemble chat, agents et accès au
                savoir de l’entreprise. Mona vous accompagne au quotidien —
                rédaction, analyse, idées et exécution — dans une expérience
                unique, pensée pour la productivité et la confiance.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center">
                <div className="sm:min-w-[12rem]">
                  <Button href="/auth/signup" prominence="primary" size="lg">
                    Essayer gratuitement
                  </Button>
                </div>
                <div className="sm:min-w-[12rem]">
                  <Button href="/auth/login" prominence="secondary" size="lg">
                    J’ai déjà un compte
                  </Button>
                </div>
              </div>
              <p className="mt-6 text-sm text-text-03">
                Aucune carte bancaire requise pour démarrer — créez un compte et
                explorez la plateforme.
              </p>
            </div>

            {/* Zone réservée à une visuelle marketing (voir liste d’assets recommandés côté équipe design). */}
            <div
              className="mt-14 lg:mt-0 lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 lg:w-[min(42%,28rem)] xl:right-12"
              aria-hidden
            >
              <div className="aspect-[4/3] rounded-2xl border border-border-01 bg-background-tint-00 shadow-lg shadow-02 overflow-hidden flex items-center justify-center p-6">
                <div className="text-center space-y-3">
                  <Image
                    src={MONA_LOGO_PUBLIC_PATH}
                    alt=""
                    width={120}
                    height={120}
                    className="mx-auto h-24 w-auto object-contain opacity-90"
                  />
                  <p className="text-xs text-text-03 leading-snug max-w-[14rem] mx-auto">
                    Emplacement pour capture d’écran ou illustration produit (
                    <code className="text-[0.7rem] bg-background-tint-01 px-1 rounded">
                      public/landing/hero-app.png
                    </code>
                    ).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-05 text-center max-w-2xl mx-auto">
            Pourquoi {DEFAULT_APP_DISPLAY_NAME} ?
          </h2>
          <p className="mt-3 text-center text-text-03 max-w-2xl mx-auto">
            Une vision simple : offrir une couche d’IA fiable et actionnable,
            sans sacrifier la lisibilité ni le contrôle pour vos utilisateurs.
          </p>
          <ul className="mt-12 grid gap-6 sm:grid-cols-3">
            {features.map((f) => (
              <li
                key={f.title}
                className="rounded-2xl border border-border-01 bg-background-tint-00 p-6 shadow-sm"
              >
                <h3 className="font-semibold text-text-05 text-lg">{f.title}</h3>
                <p className="mt-2 text-text-03 text-sm leading-relaxed">{f.body}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-border-01 bg-background-tint-00">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
            <div>
              <h2 className="text-xl font-semibold text-text-05">
                Prêt à lancer une conversation ?
              </h2>
              <p className="mt-2 text-text-03 max-w-xl">
                Rejoignez votre espace {DEFAULT_APP_DISPLAY_NAME}, configurez vos
                modèles et laissez Mona vous faire gagner du temps.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button href="/auth/signup" prominence="primary" size="lg">
                Essayer gratuitement
              </Button>
              <Button href="/auth/login" prominence="secondary" size="lg">
                Se connecter
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border-01 py-6 text-center text-sm text-text-03">
        <p>
          {DEFAULT_APP_DISPLAY_NAME} — {APP_FOOTER_CREDIT}
        </p>
        <p className="mt-1">
          <Link
            href="/auth/login"
            className="text-theme-primary-05 underline underline-offset-2 hover:text-theme-primary-04"
          >
            Connexion
          </Link>
          <span className="mx-2 text-border-02">·</span>
          <Link
            href="/auth/signup"
            className="text-theme-primary-05 underline underline-offset-2 hover:text-theme-primary-04"
          >
            Inscription
          </Link>
        </p>
      </footer>
    </div>
  );
}
