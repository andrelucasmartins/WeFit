"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const NotFoundData = () => {
  return (
    <div className=" bg-white rounded md:pt-16 text-center md:pb-[143.64] p-16">
      <h1 className="text-xl font-bold text-center mx-8   text-black">
        Parece que não há nada por aqui :(
      </h1>
      <Image
        src="/notfound_data.svg"
        width={178.63}
        height={265.36}
        className="mx-auto mb-4 md:hidden my-6"
        alt="Dados não encontrados..."
      />
      <Image
        src="/notfound_data_large.svg"
        width={447}
        height={265.36}
        className="mx-auto mb-4 md:block hidden my-6 "
        alt="Dados não encontrados..."
      />
      <Link href="/" className="inline-block">
        <Button
          variant="secondary"
          className="bg-primary hover:bg-primary/80 font-bold text-white text-xs p-2 rounded gap-3 w-43.25"
          size={"lg"}
        >
          Voltar a tela inicial
        </Button>
      </Link>
    </div>
  );
};
