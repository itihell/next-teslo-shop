import { QuantitySelector, Title } from "@/components";
import Link from "next/link";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const pruductsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CheckOutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Verificar orden" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Ajustar elementos</span>
            <Link href="/cart">Editar carrito</Link>

            {/* Items del carrito */}

            {pruductsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />
                <div>
                  <p>{product.title}</p>
                  <p>{product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                  <button className="underline mt-3">Remover</button>
                </div>
              </div>
            ))}
          </div>

          {/* CheckOut - Resumen de orden*/}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Dirección de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Carlos Perez</p>
              <p>Zona Baja </p>
              <p>Nueva Zeleanda</p>
              <p>Pereira</p>
              <p>CP 123123</p>
              <p>123.123.123</p>
            </div>

            {/* Dividir */}
            <div className="w-full h-0.5 rounded bg-gray-200 mb-10"></div>

            <h2 className="text-2xl mb-2">Resumen de orden</h2>
            <div className="grid grid-cols-2">
              <span>No Productos</span>
              <span className="text-right">3 Artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100</span>

              <span>Impuesto (15%)</span>
              <span className="text-right">$ 100</span>

              <span className="mt-5 text-2xl ">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 200</span>
            </div>
            <div className="mt-5 mb-2 w-full">
              <p className="mb-5">
                {/* Disclaimer */}
                <span className="text-xs">
                  Al hacer clic en Colocar orden, aceptas nuestros{" "}
                  <a href="#" className="underline">
                    términos y condiciones
                  </a>{" "}
                  y{" "}
                  <a href="#" className="underline">
                    política de privacidad
                  </a>
                </span>
              </p>
              <Link
                className="flex btn-primary justify-center"
                href="/orders/123"
              >
                Colocar Orden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
