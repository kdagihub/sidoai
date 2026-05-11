import Image from "next/image";

/**
 * Logos SIDO AI × Monachat et mention partenariat (page login / signup).
 */
export default function SidoAuthBranding() {
  return (
    <div className="flex w-full flex-col items-center gap-3 mb-1">
      <div className="flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-10">
        <Image
          src="/logo_sido.png"
          alt="SIDO AI"
          width={160}
          height={64}
          className="h-14 sm:h-16 w-auto max-w-[46%] object-contain object-center dark:hidden"
          priority
        />
        <Image
          src="/logo_sido_sf.png"
          alt="SIDO AI"
          width={160}
          height={64}
          className="hidden dark:block h-14 sm:h-16 w-auto max-w-[46%] object-contain object-center"
          priority
        />
        <span
          className="select-none text-theme-primary-05 opacity-40 text-xl font-light"
          aria-hidden
        >
          ×
        </span>
        <Image
          src="/mona1.png"
          alt="Monachat"
          width={140}
          height={64}
          className="h-14 sm:h-16 w-auto max-w-[46%] object-contain object-center"
          priority
        />
      </div>
      <p className="text-center text-text-03 text-sm leading-snug max-w-md px-1">
        SIDO AI est une technologie associée à{" "}
        <span className="text-text-05 font-medium">Monachat</span>.
      </p>
    </div>
  );
}
