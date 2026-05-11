"use client";

import Image from "next/image";
import { useSettingsContext } from "@/providers/SettingsProvider";
import { DEFAULT_LOGO_SIZE_PX } from "@/lib/constants";
import {
  DEFAULT_APP_DISPLAY_NAME,
  MONA_LOGO_PUBLIC_PATH,
  sanitizeAppDisplayName,
} from "@/lib/branding";
import { cn } from "@opal/utils";
import Truncated from "@/refresh-components/texts/Truncated";
import { useMemo } from "react";

export interface LogoProps {
  folded?: boolean;
  size?: number;
  className?: string;
}

function MonaLogoMark({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <Image
      src={MONA_LOGO_PUBLIC_PATH}
      alt={DEFAULT_APP_DISPLAY_NAME}
      width={180}
      height={72}
      className={cn(
        "object-contain object-left flex-shrink-0 w-auto",
        className
      )}
      style={{ height: size, width: "auto", maxWidth: "min(200px, 70vw)" }}
      priority
    />
  );
}

export default function Logo({ folded, size, className }: LogoProps) {
  const resolvedSize = size ?? DEFAULT_LOGO_SIZE_PX;
  const settings = useSettingsContext();
  const logoDisplayStyle = settings.enterpriseSettings?.logo_display_style;
  const rawApplicationName = settings.enterpriseSettings?.application_name?.trim();
  const applicationDisplayName =
    sanitizeAppDisplayName(rawApplicationName) || DEFAULT_APP_DISPLAY_NAME;

  const logoBuster = useMemo(
    () => Date.now(),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [settings.enterpriseSettings]
  );

  const logo = settings.enterpriseSettings?.use_custom_logo ? (
    <div
      className={cn(
        "aspect-square rounded-full overflow-hidden relative flex-shrink-0",
        className
      )}
      style={{ height: resolvedSize }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        alt={applicationDisplayName}
        src={`/api/enterprise-settings/logo?v=${logoBuster}`}
        className="object-cover object-center w-full h-full"
      />
    </div>
  ) : (
    <MonaLogoMark size={resolvedSize} className={className} />
  );

  const renderNameAndPoweredBy = (opts: {
    includeLogo: boolean;
    includeName: boolean;
  }) => {
    return (
      <div className="flex min-w-0 gap-2">
        {opts.includeLogo && logo}
        {!folded && (
          <div className="flex flex-1 flex-col -mt-0.5">
            {opts.includeName && (
              <Truncated headingH3>{applicationDisplayName}</Truncated>
            )}
          </div>
        )}
      </div>
    );
  };

  if (logoDisplayStyle === "logo_only") {
    return renderNameAndPoweredBy({ includeLogo: true, includeName: false });
  }

  if (logoDisplayStyle === "name_only") {
    return renderNameAndPoweredBy({ includeLogo: false, includeName: true });
  }

  return renderNameAndPoweredBy({ includeLogo: true, includeName: true });
}
