"use client";
import { titleFont } from "@/config/fonts";
import { useCartStore, useUiStore } from "@/store";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

export const TopMenu = () => {
  const openMenu = useUiStore((state) => state.openSideMenu);
  const totalItemsInCart: number = useCartStore((state) =>
    state.getTotalItems()
  );

  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <nav className="flex px-5 items-center justify-between w-full">
      {/* Logo */}
      <div>
        <Link href="/">
          <span
            className={`${titleFont.className.toString()} antialiased font-bold`}
          >
            Teslo
          </span>
          <span> | Shop</span>
        </Link>
      </div>
      {/* Cerrar el menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/men"
        >
          hombres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/women"
        >
          Mujeres
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          href="/gender/kid"
        >
          Niños
        </Link>
      </div>
      {/* Search cart menu */}
      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>{" "}
        <Link
          href={totalItemsInCart === 0 && loaded ? "/emty" : "/cart"}
          className="mx-2"
        >
          <div className="relative">
            {loaded && totalItemsInCart > 0 && (
              <span className="fade-in absolute text-xs rounded-full px-1 font-bold -top-2 bg-blue-700 text-white -right-2">
                {totalItemsInCart}
              </span>
            )}
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>
        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-gray-100"
          onClick={openMenu}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
