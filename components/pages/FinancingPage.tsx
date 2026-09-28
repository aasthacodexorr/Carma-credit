"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Layout
import { PageShell } from "@/components/layout";

// Config
import { getConstants } from "@/constants";
import { useAppConfig } from "@/app/providers";

const MIN_HEIGHT = 1200;

const Finance = () => {
  const appConfig = useAppConfig();
  const { SITE_CONFIG } = getConstants(appConfig);

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState<number>(MIN_HEIGHT);

  useEffect(() => {
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
        const newHeight = Math.max(
          MIN_HEIGHT,
          Math.ceil(data.value) + 200
        );
        setHeight(newHeight);
        console.log("new height", newHeight);
        console.log("[Finance iframe] height event:", data.value);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
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