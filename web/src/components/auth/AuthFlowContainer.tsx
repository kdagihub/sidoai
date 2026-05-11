import type { Route } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MonaChatAuthBranding from "@/components/auth/MonaChatAuthBranding";

const LANDING_ROUTE = "/" as Route;

export default function AuthFlowContainer({
  children,
  authState,
  footerContent,
}: {
  children: React.ReactNode;
  authState?: "signup" | "login" | "join";
  footerContent?: React.ReactNode;
}) {
  return (
    <div className="p-4 flex flex-col items-center justify-center min-h-screen bg-[linear-gradient(180deg,var(--grey-00)_0%,var(--mona-brand-surface)_55%,var(--grey-02)_100%)]">
      {authState === "login" && (
        <div className="mb-3 w-full max-w-md">
          <Link
            href={LANDING_ROUTE}
            className="inline-flex items-center gap-2 rounded-lg px-1 py-1.5 text-sm font-medium text-text-03 transition-colors hover:text-text-05 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-theme-primary-05 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Retour à l’accueil
          </Link>
        </div>
      )}
      <div className="w-full max-w-md flex items-start flex-col bg-background-tint-00 rounded-16 shadow-lg shadow-02 p-6 border border-[color-mix(in_srgb,var(--mona-brand-05)_12%,transparent)]">
        <MonaChatAuthBranding />
        <div className="w-full mt-3">{children}</div>
      </div>
      {authState === "login" && (
        <div className="text-sm mt-6 text-center w-full text-text-03 mainUiBody mx-auto">
          {footerContent ?? (
            <>
              Nouveau sur MonaChat ?{" "}
              <Link
                href="/auth/signup"
                className="text-theme-primary-05 mainUiAction underline underline-offset-2 transition-colors duration-200 hover:text-theme-primary-04"
              >
                Créer un compte
              </Link>
            </>
          )}
        </div>
      )}
      {authState === "signup" && (
        <div className="text-sm mt-6 text-center w-full text-text-03 mainUiBody mx-auto">
          Déjà un compte ?{" "}
          <Link
            href="/auth/login?autoRedirectToSignup=false"
            className="text-theme-primary-05 mainUiAction underline underline-offset-2 transition-colors duration-200 hover:text-theme-primary-04"
          >
            Se connecter
          </Link>
        </div>
      )}
    </div>
  );
}
