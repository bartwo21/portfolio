import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  text: string;
  href?: string;
  download?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
  icon?: React.ReactNode;
  className?: string;
  isActive?: boolean;
};

export default function MagicButton({
  text,
  href,
  download,
  target,
  type = "button",
  onClick,
  loading = false,
  icon,
  className,
  isActive = false,
}: Props) {
  const buttonContent = (
    <motion.button
      whileTap={{ scale: 0.98 }}
      type={type}
      onClick={onClick}
      className={`group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-8 font-medium transition-all duration-500 ${
        isActive 
          ? 'bg-white/90 text-sky-900 shadow-[0_10px_20px_rgba(0,0,0,0.1)]' 
          : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40'
      } backdrop-blur-md ${className || ''}`}
      disabled={loading}
    >
      {/* Soft Glow Effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-sky-400/10 to-transparent" />
      
      <div className="relative flex items-center gap-3">
        {loading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <span className="tracking-widest text-[11px] uppercase font-bold">{text}</span>
            {icon && <span className="text-lg opacity-80 group-hover:opacity-100 transition-opacity">{icon}</span>}
          </>
        )}
      </div>

      {/* Subtle Shine */}
      <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[25deg] group-hover:animate-[shine_1.5s_ease-in-out_infinite]" />
    </motion.button>
  );

  if (type === "submit" || !href) {
    return buttonContent;
  }

  return (
    <Link href={href} download={download} target={target} className="no-underline">
      {buttonContent}
    </Link>
  );
}
