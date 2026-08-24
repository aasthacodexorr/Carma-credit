"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Layout
import { PageShell } from "@/components/layout";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

const MIN_HEIGHT = 540;
const FALLBACK_HEIGHT = 1000;

const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const resizeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [height, setHeight] = useState<number>(FALLBACK_HEIGHT);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  useEffect(() => {
    const requestIframeResize = () => {
      const iframe = iframeRef.current;

      if (!iframe?.contentWindow) return;

      iframe.contentWindow.postMessage(
        {
          type: "resize",
          element_id: "finance_form",
        },
        "*"
      );
    };

    const handleMessage = (event: MessageEvent) => {
      const data = event.data;

      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        (data.element_id === "finance_form" ||
          data.element_id === "financing_form") &&
        typeof data.value === "number"
      ) {
        const newHeight = Math.max(
          MIN_HEIGHT,
          Math.ceil(data.value) + 20
        );

        setHeight(newHeight);
      }
    };

    const handleResize = () => {
      /*
       * Reset to a safe height while the iframe
       * recalculates its responsive layout.
       */
      setHeight((currentHeight) =>
        Math.max(currentHeight, FALLBACK_HEIGHT)
      );

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }

      resizeTimeoutRef.current = setTimeout(() => {
        requestIframeResize();
      }, 150);
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("resize", handleResize);

    // Initial request
    const initialTimeout = setTimeout(() => {
      requestIframeResize();
    }, 300);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("resize", handleResize);

      clearTimeout(initialTimeout);

      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;

    if (!iframe?.contentWindow) return;

    /*
     * Ask the embedded financing form to recalculate
     * its responsive height.
     */
    iframe.contentWindow.postMessage(
      {
        type: "resize",
        element_id: "finance_form",
      },
      "*"
    );
  };

  return (
    <div className="bg-background w-full">
      <PageShell>
        <section className="py-4 md:py-6 w-full">
          <div className="mx-auto w-full max-w-[1100px] px-3 sm:px-4 md:px-6">
            <div className="w-full">
              <iframe
                ref={iframeRef}
                id="finance_form"
                src={`${SITE_CONFIG.urls.financeRenderApiUrl}?`}
                name="iframe_a"
                title="Carma Credit financing application"
                scrolling="no"
                onLoad={handleIframeLoad}
                className="block w-full max-w-full border-0"
                style={{
                  width: "100%",
                  minHeight: `${MIN_HEIGHT}px`,
                  height: `${height}px`,
                  display: "block",
                }}
              />
            </div>
          </div>
        </section>
      </PageShell>
    </div>
  );
};

export default Finance;