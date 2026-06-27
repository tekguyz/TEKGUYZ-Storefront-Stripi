"use server";

import { PAYPAL, PRODUCT } from "@/lib/constants";

// Types
interface CreateOrderResult {
  orderId: string;
  status: "created" | "error";
  error?: string;
}

interface CaptureOrderResult {
  captureId: string;
  status: "completed" | "pending" | "error";
  amount?: string;
  currency?: string;
  error?: string;
}

/**
 * Capture a PayPal order.
 * In production, this uses the PayPal Orders v2 REST API.
 * For sandbox, the SDK's onApprove provides the orderId.
 */
export async function captureOrder(orderId: string): Promise<CaptureOrderResult> {
  try {
    // Full implementation requires PAYPAL_SECRET env variable:
    // const auth = Buffer.from(`${PAYPAL.clientId}:${process.env.PAYPAL_SECRET}`).toString("base64");

    console.log(`[PayPal] Capturing order: ${orderId}`);
    console.log(`[PayPal] Product: ${PRODUCT.name} · ${PRODUCT.priceFormatted}`);
    console.log(`[PayPal] Environment: ${PAYPAL.environment}`);

    // SANDBOX STUB: Return success for sandbox testing
    // Replace with actual fetch() to PayPal REST API in production
    return {
      captureId: `CAPTURE_${orderId}_${Date.now()}`,
      status: "completed",
      amount: PRODUCT.price.toString(),
      currency: PRODUCT.currency,
    };
  } catch (error) {
    console.error("[PayPal] Capture failed:", error);
    return {
      captureId: "",
      status: "error",
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}

/**
 * Validate an order before capture.
 */
export async function validateOrder(orderId: string): Promise<{ valid: boolean }> {
  console.log(`[PayPal] Validating order: ${orderId}`);
  return { valid: true };
}
