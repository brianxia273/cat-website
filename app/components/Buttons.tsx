"use client";

import { useRouter } from "next/navigation";

type ButtonProps = {
  label: string
  to: string
  size?: "L" | "M" | "S"
  isScroll?: boolean
}

const baseButtonStyles = "cursor-pointer rounded-lg transition-colors duration-200"
const baseWidthStyles = "w-auto max-w-full"

const sizeStyles = {
  L: "px-12 text-xl py-3 h-13",
  M: "px-6 text-lg py-2  h-11",
  S: "px-4  h-9",
};


export function ButtonRed({ label, to, size = "L", isScroll = false }: ButtonProps) {
  const router = useRouter();
  return (
    <div className={baseWidthStyles}>
      <button onClick={() => isScroll ? document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' }) : router.push(to)}
        className={`bg-theme-red hover:bg-theme-dk-red text-white ${baseButtonStyles} 
         ${sizeStyles[size]}`}>
        {label}
      </button>
    </div>
  )
}

export function ButtonWhite({ label, to, size = "L", isScroll = false }: ButtonProps) {
  const router = useRouter();
  return (
    <div className={baseWidthStyles}>
      <button onClick={() => isScroll ? document.getElementById(to)?.scrollIntoView({ behavior: 'smooth' }) : router.push(to)}
        className={`bg-theme-white hover:bg-bg-lt-grey text-text-dk-grey outline-[1.5px] outline-text-dk-grey -outline-offset-1 ${baseButtonStyles}
          ${sizeStyles[size]}`}>
        {label}
      </button>
    </div>
  )
}