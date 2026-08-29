import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "33695110438";
const WHATSAPP_MESSAGE = [
  "Bonjour,",
  "",
  "Je souhaite passer une commande chez Caliv. Êtes-vous disponible pour une livraison ?",
  "",
  "Variété(s) :",
  "Quantité(s) :",
  "Adresse complète de livraison :",
  "",
  "Merci de me confirmer la disponibilité ainsi que le délai estimé de livraison.",
].join("\n");
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

