"use client";

import Image from "next/image";
import { useSettingsContext } from "@/providers/SettingsProvider";
import {
  DEFAULT_LOGO_SIZE_PX,
  NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED,
} from "@/lib/constants";
import { cn } from "@opal/utils";
import Text from "@/refresh-components/texts/Text";
import Truncated from "@/refresh-components/texts/Truncated";
import { useMemo } from "react";

/** Nom affiché par défaut si l’admin EE ne définit pas `application_name`. */
export const DEFAULT_SIDO_APP_DISPLAY_NAME = "SIDO AI";

export interface LogoProps {
  folded?: boolean;
  size?: number;
  className?: string;
}

function SidoLogoMark({
  size,
  className,
}: {
  size: number;
  className?: string;
}) {
  return (
    <>
      <Image
        src="/logo_sido.png"
        alt={DEFAULT_SIDO_APP_DISPLAY_NAME}
        width={180}
        height={72}
        className={cn(
          "object-contain object-left flex-shrink-0 w-auto dark:hidden",
          className
        )}
        style={{ height: size, width: "auto", maxWidth: "min(200px, 70vw)" }}
        priority
      />
      <Image
        src="/logo_sido_sf.png"
        alt={DEFAULT_SIDO_APP_DISPLAY_NAME}
        width={180}
        height={72}
        className={cn(
          "hidden dark:block object-contain object-left flex-shrink-0 w-auto",
          className
        )}
        style={{ height: size, width: "auto", maxWidth: "min(200px, 70vw)" }}
        priority
      />
    </>
  );
}

export default function Logo({ folded, size, className }: LogoProps) {
  const resolvedSize = size ?? DEFAULT_LOGO_SIZE_PX;
  const settings = useSettingsContext();
  const logoDisplayStyle = settings.enterpriseSettings?.logo_display_style;
  const rawApplicationName = settings.enterpriseSettings?.application_name?.trim();
  const applicationDisplayName =
    rawApplicationName || DEFAULT_SIDO_APP_DISPLAY_NAME;

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
    <SidoLogoMark size={resolvedSize} className={className} />
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
            {!NEXT_PUBLIC_DO_NOT_USE_TOGGLE_OFF_DANSWER_POWERED && (
              <Text
                secondaryBody
                text03
                className={"line-clamp-1 truncate"}
                nowrap
              >
                Technologie au service de Monachat
              </Text>
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
