import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "33695110438";
const WHATSAPP_MESSAGE = [
  "Bonjour CALIV, je souhaite passer une commande.",
  "",
  "Pseudo :",
  "Numéro :",
  "Variété souhaitée :",
  "Adresse complète :",
  "Détails :",
].join("\n");
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

