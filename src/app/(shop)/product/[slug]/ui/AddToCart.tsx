"use client";

import { QuantitySelector, SizeSelector } from "@/components";
import { Product, Size } from "@/interfaces";
import { useState } from "react";

interface Props {
  product: Product;
}

export const AddToCart = ({ product }: Props) => {
  const [size, setSize] = useState<Size | undefined>();
  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    console.log(size, quantity);
  };

  return (
    <>
      {/* Selector de tallas */}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={size}
        onSizeChange={setSize}
      />
      {/* Selector de cantidad */}
      <QuantitySelector quantity={quantity} onQuantityChange={setQuantity} />

      {/* Boton */}
      <button onClick={addToCart} className="btn-primary my-5">Agregar al carrito</button>
    </>
  );
};
