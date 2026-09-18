"use client";

import { useEffect, useRef, useState } from "react";

import { Header, Footer } from "@/components/layout";
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

/* =========================
   Constants
========================= */

const MIN_HEIGHT = 1540;
const FALLBACK_HEIGHT = 1900;

/*
 * Large temporary height used while the iframe
 * is changing between financing steps.
 *
 * This prevents iOS Safari from repeatedly
 * shrinking/expanding the iframe viewport while
 * the embedded form is rendering.
 */
const TRANSITION_HEIGHT = 3000;

/* =========================
   Page Component
========================= */

const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const [height, setHeight] = useState(FALLBACK_HEIGHT);

  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const transitionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(
    null
  );

  const lastHeightRef = useRef(FALLBACK_HEIGHT);

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

      const reportedHeight = Math.ceil(data.value) + 50;

      const newHeight = Math.max(
        MIN_HEIGHT,
        reportedHeight
      );

      /*
       * Clear previous resize.
       */
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      /*
       * Clear any existing transition timeout.
       */
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }

      /*
       * First give Safari a large stable iframe viewport.
       *
       * This is important when the embedded form changes
       * from Step 1 -> Step 2 -> Step 3.
       */
      setHeight((currentHeight) => {
        if (currentHeight < TRANSITION_HEIGHT) {
          return TRANSITION_HEIGHT;
        }

        return currentHeight;
      });

      /*
       * Wait for the embedded document to finish
       * its step transition before applying its
       * final reported height.
       */
      transitionTimeoutRef.current = setTimeout(() => {
        resizeTimeoutRef.current = setTimeout(() => {
          if (
            Math.abs(lastHeightRef.current - newHeight) >= 10
          ) {
            lastHeightRef.current = newHeight;
            setHeight(newHeight);
          }
        }, 100);
      }, 350);
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
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