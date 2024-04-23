"use server";
import { signIn } from "@/auth.config";
import { AuthError } from "next-auth";

// ...

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    console.log("formData", formData);
    //console.log("formData", Object.fromEntries(formData));
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
