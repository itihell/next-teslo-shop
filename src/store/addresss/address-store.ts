import { create } from "zustand";
import { persist } from "zustand/middleware";

interface state {
  address: {
    firstName: string;
    lastName: string;
    address: string;
    address2: string;
    postalCode: string;
    country: string;
    phone: string;
  };

  setAddress: (address: state["address"]) => void;
}
export const addressStore = create<state>()(
  persist(
    (set, get) => ({
      address: {
        firstName: "",
        lastName: "",
        address: "",
        address2: "",
        postalCode: "",
        country: "",
        phone: "",
      },
      setAddress: (address) => set({ address }),
    }),
    {
      name: "address-storage",
    }
  )
);
