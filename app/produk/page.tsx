import { getProducts } from "@/lib/db";
import ProdukSearch from "../components/ProdukSearch";
import Navbar from "../components/Navbar";

export default async function ProdukPage() {
  const products = await getProducts();

  return (
    <>
      <Navbar />
      <ProdukSearch products={products} />
    </>
  );
}