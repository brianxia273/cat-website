"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  label: string
  to: string
}

const baseButtonStyles = "cursor-pointer h-14 px-12 rounded-lg text-xl font-light transition-colors duration-200"
const baseWidthStyles = "w-auto max-w-full"

export function ButtonRed({ label, to }: ButtonProps) {
  const router = useRouter();
  return (
    <div className={baseWidthStyles}>
      <button onClick={() => router.push(to)}
        className={`bg-theme-red hover:bg-theme-dk-red text-white ${baseButtonStyles}`}>
        {label}
      </button>
    </div>
  )
}

export function ButtonWhite({ label, to }: ButtonProps) {
  const router = useRouter();
  return (
    <div className={baseWidthStyles}>
      <button onClick={() => router.push(to)}
        className={`bg-theme-white hover:bg-theme-lt-grey text-theme-dk-grey outline outline-2 outline-theme-dk-grey outline-offset-[-2px] ${baseButtonStyles}`}>
        {label}
      </button>
    </div>
  )
}