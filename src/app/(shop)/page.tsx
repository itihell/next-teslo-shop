import { getPaginateProductsWithImages } from "@/actions";
import { Pagination, ProductGrid, Title } from "@/components";
import { redirect } from "next/navigation";
interface Props {
  searchParams: {
    page?: number;
    take?: number;
  };
}

export default async function Home({ searchParams }: Props) {
  const page = searchParams.page ? parseInt(searchParams.page.toString()) : 1;
  const { products, totalPages, currentPage } =
    await getPaginateProductsWithImages({ page });

  if (products.length === 0) return redirect("/");

  return (
    <>
      <Title title="Tienda" subtitle="Todos los productos" />
      <ProductGrid products={products} />
      <Pagination totalPages={totalPages} />
    </>
  );
}
