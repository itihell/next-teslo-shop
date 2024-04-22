import { CartProducto } from "@/interfaces";
import { create } from "zustand";

interface State {
  cart: CartProducto[];

  // TODO: Implementar la logica para guardar el carrito en el localstorage
  addProductToCart: (product: CartProducto) => void;
  // UpdateProductQuantity
  // RemoveProductFromCart
}

// Creando el store de zustand
export const useCartStore = create<State>((set, get) => ({
  cart: [],

  // Metodos
  addProductToCart: (product: CartProducto) => {
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
}));
