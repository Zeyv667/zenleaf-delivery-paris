import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "33695110438";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const INSTAGRAM_USERNAME = "calivparis";
export const INSTAGRAM_WEB = `https://instagram.com/${INSTAGRAM_USERNAME}`;

/**
 * Ouvre le profil Instagram dans l'app mobile (deep link instagram://).
 * Si l'app n'est pas installée, bascule vers le site web après un court délai.
 */
export function openInstagram() {
  const appUrl = `instagram://user?username=${INSTAGRAM_USERNAME}`;
  const start = Date.now();
  const isMobile =
    /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent) ||
    (window.navigator.maxTouchPoints > 1 && /Macintosh/.test(window.navigator.userAgent));

  if (!isMobile) {
    window.open(INSTAGRAM_WEB, "_blank", "noopener,noreferrer");
    return;
  }

  window.location.href = appUrl;
  // Si l'app ne s'est pas ouverte (page toujours visible), redirige vers le web.
  window.setTimeout(() => {
    if (!document.hidden && Date.now() - start < 2500) {
      window.location.href = INSTAGRAM_WEB;
    }
  }, 1200);
}

