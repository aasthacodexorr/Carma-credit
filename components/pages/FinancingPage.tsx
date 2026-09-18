
/* =========================
   Financing Page
   Embeds the Cardora financing application form
   via an iframe.

   The iframe sends postMessage events containing
   the required height of the financing form.
   The parent page only updates the iframe height
   and does NOT control the page scroll position.

   This avoids iOS Safari issues where changing the
   iframe height + programmatically scrolling the
   parent page can cause Step 2 content to be cut
   from the top or buttons to collapse.
========================= */

"use client";

import { useEffect, useRef, useState } from "react";

// Layout
import { Header, Footer } from "@/components/layout";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

/* =========================
   Constants
========================= */

const MIN_HEIGHT = 1540;
const FALLBACK_HEIGHT = 1900;

/* =========================
   Page Component
========================= */

const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const [height, setHeight] = useState<number>(FALLBACK_HEIGHT);

  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* =========================
     Listen for iframe height
     updates
  ========================= */

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;

      if (
        !data ||
        typeof data !== "object" ||
        data.type !== "css" ||
        data.element_id !== "financing_form" ||
        typeof data.value !== "number"
      ) {
        return;
      }

      /*
       * Add a small amount of extra space so the bottom
       * of the form, including buttons such as
       * "Continue to Financial Details", is not clipped.
       */
      const newHeight = Math.max(
        MIN_HEIGHT,
        Math.ceil(data.value) + 40
      );

      /*
       * The embedded form can send multiple height
       * messages while moving between steps.
       *
       * Debouncing prevents iOS Safari from repeatedly
       * resizing the iframe during the transition.
       */
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        setHeight((currentHeight) => {
          /*
           * Ignore very small changes to prevent
           * unnecessary iframe layout recalculations.
           */
          if (Math.abs(currentHeight - newHeight) < 10) {
            return currentHeight;
          }

          return newHeight;
        });
      }, 100);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  /* =========================
     Render
  ========================= */

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mt-8 mb-52 py-6 pb-16 md:mt-2 md:py-10">
        <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
          <div className="w-full overflow-visible">
            <iframe
              id="financing_form"
              src={SITE_CONFIG.urls.financeRenderApiUrl}
              name="iframe_a"
              title="Cardora financing application"
              scrolling="no"
              className="block w-full border-0"
              style={{
                display: "block",
                width: "100%",
                height: `${height}px`,
                minHeight: `${MIN_HEIGHT}px`,
                border: "0",
                overflow: "hidden",
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
