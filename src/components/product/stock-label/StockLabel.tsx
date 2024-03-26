import { titleFont } from "@/config/fonts";

export const StockLabel = () => {
  return (
    <h1 className={`${titleFont.className} antialiased font-bold text-xl`}>
      Stock: {30}
    </h1>
  );
};
