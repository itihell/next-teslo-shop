import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  // TODO: Implementar la logica para guardar el carrito en el localstorage
  addProductToCart: (product: CartProduct) => void;
  // UpdateProductQuantity
  // RemoveProductFromCart
}

// Creando el store de zustand
export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      // Metodos
      addProductToCart: (product: CartProduct) => {
        const { cart } = get();

        // Verificar si el producto ya esta en el carrito
        const productInCart = cart.some(
          (item) => item.id === product.id && item.size === product.size
        );

        if (!productInCart) {
          set({ cart: [...cart, product] });
          return;
        }

        // Si el producto existe por talla, se actualiza la cantidad
        const updateCartProduct = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity: item.quantity + product.quantity };
          }
          return item;
        });

        set({ cart: updateCartProduct });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
