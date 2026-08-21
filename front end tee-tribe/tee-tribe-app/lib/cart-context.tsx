"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";
import { getProduct } from "@/data/products";

export interface CartLine {
  productSlug: string;
  size: string;
  quantity: number;
}

interface CartContextValue {
  lines: CartLine[];
  addLine: (productSlug: string, size: string, quantity?: number) => void;
  removeLine: (productSlug: string, size: string) => void;
  setQuantity: (productSlug: string, size: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "tee-tribe-cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load from localStorage once on mount. This is a placeholder persistence
  // layer — a real storefront would sync this to a cart on the commerce
  // backend (Shopify/Medusa) so it survives across devices.
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {
      // ignore corrupt/blocked storage, start with an empty cart
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // storage may be unavailable (private mode, quota) — cart just
      // won't persist across reloads, which is an acceptable fallback
    }
  }, [lines, hydrated]);

  function addLine(productSlug: string, size: string, quantity = 1) {
    setLines((prev) => {
      const existing = prev.find(
        (l) => l.productSlug === productSlug && l.size === size
      );
      if (existing) {
        return prev.map((l) =>
          l === existing ? { ...l, quantity: l.quantity + quantity } : l
        );
      }
      return [...prev, { productSlug, size, quantity }];
    });
  }

  function removeLine(productSlug: string, size: string) {
    setLines((prev) =>
      prev.filter((l) => !(l.productSlug === productSlug && l.size === size))
    );
  }

  function setQuantity(productSlug: string, size: string, quantity: number) {
    if (quantity <= 0) return removeLine(productSlug, size);
    setLines((prev) =>
      prev.map((l) =>
        l.productSlug === productSlug && l.size === size
          ? { ...l, quantity }
          : l
      )
    );
  }

  function clear() {
    setLines([]);
  }

  const { itemCount, subtotal } = useMemo(() => {
    let count = 0;
    let sum = 0;
    for (const line of lines) {
      const product = getProduct(line.productSlug);
      count += line.quantity;
      if (product) sum += product.price * line.quantity;
    }
    return { itemCount: count, subtotal: sum };
  }, [lines]);

  const value: CartContextValue = {
    lines,
    addLine,
    removeLine,
    setQuantity,
    clear,
    itemCount,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
