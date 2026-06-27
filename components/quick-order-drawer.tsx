"use client";

import { ShoppingCart } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PRODUCT, BUNDLE_ITEMS } from "@/lib/constants";
import PayPalButton from "./paypal-button";
import PayPalMessages from "./paypal-messages";
import Image from "next/image";

export function QuickOrderDrawer() {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button variant="ghost" size="icon" className="relative group text-[var(--color-text)]">
            <ShoppingCart className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-[var(--color-text)] rounded-full border border-[var(--color-base)]"></span>
            <span className="sr-only">Open quick order drawer</span>
          </Button>
        }
      />
      <SheetContent className="w-full sm:max-w-md flex flex-col p-0 border-l border-[var(--color-border)] bg-[var(--color-base)] h-full max-h-screen overflow-hidden rounded-none">
        <div className="p-4 border-b border-[var(--color-border)] flex-shrink-0">
          <SheetHeader>
            <SheetTitle className="text-left font-display font-black text-xs uppercase tracking-[0.18em] text-[var(--color-text)]">
              Quick Order Summary
            </SheetTitle>
            <SheetDescription className="text-left text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-1">
              Review your bundle before checkout.
            </SheetDescription>
          </SheetHeader>
        </div>
 
        <div className="flex-1 overflow-y-auto px-4 min-h-0">
          <div className="py-4 space-y-4">
            <div className="flex gap-4">
              <div className="w-16 h-16 relative bg-white rounded-lg border border-[var(--color-border)] flex-shrink-0 flex items-center justify-center p-1.5">
                <Image
                  src={PRODUCT.image}
                  alt={PRODUCT.name}
                  width={56}
                  height={56}
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-bold text-xs uppercase tracking-[0.12em] text-[var(--color-text)] leading-tight">{PRODUCT.name}</h3>
                <p className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mt-1">{PRODUCT.subtitle}</p>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold text-[var(--color-text)] text-[10px] uppercase tracking-[0.15em] font-mono">What&apos;s Included</h4>
              <ul className="space-y-3">
                {BUNDLE_ITEMS.map((section) => (
                  <li key={section.id} className="text-xs">
                    <span className="font-bold text-[10px] uppercase tracking-wider text-[var(--color-text)] block mb-1">{section.category}</span>
                    <ul className="pl-0 space-y-1">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="text-[var(--color-text-muted)] flex items-start text-[11px]">
                          <span className="text-[var(--color-text)] mr-2 mt-1 shrink-0 w-1 h-1 bg-current" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-[var(--color-border)] bg-[var(--color-surface)] flex-shrink-0">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xs font-mono uppercase tracking-[0.15em] text-[var(--color-text)]">Total</span>
            <span className="font-black text-lg uppercase tracking-tight text-[var(--color-text)]">{PRODUCT.priceFormatted}</span>
          </div>
          
          <div className="space-y-3">
            <PayPalMessages />
            <div className="relative z-10 w-full min-h-[55px]">
              <PayPalButton />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
