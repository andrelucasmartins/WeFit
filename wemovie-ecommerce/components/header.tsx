"use client";

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  const cart = useCart((state) => state.cart) ?? [];
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center my-4 justify-between">
        <Link href="/" className="text-2xl font-bold text-foreground">
          WeMovies
        </Link>

        <div className="flex items-center gap-6 justify-around">
          <div className="flex justify-end gap-1 flex-col text-right">
            <div className="text-muted-foreground transition-colors text-sm hidden md:block">
              Meu carrinho
            </div>
            <div className="text-foreground/70 transition-colors text-sm">
              {totalItems} item{totalItems === 1 ? "" : "s"}
            </div>
          </div>

          <Link
            href="/carrinho"
            className="hover:text-foreground transition-colors"
          >
            <MdShoppingBasket className="text-3xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};
