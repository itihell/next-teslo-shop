import { QuantitySelector, SizeSelector } from "@/components";
import { Product } from "@/interfaces";

interface Props {
  product: Product;
}

export const AddToCart = ({product }:Props) => {
  return (
    <>
      {/* Selector de tallas */}
      <SizeSelector
        availableSizes={product.sizes}
        selectedSize={product.sizes[0]}
      />
      {/* Selector de cantidad */}
      <QuantitySelector quantity={0} />

      {/* Boton */}
      <button className="btn-primary my-5">Agregar al carrito</button>
    </>
  );
};
