/* =========================
   Financing Page
   Embeds the Carma financing application form
   through an iframe.

   Important:
   The financing steps themselves are rendered
   inside the cross-origin Carma iframe.

   The parent page therefore only:
   - receives the iframe height through postMessage
   - updates the iframe height
   - prevents unnecessary layout/scroll changes

   It does NOT attempt to control the iframe's
   internal scroll position.
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
  const lastHeightRef = useRef<number>(FALLBACK_HEIGHT);

  /* =========================
     Receive iframe height
  ========================= */

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;

      if (
        !data ||
        typeof data !== "object" ||
        data.type !== "css" ||
        data.element_id !== "financing_form" ||
        typeof data.value !== "number" ||
        !Number.isFinite(data.value)
      ) {
        return;
      }

      /*
       * The iframe reports its required height.
       *
       * Keep a small amount of extra space at the bottom
       * so the final button is not clipped.
       */
      const newHeight = Math.max(
        MIN_HEIGHT,
        Math.ceil(data.value) + 40
      );

      /*
       * Ignore tiny height changes.
       *
       * This prevents Safari from continuously recalculating
       * the iframe layout for very small changes.
       */
      if (Math.abs(lastHeightRef.current - newHeight) < 10) {
        return;
      }

      /*
       * Clear any pending resize.
       */
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      /*
       * Give the iframe a very small amount of time to finish
       * its internal layout before changing the iframe height.
       *
       * This is especially helpful on iOS Safari when moving
       * between the financing steps.
       */
      resizeTimeoutRef.current = setTimeout(() => {
        lastHeightRef.current = newHeight;

        setHeight(newHeight);
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="mt-8 mb-52 w-full py-6 pb-16 md:mt-2 md:py-10">
        <div className="mx-auto w-full max-w-[1100px] px-4 md:px-6">
          <div
            className="w-full"
            style={{
              overflow: "visible",
              overflowAnchor: "none",
            }}
          >
            <iframe
              id="financing_form"
              src={SITE_CONFIG.urls.financeRenderApiUrl}
              name="iframe_a"
              title="Carma Credit financing application"
              scrolling="no"
              frameBorder="0"
              allow="payment"
              className="block w-full border-0"
              style={{
                display: "block",
                width: "100%",
                height: `${height}px`,
                minHeight: `${MIN_HEIGHT}px`,
                margin: "0",
                padding: "0",
                border: "0",
                overflow: "hidden",
                background: "transparent",
                overflowAnchor: "none",
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