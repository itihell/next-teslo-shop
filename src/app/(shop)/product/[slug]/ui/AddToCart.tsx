"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size, CartProduct } from "@/interfaces";
import { useCartStore } from "@/store";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);
  const [posted, setPosted] = useState<boolean>(false);

  const addToCart = () => {
    setPosted(true);
    if (!size) return;
    //console.log(size, quantity, product);

    //TODO: Implementar la logica para agregar al carrito
    const cartProduc: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      precio: product.price,
      quantity: quantity,
      size: size,
      image: product.images[0],
    };

    addProductToCart(cartProduc);

    // Limpiar los campos
    setPosted(false);
    setSize(undefined);
    setQuantity(1);
  };

  return (
    <>
      {posted && !size && (
        <span className="mt-2 text-red-500 fad">
          Debe de seleccionar un talla *
        </span>
      )}
      {/* Selector de tallas */}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChange={setSize}
      />
      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/* Boton */}
      <button onClick={addToCart} className="btn-primary my-5">
        Agregar al carrito
      </button>
    </>
  );
};
