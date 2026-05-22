"use client";

import type { CartItem } from "@/store/useCartStore";
import { useCartStore } from "@/store/useCartStore";

interface CartState {
  cart: CartItem[];
  addToCart: (product: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotalItems: () => number;
  getCartTotalPrice: () => number;
}

export function useCart<T>(selector: (state: CartState) => T): T | undefined {
  const result = useCartStore(selector);

  // O Zustand persist possui um método chamado .persist.hasHydrated()
  // Ele nos diz de forma síncrona e segura se o localStorage já foi lido no client.
  const hasHydrated = useCartStore.persist?.hasHydrated();

  // Se já foi hidratado no cliente, retorna o valor real do Zustand.
  // Caso contrário (no servidor), retorna undefined para evitar conflito.
  return hasHydrated ? result : undefined;
}
