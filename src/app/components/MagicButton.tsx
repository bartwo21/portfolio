import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  href?: string;
  download?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
};

export default function MagicButton({
  text,
  href = "#",
  download,
  target,
  type = "button",
  onClick,
  loading = false,
}: Props) {
  const buttonContent = (
    <button
      type={type}
      onClick={onClick}
      className="group relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] min-w-40"
      disabled={loading}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#7dd3fc_50%,#E2CBFF_100%)]" />
      <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-xs font-medium text-white backdrop-blur-3xl">
        {loading ? (
          <div className="w-6 h-6 border-t-2 border-r-2 border-b-0 border-l-0 border-gray-200 rounded-full animate-spin"></div>
        ) : (
          <>
            {text}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </>
        )}
      </span>
    </button>
  );

  if (type === "submit") {
    return buttonContent;
  }

  return (
    <Link href={href} download={download} target={target}>
      {buttonContent}
    </Link>
  );
}
