"use client";

import { NotFoundData } from "@/components/notfound-data";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/useCart";
import FormatCurrency from "@/lib/formart-currency";
import { useCartStore } from "@/store/useCartStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import {
  MdAddCircleOutline,
  MdDelete,
  MdRemoveCircleOutline,
} from "react-icons/md";

export default function CartPage() {
  const router = useRouter();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const cart = useCart((state) => state.cart) ?? [];
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const hasItems = cart.length > 0;

  const handleFinalizePedido = async () => {
    setIsRedirecting(true);
    clearCart();
    await router.push("/compra-realizada");
  };

  if (!hasItems && !isRedirecting) {
    return (
      <main className="w-full px-6 py-8">
        <div className="max-w-7xl mx-auto space-y-8">
          <NotFoundData />
        </div>
      </main>
    );
  }

  if (isRedirecting) {
    return null;
  }

  return (
    <main className="max-w-7xl md:mx-auto space-y-8 mx-4">
      <section className="rounded border border-border bg-white p-4 md:p-6 shadow-sm block md:hidden">
        {/* Itens da Tabela */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="grid gap-4 rounded-[1.75rem] border border-border/80 md:grid-cols-[1fr_auto_auto_auto_auto] md:items-center"
            >
              {/* Produto */}
              <div className="flex gap-3 col-span-3 justify-around  w-full">
                <div className="relative w-16 h-20.5 overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 64px, 82px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 justify-center items-center">
                    <p className="font-bold text-sm text-slate-950">
                      {item.title}
                    </p>
                    <div className="grid grid-cols-2 gap-4 items-center">
                      <p className="text-[16px] font-semibold text-slate-950">
                        <FormatCurrency value={item.price} currency="BRL" />
                      </p>
                      {/* Botão Lixeira */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="w-10 h-10 flex items-center justify-center text-primary transition hover:bg-primary/20 justify-self-end"
                      >
                        <MdDelete className="text-[18px]" />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-cols-2 justify-between gap-4">
                    <span className="text-xs text-muted-foreground flex items-start">
                      {/* Quantidade */}
                      <div className="flex items-center gap-2 rounded-full border border-border bg-white py-1.5 md:flex-col md:gap-1">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                          disabled={item.quantity <= 1}
                        >
                          <MdRemoveCircleOutline className="size-4.5 text-primary" />
                        </button>
                        <span className="text-center font-semibold text-slate-950 border border-secondary/20 rounded px-5.5 py-1">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100"
                        >
                          <MdAddCircleOutline className="size-4.5 text-primary" />
                        </button>
                      </div>
                    </span>

                    {/* Subtotal */}
                    <div className="text-right md:text-right">
                      <p className="text-sm text-muted-foreground md:hidden">
                        Subtotal
                      </p>
                      <p className="text-sm font-semibold text-slate-950">
                        <FormatCurrency
                          value={item.price * item.quantity}
                          currency="BRL"
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Linha separadora */}
        <div className="my-5.25 border-t border-border bg-gray-500" />

        {/* Footer com Total e Botão */}
        <div className="flex md:flex-col gap-4 sm:flex-row sm:items-center sm:justify-between flex-col-reverse">
          <Button
            className="rounded bg-primary px-6 py-3 h-10 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 uppercase"
            onClick={handleFinalizePedido}
          >
            Finalizar pedido
          </Button>

          <div className="rounded-[1.5rem] border border-border flex  py-4 text-right items-center justify-between w-full">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Total
            </p>
            <p className="text-2xl font-bold text-slate-950">
              <FormatCurrency value={totalPrice} currency="BRL" />
            </p>
          </div>
        </div>
      </section>
      {/* Desktop */}
      <section className="rounded border border-border bg-white p-4 md:p-6 shadow-sm hidden md:block">
        {/* Header da Tabela */}
        <div className="grid grid-cols-1 gap-4 rounded-[1.75rem] border border-border/80 md:grid-cols-[auto_auto_auto_auto] md:items-center">
          <p className="text-xs font-semibold uppercase text-muted-foreground">
            Produto
          </p>
          <p className="text-xs font-semibold uppercase text-muted-foreground text-left">
            Qtd
          </p>
          <p className="text-xs font-semibold uppercase text-muted-foreground text-left">
            Subtotal
          </p>
          <p className="text-xs font-semibold uppercase text-muted-foreground text-right">
            &nbsp;
          </p>
        </div>

        {/* Itens da Tabela */}

        <div className="mt-6 grid grid-cols-1 gap-4 rounded-[1.75rem] border border-border/80 md:grid-cols-[auto_auto_auto_auto] md:items-center">
          {cart.map((item) => (
            <Fragment key={item.id}>
              {/* Imagem do Produto */}
              <div className="relative w-20 h-28.5 shrink-0 mx-auto md:mx-0 flex flex-row items-center gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={91}
                  height={114}
                  className="object-cover w-22.75 h-28.5"
                />
                {/* Título do Produto */}
                <div className="text-center md:text-left grid grid-col[1fr_1fr] gap-2 ">
                  <p className="font-semibold text-sm text-slate-950 w-32">
                    {item.title}
                  </p>
                  {/* Subtotal / Preço */}
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      <FormatCurrency value={item.price} currency="BRL" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Controle de Quantidade */}
              <div className="flex justify-start items-center w-20">
                <div className="flex items-center gap-2 rounded-full border border-border bg-white py-1.5 px-3 md:gap-1">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    disabled={item.quantity <= 1}
                  >
                    <MdRemoveCircleOutline className="size-4.5 text-primary" />
                  </button>

                  <span className="text-center font-semibold text-slate-950 border border-secondary/20 rounded px-3 py-0.5 min-w-10">
                    {item.quantity}
                  </span>

                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="rounded-full p-1 text-slate-700 transition hover:bg-slate-100"
                  >
                    <MdAddCircleOutline className="size-4.5 text-primary" />
                  </button>
                </div>
              </div>

              {/* Subtotal / Preço */}
              <div className="flex justify-start items-center w-20">
                <p className="text-xs text-muted-foreground md:hidden mb-0.5">
                  Subtotal
                </p>
                <p className="text-sm font-semibold text-slate-950">
                  <FormatCurrency
                    value={item.price * item.quantity}
                    currency="BRL"
                  />
                </p>
              </div>

              {/* Botão Deletar */}
              <div className="flex justify-center md:justify-end">
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id)}
                  className="w-10 h-10 flex items-center justify-center text-primary transition rounded-full hover:bg-primary/10"
                  aria-label={`Remover ${item.title} do carrinho`}
                >
                  <MdDelete className="size-6" />
                </button>
              </div>
            </Fragment>
          ))}
        </div>

        {/* Linha separadora */}
        <div className="mt-6 mb-2 border-t border border-gray-400" />

        {/* Footer com Total e Botão */}
        <div className="flex gap-4 sm:flex-row sm:items-center sm:justify-between flex-col-reverse">
          <Button
            className="rounded bg-primary px-6 py-3 h-10 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90 uppercase"
            onClick={handleFinalizePedido}
          >
            Finalizar pedido
          </Button>

          <div className="rounded-[1.5rem] border border-border flex  py-4 text-right items-center justify-end w-full gap-4">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
              Total
            </p>
            <p className="text-2xl font-semibold text-slate-950">
              <FormatCurrency value={totalPrice} currency="BRL" />
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
