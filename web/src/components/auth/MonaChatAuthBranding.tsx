import Image from "next/image";
import { DEFAULT_APP_DISPLAY_NAME, MONA_LOGO_PUBLIC_PATH } from "@/lib/branding";

/** Logo et titre MonaChat (pages login / signup). */
export default function MonaChatAuthBranding() {
  return (
    <div className="flex w-full flex-col items-center gap-2 mb-1">
      <Image
        src={MONA_LOGO_PUBLIC_PATH}
        alt={DEFAULT_APP_DISPLAY_NAME}
        width={200}
        height={80}
        className="h-16 sm:h-20 w-auto max-w-[min(280px,85vw)] object-contain object-center"
        priority
      />
      <p className="text-center text-text-05 font-semibold text-lg tracking-tight">
        {DEFAULT_APP_DISPLAY_NAME}
      </p>
    </div>
  );
}
