import { CartProduct } from "@/interfaces";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  cart: CartProduct[];

  getTotalItems: () => number;
  getSummaryInformation: () => {
    itemsInCart: number;
    subtotal: number;
    tax: number;
    total: number;
  };

  // TODO: Implementar la logica para guardar el carrito en el localstorage
  addProductToCart: (product: CartProduct) => void;
  updateProductQuantity: (product: CartProduct, quantity: number) => void;
  removeProduct: (product: CartProduct) => void;
}

// Creando el store de zustand
export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],

      // Metodos

      // Obtener la cantidad total de productos en el carrito
      getTotalItems: () => {
        const { cart } = get();
        return cart.reduce((acc, item) => acc + item.quantity, 0);
      },

      getSummaryInformation: () => {
        const { cart } = get();

        const itemsInCart = cart.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const subtotal = cart.reduce(
          (acc, item) => acc + item.precio * item.quantity,
          0
        );
        const tax = subtotal * 0.15;
        const total = subtotal + tax;

        return {
          itemsInCart,
          subtotal,
          tax,
          total,
        };
      },

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

      updateProductQuantity: (product: CartProduct, quantity: number) => {
        const { cart } = get();

        const updateCartProduct = cart.map((item) => {
          if (item.id === product.id && item.size === product.size) {
            return { ...item, quantity };
          }
          return item;
        });

        set({ cart: updateCartProduct });
      },
      removeProduct(product: CartProduct) {
        const { cart } = get();
        const newCart = cart.filter(
          (item) => item.id !== product.id || item.size !== product.size
        );
        set({ cart: newCart });
      },
    }),
    {
      name: "shopping-cart",
    }
  )
);
