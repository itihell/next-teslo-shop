"use server";
import prisma from "@/lib/prisma";

export const deleteUserAddress = async (userId: string) => {
  try {
    const deleted = await prisma.userAddress.deleteMany({
      where: {
        userId,
      },
    });

    return {
      ok: true,
      address: deleted,
      message: "Dirección eliminada correctamente",
    };
  } catch (error) {
    console.log(error);
    return "No se pudo eliminar la dirección del usuario";
  }
};
