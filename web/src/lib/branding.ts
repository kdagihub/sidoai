/** Nom affiché par défaut si l’admin EE ne définit pas `application_name`. */
export const DEFAULT_APP_DISPLAY_NAME = "MonaChat";

/** Logo Mona (fond transparent) servi depuis `web/public/`. */
export const MONA_LOGO_PUBLIC_PATH = "/logo_mona_sf.png";

/** Version affichée dans le pied de page si `webVersion` est absent. */
export const DEFAULT_APP_VERSION_LABEL = "0.0.0";

/** Ligne de crédit sous le pied de page (chat / NRF). */
export const APP_FOOTER_CREDIT = "Développé par CIACEMS";

/** Site institutionnel CIACEMS (lien externe). */
export const CIACEMS_SITE_URL = "https://ciacems.net";

/** Contact CIACEMS (landing / footer). `tel` pour les liens, `label` pour l’affichage. */
export const CIACEMS_PHONES = [
  { tel: "+2250797969394", label: "+225 07 97 96 93 94" },
  { tel: "+2250544166309", label: "+225 05 44 16 63 09" },
] as const;
export const CIACEMS_EMAIL = "itciacems@gmail.com";

/** Contact commercial / éditorial Mona (Monajent). */
export const MONAJENT_CONTACT_EMAIL = "info@monajent.com";

/**
 * Retire une accroche coréenne historique si elle est encore présente dans le nom EE (BDD / cache).
 */
export function sanitizeAppDisplayName(
  name: string | undefined | null
): string | undefined {
  if (name == null) return undefined;
  const t = String(name).trim();
  if (!t) return undefined;
  const cleaned = t
    .replace(/\s*나\s*[·⋅]\s*챗스\s*/gi, "")
    .replace(/나\s*·\s*챗스/gi, "")
    .trim();
  return cleaned.length ? cleaned : undefined;
}
