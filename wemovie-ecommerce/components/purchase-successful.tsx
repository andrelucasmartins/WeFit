"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const PurchaseSuccessful = () => {
  return (
    <div className="w-full md:w-dvw md:h-full bg-white rounded-sm p-20 mx-4 sm:mx-6 md:mx-8 text-center md:pb-30">
      <h1 className="text-xl font-bold text-center mx-8 text-black mb-6">
        Compra realizada com sucesso!
      </h1>
      <Image
        src="/purchase_successful.svg"
        width={238}
        height={247.72}
        className="mx-auto mb-4 w-full max-w-59.5 h-auto md:hidden"
        alt="Dados não encontrados..."
      />
      <Image
        src="/purchase_successful_large.svg"
        width={294.96}
        height={307}
        loading="eager"
        className="mx-auto mb-4 w-full max-w-[294.96px] h-auto md:block hidden"
        alt="Dados não encontrados..."
      />
      <Button
        variant="secondary"
        className="bg-primary hover:bg-primary/80 text-white text-xs mt-6 uppercase w-43.25 h-10 "
        size={"lg"}
        onClick={() => (window.location.href = "/")}
      >
        Voltar
      </Button>
    </div>
  );
};
