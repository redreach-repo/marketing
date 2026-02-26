"use client";

import { useEffect } from "react";

type LightboxProps = { src: string | null; onClose: () => void };

export default function Lightbox({ src, onClose }: LightboxProps) {
  useEffect(() => {
    if (src) document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [src]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!src) return null;

  return (
    <div
      className="lightbox active"
      role="dialog"
      aria-modal="true"
      aria-label="View image"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button type="button" className="lightbox-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      <img src={src} alt="Gallery" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
