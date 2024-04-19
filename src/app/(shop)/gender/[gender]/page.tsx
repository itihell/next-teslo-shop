import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { Gender } from "@prisma/client";
import { notFound, redirect } from "next/navigation";

interface Props {
  params: {
    gender: string;
  };
  searchParams: {
    page?: number;
  };
}

const label: Record<string, string> = {
  men: "Hombres",
  women: "Mujeres",
  kid: "Niños",
  unisex: "Unisex",
};

export default async function CategoryPage({ params, searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;

  const { gender } = params;
  const { products, totalPages, currentPage } =
    await getPaginateProductsWithImages({
      page,
      gender: gender as Gender,
    });

  if (products.length === 0) return redirect(`/gender/${gender}`);
  // if (id === "kid") {
  //   notFound();
  // }

  return (
    <div>
      <Title
        title={`Artículos de ${label[gender]}`}
        subtitle={`Todos los productos`}
        className="mb-2"
      />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </div>
  );
}
