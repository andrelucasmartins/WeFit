import Link from "next/link";
import { MdShoppingBasket } from "react-icons/md";

export const Header = () => {
  return (
    <header className="w-full py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center my-4 justify-between">
        <h1 className="text-2xl font-bold">WeMovies</h1>
        <div className="flex items-center gap-6 justify-around">
          <div className="flex justify-end gap-1 flex-col ">
            <div className="text-white hover:text-foreground transition-colors text-sm hidden md:block">
              Meu carrinho
            </div>
            <div className="text-foreground/70 hover:text-foreground transition-colors text-sm text-right md:left">
              0 itens
            </div>
          </div>
          <Link href="#" className="hover:text-foreground transition-colors">
            <MdShoppingBasket className="text-3xl" />
          </Link>
        </div>
      </div>
    </header>
  );
};
