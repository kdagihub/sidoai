"use client";

import React, { useContext } from "react";
import { SettingsContext } from "@/providers/SettingsProvider";
import {
  DEFAULT_APP_DISPLAY_NAME,
  sanitizeAppDisplayName,
} from "@/lib/branding";
import Text from "@/refresh-components/texts/Text";

export default function LoginText() {
  const settings = useContext(SettingsContext);
  const appName =
    sanitizeAppDisplayName(
      settings?.enterpriseSettings?.application_name?.trim()
    ) || DEFAULT_APP_DISPLAY_NAME;
  return (
    <div className="w-full flex flex-col ">
      <Text as="p" headingH2 text05>
        Bienvenue sur {appName}
      </Text>
      <Text as="p" text03 mainUiMuted>
        Plateforme d&apos;intelligence artificielle pour votre activité.
      </Text>
    </div>
  );
}
