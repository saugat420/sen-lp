import type { ButtonHTMLAttributes, ReactNode } from "react";

type CtaButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode };

export function CtaButton({ children, className = "", ...props }: CtaButtonProps) {
  return (
    <button
      className={`font-outfit w-full rounded-2xl bg-[#1149a6] px-5 py-4 text-base font-extrabold text-white shadow-[0_12px_22px_-10px_rgba(17,73,166,0.75)] transition duration-200 hover:-translate-y-0.5 hover:bg-[#0e3e8f] hover:shadow-[0_16px_28px_-10px_rgba(17,73,166,0.8)] active:translate-y-0 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
