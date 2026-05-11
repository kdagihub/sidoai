import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Shield, Sparkles } from "lucide-react";
import { Button } from "@opal/components";
import {
  APP_FOOTER_CREDIT,
  CIACEMS_EMAIL,
  CIACEMS_PHONES,
  CIACEMS_SITE_URL,
  DEFAULT_APP_DISPLAY_NAME,
  MONAJENT_CONTACT_EMAIL,
  MONA_LOGO_PUBLIC_PATH,
} from "@/lib/branding";
import { landingFontClasses } from "@/app/landing/LandingFontsWrapper";
import BetaPlacesBadge from "@/app/landing/BetaPlacesBadge";

const EMERALD = "#1FA43F";
const IVORY_DEEP = "#0a2d1e";
const GOLD = "#FFD700";
const BODY_TEXT = "#222222";
const ACCENT_TEXT = "#282F38";

export interface LandingViewProps {
  /** Route typée (Next.js App Router) */
  homeHref?: Route;
}

export default function LandingView({ homeHref = "/" as Route }: LandingViewProps) {
  return (
    <div
      className="min-h-screen flex flex-col bg-white antialiased scroll-smooth"
      style={{ color: BODY_TEXT }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-20 border-b border-black/5 backdrop-blur-md"
        style={{ backgroundColor: "rgba(255,255,255,0.92)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href={homeHref}
            className="flex items-center gap-2 min-w-0 shrink-0"
            aria-label={DEFAULT_APP_DISPLAY_NAME}
          >
            <Image
              src={MONA_LOGO_PUBLIC_PATH}
              alt=""
              width={44}
              height={44}
              className="h-10 w-auto object-contain shrink-0"
              priority
            />
            <span
              className={`${landingFontClasses.headline} font-bold text-lg tracking-tight sm:text-xl`}
              style={{ color: IVORY_DEEP }}
            >
              {DEFAULT_APP_DISPLAY_NAME}
            </span>
          </Link>
          <nav className="flex flex-1 flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium sm:gap-6">
            <a
              href="#sagesse"
              className="transition-colors hover:opacity-80"
              style={{ color: ACCENT_TEXT }}
            >
              Fonctionnalités
            </a>
            <a
              href="#pourquoi"
              className="hidden sm:inline transition-colors hover:opacity-80"
              style={{ color: ACCENT_TEXT }}
            >
              Pourquoi nous
            </a>
            <a
              href="#beta"
              className="hidden md:inline transition-colors hover:opacity-80"
              style={{ color: ACCENT_TEXT }}
            >
              Beta
            </a>
            <a
              href="#tarifs"
              className="transition-colors hover:opacity-80"
              style={{ color: ACCENT_TEXT }}
            >
              Tarifs
            </a>
            <Link
              href="/auth/login"
              className="transition-colors hover:opacity-80"
              style={{ color: ACCENT_TEXT }}
            >
              Connexion
            </Link>
            <Button href="/auth/signup" prominence="primary" size="md">
              Essayer gratuitement
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero — grille responsive, plus de chevauchement */}
        <section
          className="relative overflow-hidden border-b border-black/5"
          style={{
            background: `linear-gradient(165deg, #ffffff 0%, #f4fbf7 45%, #e8f5ee 100%)`,
          }}
        >
          <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:flex lg:items-center lg:gap-12 lg:py-20 xl:gap-16 xl:px-8">
            <div className="min-w-0 flex-1 lg:max-w-[52%] xl:max-w-[50%]">
              <p
                className={`mt-5 text-xs font-semibold uppercase tracking-[0.2em] sm:text-sm`}
                style={{ color: EMERALD }}
              >
                IA conversationnelle souveraine
              </p>
              <h1
                className={`${landingFontClasses.headline} mt-3 text-[clamp(1.75rem,4vw,3.25rem)] font-normal leading-[1.15] sm:leading-tight`}
                style={{ color: BODY_TEXT }}
              >
                MonaChat : l’IA conversationnelle au service de vos équipes,
                fièrement ancrée en Côte d’Ivoire.
              </h1>
              <p
                className={`${landingFontClasses.accent} mt-5 text-[17px] font-light leading-7 sm:text-[18px] sm:leading-8`}
                style={{ color: ACCENT_TEXT }}
              >
                Une stack maîtrisée, une confiance renforcée, un budget accessible.
                Le moteur de votre productivité, avec une intelligence déployée sur
                une infrastructure que vous contrôlez.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                <Button href="/auth/signup" prominence="primary" size="lg">
                  Rejoindre la beta — soyez parmi les 100 pionniers
                </Button>
                <Button href="/auth/login" prominence="secondary" size="lg">
                  J’ai déjà un compte
                </Button>
              </div>
              <p className="mt-6 text-sm leading-relaxed" style={{ color: ACCENT_TEXT }}>
                Aucune carte bancaire pour démarrer — créez un compte et explorez la
                plateforme.
              </p>
            </div>

            <div className="relative mx-auto mt-12 w-full max-w-lg shrink-0 lg:mt-0 lg:mx-0 lg:max-w-[min(44vw,28rem)] xl:max-w-[32rem]">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-2xl ring-1 ring-black/10"
                style={{
                  boxShadow: `0 25px 50px -12px rgba(10, 45, 30, 0.35), 0 0 0 1px rgba(255,215,0,0.15)`,
                }}
              >
                <Image
                  src="/heroe.png"
                  alt="MonaChat — figurine masque et tech, symbole de l’IA souveraine"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, min(32rem, 44vw)"
                  priority
                />
              </div>
              <p
                className={`${landingFontClasses.accent} mt-4 text-center text-[13px] font-light italic leading-snug lg:text-left`}
                style={{ color: ACCENT_TEXT }}
              >
                Souveraineté numérique & excellence locale — MonaChat.
              </p>
            </div>
          </div>
        </section>

        {/* La Sagesse locale */}
        <section
          id="sagesse"
          className="scroll-mt-24 border-b border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              className={`${landingFontClasses.headline} text-center text-[clamp(1.5rem,3vw,2.25rem)] font-normal`}
              style={{ color: IVORY_DEEP }}
            >
              Une intelligence qui respecte nos cultures
            </h2>
            <p
              className={`${landingFontClasses.accent} mx-auto mt-4 max-w-3xl text-center text-[17px] font-light leading-7 sm:text-[18px] sm:leading-8`}
              style={{ color: ACCENT_TEXT }}
            >
              MonaChat comprend le contexte ivoirien, nos langues et nos enjeux —
              avec une infrastructure que vous hébergez ou maîtrisez, sans dépendre
              de serveurs opaques à l’étranger pour vos données sensibles.
            </p>
            <p
              className="mx-auto mt-6 max-w-3xl text-center text-[15px] leading-7 sm:text-base sm:leading-8"
              style={{ color: ACCENT_TEXT }}
            >
              La plateforme réunit ce qu’il faut pour travailler avec l’IA au quotidien
              :{" "}
              <strong className="font-medium" style={{ color: IVORY_DEEP }}>
                agents
              </strong>{" "}
              conversationnels dédiés,{" "}
              <strong className="font-medium" style={{ color: IVORY_DEEP }}>
                recherche augmentée (RAG)
              </strong>{" "}
              sur vos sources,{" "}
              <strong className="font-medium" style={{ color: IVORY_DEEP }}>
                gestion de documents et d’images
              </strong>
              , espaces{" "}
              <strong className="font-medium" style={{ color: IVORY_DEEP }}>
                projet
              </strong>{" "}
              et orchestration — dans une expérience unique, pensée pour les équipes.
            </p>
            <ul className="mt-12 grid gap-8 sm:grid-cols-3">
              {(
                [
                  {
                    Icon: MapPin,
                    title: "Contexte local",
                    text: "Une IA pensée pour les équipes et les usages sur le terrain.",
                  },
                  {
                    Icon: Shield,
                    title: "Sécurité & confidentialité",
                    text: "Contrôle d’accès, traçabilité et protection de vos contenus et échanges sensibles.",
                  },
                  {
                    Icon: Sparkles,
                    title: "Identité",
                    text: "Mona incarne votre assistant avec cohérence et fiabilité.",
                  },
                ] as const
              ).map(({ Icon, title, text }) => (
                <li
                  key={title}
                  className="flex flex-col items-center rounded-2xl border border-black/5 bg-[#fafdfb] px-6 py-8 text-center shadow-sm"
                >
                  <div
                    className="flex h-14 w-14 items-center justify-center rounded-xl border border-black/[0.06] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    aria-hidden
                  >
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={1.65}
                      style={{ color: EMERALD }}
                    />
                  </div>
                  <h3
                    className={`${landingFontClasses.headline} mt-4 text-lg font-semibold`}
                    style={{ color: IVORY_DEEP }}
                  >
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: ACCENT_TEXT }}>
                    {text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Pourquoi nous — 3 cartes */}
        <section
          id="pourquoi"
          className="scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8"
          style={{
            background: `linear-gradient(180deg, #f8faf9 0%, #ffffff 100%)`,
          }}
        >
          <div className="mx-auto max-w-7xl">
            <h2
              className={`${landingFontClasses.headline} text-center text-[clamp(1.5rem,3vw,2.25rem)] font-normal`}
              style={{ color: IVORY_DEEP }}
            >
              Pourquoi MonaChat ?
            </h2>
            <p
              className="mx-auto mt-3 max-w-2xl text-center text-base leading-relaxed"
              style={{ color: ACCENT_TEXT }}
            >
              Trois raisons de rejoindre la beta et d’investir dans une IA maîtrisée.
            </p>
            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              {[
                {
                  kicker: "Confiance",
                  title: "Données maîtrisées",
                  body: "Hébergement et stack sous contrôle — CIACEMS vous accompagne pour une architecture alignée avec vos exigences.",
                  accent: EMERALD,
                },
                {
                  kicker: "Budget",
                  title: "Accessible",
                  body: "Tarifs pensés pour lever les barrières : démarrez sans friction financière et faites grandir l’usage avec vos équipes.",
                  accent: GOLD,
                },
                {
                  kicker: "Performance",
                  title: "Réactivité locale",
                  body: "Moteur optimisé pour la recherche augmentée, les agents et le chat — des réponses rapides là où vous déployez votre stack.",
                  accent: EMERALD,
                },
              ].map((card) => (
                <li
                  key={card.title}
                  className="relative overflow-hidden rounded-2xl border border-black/5 bg-white p-8 shadow-md transition-shadow hover:shadow-lg"
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider"
                    style={{ color: card.accent }}
                  >
                    {card.kicker}
                  </span>
                  <h3
                    className={`${landingFontClasses.headline} mt-2 text-xl font-bold`}
                    style={{ color: IVORY_DEEP }}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed" style={{ color: ACCENT_TEXT }}>
                    {card.body}
                  </p>
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 opacity-90"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${card.accent}, transparent)`,
                    }}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Beta — urgence */}
        <section
          id="beta"
          className="scroll-mt-24 border-y border-black/5 px-4 py-16 sm:px-6 lg:px-8"
          style={{
            background: `linear-gradient(135deg, ${IVORY_DEEP} 0%, #134030 50%, #0d2818 100%)`,
          }}
        >
          <div className="mx-auto max-w-4xl text-center">
            <h2
              className={`${landingFontClasses.headline} text-[clamp(1.5rem,3vw,2.125rem)] font-normal text-white`}
            >
              Le moteur de l’avenir numérique de la CI est là.
            </h2>
            <p
              className={`${landingFontClasses.accent} mt-5 text-[17px] font-light leading-7 text-white/90 sm:text-[18px]`}
            >
              La beta MonaChat est ouverte. Les{" "}
              <strong className="font-medium text-[#FFD700]">100 premiers</strong>{" "}
              inscrits bénéficient d’un accès prioritaire pour façonner l’expérience
              et l’assistant Mona avec nous.
            </p>
            <div className="mt-8 flex flex-col items-center gap-5">
              <BetaPlacesBadge />
              <Button href="/auth/signup" prominence="primary" size="lg">
                S’inscrire à la beta maintenant
              </Button>
            </div>
          </div>
        </section>

        {/* Tarifs — ancre courte */}
        <section
          id="tarifs"
          className="scroll-mt-24 border-b border-black/5 bg-white px-4 py-12 sm:px-6 lg:px-8"
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className={`${landingFontClasses.headline} text-2xl font-normal`}
              style={{ color: IVORY_DEEP }}
            >
              Tarifs & accompagnement
            </h2>
            <p className="mt-3 text-base leading-relaxed" style={{ color: ACCENT_TEXT }}>
              Modèle accessible pour démarrer ; offres entreprise et accompagnement
              déploiement sur demande —{" "}
              <strong style={{ color: EMERALD }}>contactez CIACEMS</strong> pour une
              proposition adaptée à votre organisation.
            </p>
          </div>
        </section>

        {/* Équipe */}
        <section className="px-4 py-12 sm:px-6 lg:px-8" style={{ background: "#fafdfb" }}>
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 text-center">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: EMERALD }}>
              Équipe
            </p>
            <p
              className={`${landingFontClasses.headline} text-xl font-semibold sm:text-2xl`}
              style={{ color: IVORY_DEEP }}
            >
              Fièrement développé par CIACEMS
            </p>
            <p className="max-w-xl text-sm leading-relaxed" style={{ color: ACCENT_TEXT }}>
              MonaChat est conçu et maintenu par les équipes CIACEMS — expertise
              locale, exigence technique et vision long terme pour votre souveraineté
              numérique.
            </p>
          </div>
        </section>
      </main>

      <footer
        className="border-t border-black/10 py-10 text-center text-sm"
        style={{ background: IVORY_DEEP, color: "rgba(255,255,255,0.85)" }}
      >
        <p className="font-medium text-white">
          {DEFAULT_APP_DISPLAY_NAME} — {APP_FOOTER_CREDIT}
        </p>
        <div className="mx-auto mt-4 max-w-lg space-y-1 text-xs leading-relaxed text-white/85">
          <p>
            <span className="font-medium text-white/95">Contact CIACEMS</span>
            {" — "}
            {CIACEMS_PHONES.map((phone, i) => (
              <span key={phone.tel}>
                {i > 0 ? " · " : null}
                <a
                  href={`tel:${phone.tel}`}
                  className="underline underline-offset-2 hover:text-white"
                >
                  {phone.label}
                </a>
              </span>
            ))}
          </p>
          <p>
            <a
              href={`mailto:${CIACEMS_EMAIL}`}
              className="underline underline-offset-2 hover:text-white"
            >
              {CIACEMS_EMAIL}
            </a>
          </p>
          <p>
            <span className="font-medium text-white/95">Monajent</span>
            {" — "}
            <a
              href={`mailto:${MONAJENT_CONTACT_EMAIL}`}
              className="underline underline-offset-2 hover:text-white"
            >
              {MONAJENT_CONTACT_EMAIL}
            </a>
          </p>
        </div>
        <nav className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-2">
          <Link href="/auth/login" className="underline underline-offset-2 hover:text-white">
            Connexion
          </Link>
          <Link href="/auth/signup" className="underline underline-offset-2 hover:text-white">
            Inscription
          </Link>
          <span className="text-white/40">·</span>
          <a href="#" className="text-white/80 hover:text-white">
            Mentions légales
          </a>
          <a href="#" className="text-white/80 hover:text-white">
            Confidentialité
          </a>
        </nav>
        <p className="mt-4 text-xs text-white/75">
          <span className="font-medium text-white/90">CIACEMS</span>
          {" — "}
          <a
            href={CIACEMS_SITE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-white"
          >
            ciacems.net
          </a>
        </p>
      </footer>
    </div>
  );
}
