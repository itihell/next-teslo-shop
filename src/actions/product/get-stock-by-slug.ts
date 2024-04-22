"use server";
import prisma from "@/lib/prisma";
import { sleep } from "@/utils";

export const getStockBySlug = async (slug: string): Promise<number> => {
  try {
    const product = await prisma.product.findFirst({
      select: {
        inStock: true,
      },
      where: {
        slug,
      },
    });

    return product?.inStock ?? 0;
  } catch (error) {
    throw new Error("Error al obtener el stock del producto");
  }
};
