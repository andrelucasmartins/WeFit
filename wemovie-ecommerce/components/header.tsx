"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  const cart = useCart((state) => state.cart) ?? [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full px-4 py-[31.5px]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-foreground">
          WeMovies
        </Link>

        <div className="flex items-center gap-2 justify-around">
          <div className="flex justify-end gap-1 flex-col text-right">
            <div className="text-white transition-colors text-sm hidden md:block">
              Meu carrinho
            </div>
            <div className="text-foreground/70 transition-colors text-xs">
              {totalItems} item{totalItems === 1 ? "" : "s"}
            </div>
          </div>

          <Link
            href="/carrinho"
            className="hover:text-foreground transition-colors"
          >
            <MdShoppingBasket className="text-2xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};
