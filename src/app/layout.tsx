import type { Metadata } from "next";
import { inter } from "@/config/fonts";

import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
  ),
  title: {
    template: "%s - Teslo | Shop",
    default: "Home - Teslo | Shop",
  },
  description: "Una tienda de productos de calidad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
