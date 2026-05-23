"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const PurchaseSuccessful = () => {
  return (
    <div className="w-full md:w-dvw md:h-full bg-white rounded p-20 mx-4 sm:mx-6 md:mx-8 text-center md:pb-30">
      <h1 className="text-xl font-bold text-center mx-8 text-black">
        Compra realizada com sucesso!
      </h1>
      <Image
        src="/purchase_successful.svg"
        width={238}
        height={248}
        className="mx-auto my-6 w-full max-w-59.5 h-auto md:hidden"
        alt="Compra realizada com sucesso..."
      />
      <Image
        src="/purchase_successful_large.svg"
        width={295}
        height={307}
        className="mx-auto my-6 w-full max-w-[295px] h-auto md:block hidden"
        alt="Compra realizada com sucesso..."
      />
      <Button
        variant="secondary"
        className="bg-primary hover:bg-primary/80 text-white text-xs rounded uppercase w-43.25 h-10 "
        size={"lg"}
        onClick={() => (window.location.href = "/")}
      >
        Voltar
      </Button>
    </div>
  );
};
