"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const NotFoundData = () => {
  return (
    <div className=" bg-white rounded-sm p-20 mx-4 text-center md:pb-30">
      <h1 className="text-xl font-bold text-center mx-8   text-black">
        Parece que não há nada por aqui :(
      </h1>
      <Image
        src="/notfound_data.svg"
        width={230}
        height={323}
        className="mx-auto mb-4 md:hidden"
        alt="Dados não encontrados..."
      />
      <Image
        src="/notfound_data_large.svg"
        width={530}
        height={823}
        className="mx-auto mb-4 md:block hidden"
        alt="Dados não encontrados..."
      />
      <Link href="/" className="inline-block">
        <Button
          variant="secondary"
          className="bg-primary hover:bg-primary/80 text-white text-xl p-8 mt-6"
          size={"lg"}
        >
          Recarregar página
        </Button>
      </Link>
    </div>
  );
};
