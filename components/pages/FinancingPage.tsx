"use client";

import { useEffect, useRef, useState } from "react";

// Layout
import { PageShell } from "@/components/layout";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

const MIN_HEIGHT = 1200;
// Room for validation messages, which appear without a new height event.
const ERROR_BUFFER = 300;

const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(MIN_HEIGHT);
  const heightRef = useRef<number>(MIN_HEIGHT);
  const hasLoadedFirstStep = useRef(false);

  useEffect(() => {
    // Scroll the parent page so the top of the form sits just below the sticky header.
    const scrollToFormTop = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      const headerHeight = document.querySelector("header")?.offsetHeight ?? 0;
      const top =
        iframe.getBoundingClientRect().top + window.scrollY - headerHeight - 16;

      window.scrollTo({ top: Math.max(top, 0), behavior: "auto" });
    };

    // iOS Safari can keep a stale scroll offset / stale paint for the iframe
    // layer after it resizes (it only recovers on app resume). Forcing a
    // relayout of the iframe makes WebKit recompute it immediately.
    const nudgeIframeLayout = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;

      iframe.style.width = "calc(100% - 1px)";
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          iframe.style.width = "100%";
        });
      });
    };

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== "https://carma.zopsoftware.com") {
        return;
      }

      const data = event.data;

      if (
        data &&
        typeof data === "object" &&
        data.type === "css" &&
        (data.element_id === "finance_form" ||
          data.element_id === "financing_form") &&
        typeof data.value === "number" &&
        Number.isFinite(data.value) &&
        data.value > 0
      ) {
        // The iframe reports $(document).height(), which is never smaller than
        // the iframe's own height. A value at or below the current height just
        // means "content fits", so only grow when the content is really taller.
        // Growing on every event would add the buffer again on each step change.
        const reported = Math.ceil(data.value);
        if (reported > heightRef.current + 2) {
          const newHeight = Math.max(MIN_HEIGHT, reported + ERROR_BUFFER);
          heightRef.current = newHeight;
          setHeight(newHeight);
        }

        // The iframe sends this event on every step change, including the first
        // render. Skip the first one so the page doesn't jump on load.
        if (hasLoadedFirstStep.current) {
          requestAnimationFrame(() => {
            scrollToFormTop();
            nudgeIframeLayout();
            releaseIframeFocus();
          });
        } else {
          hasLoadedFirstStep.current = true;
        }
      }
    };

    // A failed "Next"/"Submit" inside the iframe animates its own scrollTop
    // (250ms) but sends no message. The only signal we get is the parent
    // window blurring when a tap moves focus into the iframe, so repair the
    // iframe layout once that animation has finished.
    const repairTimers: number[] = [];

    const handleWindowBlur = () => {
      if (document.activeElement !== iframeRef.current) return;

      repairTimers.push(
        window.setTimeout(nudgeIframeLayout, 400),
        window.setTimeout(nudgeIframeLayout, 900)
      );
    };

    // After a step change no field inside the iframe is being edited, so hand
    // focus back to the parent. The next tap in the iframe (e.g. an empty
    // "Submit") then fires a fresh blur that handleWindowBlur can catch.
    const releaseIframeFocus = () => {
      const iframe = iframeRef.current;
      if (!iframe || document.activeElement !== iframe) return;

      iframe.blur();
      window.focus();
    };

    window.addEventListener("message", handleMessage);
    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("blur", handleWindowBlur);
      repairTimers.forEach((id) => window.clearTimeout(id));
    };
  }, []);

  return (
    <div className="bg-background w-full">
      <PageShell>
        <section className="py-4 md:py-6 w-full mt-10 lg:mt-0">
          <div className="mx-auto w-full px-3 sm:px-4 md:px-6">
            <div
              className="w-full rounded-2xl bg-white overflow-hidden"
              style={{
                minHeight: `${height}px`,
              }}
            >
              <iframe
                ref={iframeRef}
                id="finance_form"
                src={`${SITE_CONFIG.urls.financeRenderApiUrl}?`}
                name="iframe_a"
                title="Carma Credit financing application"
                scrolling="no"
                className="block w-full  border-0 rounded-2xl bg-transparent"
                style={{
                  width: "100%",
                  height: `${height}px`,
                  minHeight: `${height}px`,
                  border: "none",
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
