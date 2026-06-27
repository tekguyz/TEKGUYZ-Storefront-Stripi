"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "next-themes";
import { PAYPAL, PRODUCT } from "@/lib/constants";
import { captureOrder } from "@/app/actions";

// Extend window type for PayPal SDK
declare global {
  interface Window {
    paypalSDK?: {
      Buttons: (config: PayPalButtonsConfig) => { render: (selector: string | HTMLElement) => void; close: () => void };
      Messages: (config: PayPalMessagesConfig) => { render: (selector: string | HTMLElement) => void };
    };
  }
}

// Type the PayPal SDK config shapes you use
interface PayPalButtonsConfig {
  style: {
    layout: "horizontal" | "vertical";
    color: "gold" | "blue" | "silver" | "white" | "black";
    shape: "rect" | "pill";
    label: "paypal" | "checkout" | "buynow" | "pay";
    tagline: boolean;
    height: number;
  };
  createOrder: (data: any, actions: any) => Promise<string>;
  onApprove: (data: { orderID: string }, actions: any) => Promise<void>;
  onError: (err: unknown) => void;
  onCancel: () => void;
}

interface PayPalMessagesConfig {
  amount: number;
  currency: string;
  style: { 
    layout: "text";
    text?: {
      color: "black" | "white";
    };
  };
}

type SDKState = "idle" | "loading" | "ready" | "error";

export default function PayPalButton() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";
  const [sdkState, setSdkState] = useState<SDKState>("idle");
  const [orderStatus, setOrderStatus] = useState<"idle" | "processing" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const buttonsRef = useRef<ReturnType<NonNullable<Window["paypalSDK"]>["Buttons"]> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSdkState("loading");

    // Poll for SDK availability (loaded via next/script lazyOnload)
    const checkSDK = setInterval(() => {
      if (window.paypalSDK) {
        clearInterval(checkSDK);
        setSdkState("ready");
      }
    }, 150);

    // Timeout after 10 seconds
    const timeout = setTimeout(() => {
      clearInterval(checkSDK);
      if (!window.paypalSDK) {
        setSdkState("error");
        setErrorMessage("PayPal failed to load. Please refresh the page.");
      }
    }, 10000);

    return () => {
      clearInterval(checkSDK);
      clearTimeout(timeout);
    };
  }, []);

  const handleCreateOrder = useCallback(async (data: any, actions: any) => {
    try {
      return await actions.order.create({
        purchase_units: [
          {
            amount: {
              value: PRODUCT.price.toFixed(2),
              currency_code: PRODUCT.currency,
            },
            description: PRODUCT.name,
          },
        ],
      });
    } catch (err) {
      console.error("[PayPal] Error creating order:", err);
      setOrderStatus("error");
      setErrorMessage("Could not initiate PayPal checkout. Please try again.");
      throw err;
    }
  }, []);

  const handleApprove = useCallback(async (data: { orderID: string }, actions: any) => {
    setOrderStatus("processing");
    try {
      // Execute capture client-side
      const details = await actions.order.capture();
      console.log("[PayPal] Client-side capture details:", details);

      const result = await captureOrder(data.orderID);

      if (result.status === "completed") {
        setOrderStatus("success");
        console.log("[PayPal] Order completed:", result.captureId);
      } else {
        setOrderStatus("error");
        setErrorMessage(result.error ?? "Order capture failed");
      }
    } catch (err) {
      console.error("[PayPal] Capture error:", err);
      setOrderStatus("error");
      setErrorMessage("Failed to capture payment. Please contact support.");
    }
  }, []);

  const handleError = useCallback((err: unknown) => {
    setOrderStatus("error");
    setErrorMessage("An error occurred with PayPal. Please try again.");
    // TODO: remove comment in production
    console.error("[PayPal] SDK Error:", err);
  }, []);

  const handleCancel = useCallback(() => {
    setOrderStatus("idle");
    // TODO: remove comment in production
    console.log("[PayPal] Order cancelled by user");
  }, []);

  useEffect(() => {
    if (sdkState !== "ready" || !window.paypalSDK) return;

    const container = containerRef.current;
    if (!container) return;

    // Clear any existing content
    container.innerHTML = "";

    try {
      buttonsRef.current = window.paypalSDK.Buttons({
        style: {
          layout: "horizontal",
          color: "gold",
          shape: "rect",
          label: "buynow",
          tagline: false,
          height: 48,
        },
        createOrder: handleCreateOrder,
        onApprove: handleApprove,
        onError: handleError,
        onCancel: handleCancel,
      });

      buttonsRef.current.render(container);
    } catch (err) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSdkState("error");
      setErrorMessage("Failed to initialize PayPal buttons.");
      // TODO: remove comment in production
      console.error("[PayPal] Button init error:", err);
    }

    return () => {
      buttonsRef.current?.close();
    };
  }, [sdkState, isDark, handleCreateOrder, handleApprove, handleError, handleCancel]);

  if (orderStatus === "success") {
    return (
      <div style={{
        padding: "1.5rem",
        textAlign: "center",
        color: "var(--color-accent)",
        fontWeight: 600,
        fontSize: "1rem",
      }}>
        ✓ Order Complete — Check your email for confirmation
      </div>
    );
  }

  if (sdkState === "error" || orderStatus === "error") {
    return (
      <div style={{
        padding: "1rem",
        textAlign: "center",
        color: "oklch(60% 0.18 25)",
        fontSize: "0.875rem",
      }} className="flex flex-col gap-2 items-center">
        <span>{errorMessage}</span>
        {sdkState === "error" && (
           <a 
             href="https://reporterresource.com" 
             className="text-[var(--color-accent)] underline hover:no-underline"
             target="_blank" rel="noopener noreferrer"
           >
             Having trouble? Purchase directly at reporterresource.com
           </a>
        )}
        {orderStatus === "error" && (
           <button 
             onClick={() => setOrderStatus("idle")}
             className="text-[var(--color-accent)] underline hover:no-underline cursor-pointer"
           >
             Try again
           </button>
        )}
      </div>
    );
  }

  return (
    <div style={{ minHeight: "48px", position: "relative" }}>
      {/* SDK renders PayPal buttons here */}
      <div ref={containerRef} className="w-full relative z-10" />
      {(sdkState === "loading" || orderStatus === "processing") && (
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "var(--color-surface)", borderRadius: "4px",
          fontSize: "0.875rem", color: "var(--color-text-muted)",
          zIndex: 20
        }}>
          {orderStatus === "processing" ? "Processing..." : "Loading PayPal..."}
        </div>
      )}
      <noscript>
        <div style={{ padding: "1rem", textAlign: "center" }}>
          <a href="https://reporterresource.com" className="text-[var(--color-accent)] font-medium">Click here to purchase</a>
        </div>
      </noscript>
    </div>
  );
}
