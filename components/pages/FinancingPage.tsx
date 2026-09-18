/* =========================
   Financing Page
   Embeds the Cardora financing application form
   via an iframe. Listens for postMessage events
   from the iframe to dynamically resize the iframe
   height, preventing scroll bars inside the embed.
========================= */

"use client";

import { useEffect, useRef, useState } from "react";

// Layout
import { Header, Footer } from "@/components/layout";

// Shared components
import { GetInTouch } from "@/components/common";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

/*  Constants */
const MIN_HEIGHT = 1540;
const FALLBACK_HEIGHT = 1900;

/*  Page Component */
const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(FALLBACK_HEIGHT);
  const prevHeightRef = useRef<number>(FALLBACK_HEIGHT);

  // Listen for height updates from the embedded financing form
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        data.element_id === "financing_form" &&
        typeof data.value === "number"
      ) {
        const newHeight = Math.max(MIN_HEIGHT, Math.ceil(data.value) + 24);

        // If height changes significantly, it usually means a step change.
        // Scroll the iframe into view so the top isn't hidden under the mobile header.
        if (Math.abs(prevHeightRef.current - newHeight) > 50) {
          if (iframeRef.current) {
            const rect = iframeRef.current.getBoundingClientRect();
            const headerHeight = 90; // approximate mobile header height
            if (rect.top < headerHeight) {
              window.scrollTo({
                top: window.scrollY + rect.top - headerHeight - 20,
                behavior: "smooth",
              });
            }
          }
        }

        prevHeightRef.current = newHeight;
        setHeight(newHeight);
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="py-6 md:py-10 pb-16 mb-52 lg:mt-2 mt-8">
        <div className="mx-auto max-w-[1100px] px-4 md:px-6">
          <div className="overflow-hidden">
            <iframe
              ref={iframeRef}
              id="financing_form"
              src={`${SITE_CONFIG.urls.financeRenderApiUrl}?`}
              name="iframe_a"
              title="Cardora financing application"
              scrolling="no"
              className="w-full block transition-[height] duration-300 ease-out border-0"
              style={{
                minHeight: MIN_HEIGHT,
                height: `${height}px`,
              }}
            />
          </div>
        </div>
      </section>
      <Footer />

    </div>
  );
};

export default Finance;
