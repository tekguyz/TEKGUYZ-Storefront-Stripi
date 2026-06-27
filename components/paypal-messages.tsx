"use client";

import { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { PAYPAL, PRODUCT } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function PayPalMessages() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = "";

    const checkSDK = setInterval(() => {
      if (window.paypalSDK) {
        clearInterval(checkSDK);
        try {
          window.paypalSDK.Messages({
            amount: PRODUCT.price,
            currency: PAYPAL.currency,
            style: { 
              layout: "text",
              text: {
                // When we invert in dark mode, passing black makes it invert to white perfectly
                color: "black",
              }
            },
          }).render(container);
        } catch {
          // SDK may not have Messages component in all sandbox configs — fail silently
        }
      }
    }, 150);

    return () => clearInterval(checkSDK);
  }, [mounted, isDark]);

  if (!mounted) return <div style={{ minHeight: "20px", marginBottom: "1rem" }} />;

  return (
    <div
      ref={containerRef}
      className={cn(
        "w-full transition-all duration-200",
        isDark && "invert hue-rotate-180 brightness-150 contrast-85"
      )}
      style={{
        minHeight: "20px",
        textAlign: "center",
        fontSize: "0.875rem",
        marginBottom: "1rem",
      }}
    />
  );
}


