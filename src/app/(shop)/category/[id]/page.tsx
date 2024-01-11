import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface Props {
  params: {
    id: Category;
  };
}

const products = initialData.products;

const label: Record<Category, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Unisex",
};

export default function CategoryPage({ params }: Props) {
  const { id } = params;
  // if (id === "kid") {
  //   notFound();
  // }

  const productsCategory = products.filter((product) => product.gender === id);
  return (
    <div>
      <Title
        title={`Artículos de ${label[id]}`}
        subtitle={`Todos los productos`}
        className="mb-2"
      />
      <ProductGrid products={productsCategory} />
    </div>
  );
}
