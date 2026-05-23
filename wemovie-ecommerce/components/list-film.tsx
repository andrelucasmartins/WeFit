"use client";

import { useCart } from "@/hooks/useCart"; // <-- Importe o seu novo hook corrigido
import FormatCurrency from "@/lib/formart-currency";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@base-ui/react";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { MdAddShoppingCart } from "react-icons/md";
import { NotFoundData } from "./notfound-data";
import { Card } from "./ui/card";
import { Spinner } from "./ui/spinner";

interface FilmsProps {
  products: {
    id: number;
    image: string;
    title: string;
    price: number;
  }[];
}

export const ListFilm = () => {
  // 1. Hook do React Query para buscar os filmes
  const { data, isLoading, error } = useQuery<FilmsProps | null>({
    queryKey: ["movies"],
    queryFn: async () => {
      const response = await fetch(
        "https://wemovies-seven.vercel.app/api/movies",
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });

  // 2. Ação de adicionar não mexe com interface no carregamento, pode ler direto da store
  const addToCart = useCartStore((state) => state.addToCart);

  // 3. Lemos a lista do carrinho usando o hook seguro (evita re-renderizações em cascata)
  const cart = useCart((state) => state.cart) ?? [];

  // 4. Tratamento do estado de carregamento e erro da API
  if (isLoading) {
    return (
      <div className="flex justify-center items-center mt-20 mx-auto">
        <Spinner className="size-20 md:size-25 mx-auto" />
      </div>
    );
  }

  if (error) return <NotFoundData />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full mx-auto">
      {data?.products.map((product) => {
        // 5. Cálculo Dinâmico e Seguro da Quantidade
        const productInCart = cart.find((item) => item.id === product.id);
        const quantity = productInCart ? productInCart.quantity : 0;

        return (
          <Card
            key={product.id}
            className="bg-white text-[#2F2E41] flex flex-col items-center p-4 rounded gap-2 w-full"
          >
            <div className="relative w-36.75 h-47 flex items-center justify-center">
              <Image
                src={product.image}
                alt={product.title}
                width={147}
                height={188}
                loading="eager"
                className="object-contain h-47 w-36.75"
              />
            </div>

            <span className="font-bold text-xs text-[#333333] mt-2 line-clamp-2 text-center">
              {product.title}
            </span>

            <span className="font-bold text-base text-[#2F2E41] mb-2">
              <FormatCurrency value={product.price} currency="BRL" />
            </span>

            <Button
              className={`uppercase text-xs font-bold h-10 w-full text-white ${quantity > 0 ? "bg-success hover:bg-success/90" : "bg-primary hover:bg-[#0082b5]"} flex items-center justify-center gap-3 rounded mt-auto`}
              onClick={() => addToCart(product)}
            >
              <div className="flex items-center gap-1 font-normal text-xs">
                <MdAddShoppingCart className="w-4 h-4" />
                {/* 6. Quantidade reativa sem travar o Next.js 16 */}
                <span>{quantity}</span>
              </div>
              <span>Adicionar ao carrinho</span>
            </Button>
          </Card>
        );
      })}
    </div>
  );
};
