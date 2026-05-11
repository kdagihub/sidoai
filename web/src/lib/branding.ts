/** Nom affiché par défaut si l’admin EE ne définit pas `application_name`. */
export const DEFAULT_APP_DISPLAY_NAME = "MonaChat";

/** Logo Mona (fond transparent) servi depuis `web/public/`. */
export const MONA_LOGO_PUBLIC_PATH = "/logo_mona_sf.png";

/** Version affichée dans le pied de page si `webVersion` est absent. */
export const DEFAULT_APP_VERSION_LABEL = "0.0.0";

/** Ligne de crédit sous le pied de page (chat / NRF). */
export const APP_FOOTER_CREDIT = "Développé par CIACEMS";

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
