import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const WHATSAPP_NUMBER = "33695110438";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

