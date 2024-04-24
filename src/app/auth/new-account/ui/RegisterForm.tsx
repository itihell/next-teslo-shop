"use client";

import { useForm } from "react-hook-form";
import Link from "next/link";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export const RegisterForm = () => {
  const { register, handleSubmit } = useForm<FormInputs>();
  return (
    <form className="flex flex-col">
      <label htmlFor="email">Nombre completo</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="text"
        {...register("name", { required: true })}
      />

      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        {...register("password", { required: true, minLength: 6 })}
      />

      <button className="btn-primary">Crear cuenta</button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/login" className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};
