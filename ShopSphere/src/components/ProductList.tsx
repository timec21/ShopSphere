import ProductCard from "./ProductCard";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl?: string;
};

export default function ProductList({
  products,
  onDelete,
}: {
  products: Product[];
  onDelete: (id: string) => void;
}) {
  if (products.length === 0) {
    return <p style={{ color: "white" }}>Henüz ürün yok. Ürün ekleyin.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onDelete={onDelete} />
      ))}
    </div>
  );
}
