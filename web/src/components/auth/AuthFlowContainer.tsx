import Link from "next/link";
import MonaChatAuthBranding from "@/components/auth/MonaChatAuthBranding";

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
