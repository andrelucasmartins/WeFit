"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export const NotFoundData = () => {
  return (
    <div className="w-full md:w-dvw md:h-full bg-white rounded-sm p-20 mx-4 text-center md:pb-30">
      <h1 className="text-xl font-bold text-center mx-8   text-black">
        Parece que não há nada por aqui :(
      </h1>
      )
      <Image
        src="/notfound_data.svg"
        width={"230"}
        height={323}
        className="mx-auto mb-4 h-78 md:hidden"
        alt="Dados não encontrados..."
      />
      <Image
        src="/notfound_data_large.svg"
        width={"530"}
        height={823}
        className="mx-auto mb-4 h-78 md:block hidden"
        alt="Dados não encontrados..."
      />
      <Button
        variant="secondary"
        className="bg-primary hover:bg-primary/80 text-white text-xl p-8 mt-6"
        size={"lg"}
        onClick={() => window.location.reload()}
      >
        Recarregar página
      </Button>
    </div>
  );
};
