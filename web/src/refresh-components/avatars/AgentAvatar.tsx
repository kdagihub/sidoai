"use client";

import { MinimalPersonaSnapshot } from "@/app/admin/agents/interfaces";
import { buildAgentAvatarUrl } from "@/app/app/components/files/images/utils";
import { useSettingsContext } from "@/providers/SettingsProvider";
import { DEFAULT_AVATAR_SIZE_PX, DEFAULT_AGENT_ID } from "@/lib/constants";
import {
  DEFAULT_APP_DISPLAY_NAME,
  MONA_LOGO_PUBLIC_PATH,
} from "@/lib/branding";
import CustomAgentAvatar from "@/refresh-components/avatars/CustomAgentAvatar";
import Image from "next/image";

export interface AgentAvatarProps {
  agent: MinimalPersonaSnapshot;
  size?: number;
}

export default function AgentAvatar({
  agent,
  size = DEFAULT_AVATAR_SIZE_PX,
  ...props
}: AgentAvatarProps) {
  const settings = useSettingsContext();

  if (agent.id === DEFAULT_AGENT_ID) {
    if (settings.enterpriseSettings?.use_custom_logo) {
      return (
        <div
          className="aspect-square rounded-full overflow-hidden relative"
          style={{ height: size, width: size }}
        >
          <Image
            alt="Logo"
            src="/api/enterprise-settings/logo"
            fill
            className="object-cover object-center"
            sizes={`${size}px`}
          />
        </div>
      );
    }
    return (
      <div
        className="relative flex shrink-0 items-center justify-start"
        style={{ height: size, width: Math.max(size, Math.round(size * 1.35)) }}
      >
        <Image
          src={MONA_LOGO_PUBLIC_PATH}
          alt={DEFAULT_APP_DISPLAY_NAME}
          width={120}
          height={48}
          className="object-contain object-left h-full w-auto max-h-full"
          sizes={`${size}px`}
        />
      </div>
    );
  }

  return (
    <CustomAgentAvatar
      name={agent.name}
      src={agent.uploaded_image_id ? buildAgentAvatarUrl(agent.id) : undefined}
      iconName={agent.icon_name}
      size={size}
      {...props}
    />
  );
}
