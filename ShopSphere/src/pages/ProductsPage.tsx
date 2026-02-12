import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const ctx = useContext(ProductContext);

  if (!ctx) return null;

  const { products, deleteProduct } = ctx;

  return (
    <div className="page">
      <h1 className="page-title">Ürünler</h1>

      <ProductList products={products} onDelete={deleteProduct} />
    </div>
  );
}
