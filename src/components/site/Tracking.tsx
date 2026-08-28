import { useEffect } from "react";

const GA_ID = import.meta.env["VITE_GA_MEASUREMENT_ID"] as string | undefined;
const PIXEL_ID = import.meta.env["VITE_META_PIXEL_ID"] as string | undefined;

/**
 * Loads Google Analytics and the Meta Pixel only after cookie consent.
 * Set VITE_GA_MEASUREMENT_ID and VITE_META_PIXEL_ID to activate.
 */
export function Tracking() {
  useEffect(() => {
    if (window.localStorage.getItem("caliv.cookies") !== "accepted") return;

    if (GA_ID) {
      const s = document.createElement("script");
      s.async = true;
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(s);
      const w = window as unknown as { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };
      w.dataLayer = w.dataLayer || [];
      w.gtag = function gtag(...args: unknown[]) {
        w.dataLayer.push(args);
      };
      w.gtag("js", new Date());
      w.gtag("config", GA_ID);
    }

    if (PIXEL_ID) {
      const s = document.createElement("script");
      s.async = true;
      s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${PIXEL_ID}');fbq('track','PageView');`;
      document.head.appendChild(s);
    }
  }, []);

  return null;
}
