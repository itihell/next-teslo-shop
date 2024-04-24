"use server";
import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Las credenciales no son correctas.";
        default:
          return "Algo salió mal. Por favor intenta de nuevo.";
      }
    }

    throw error;
  }
}
export const login = async (email: string, password: string) => {
  try {
    await signIn("credentials", { email, password });

    return {
      ok: true,
      message: "Usuario logueado correctamente",
    };
  } catch (error) {
    console.log(error);
  }
};
