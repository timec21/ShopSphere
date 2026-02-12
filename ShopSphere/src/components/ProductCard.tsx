import { useNavigate } from "react-router-dom";

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  imageUrl?: string;
};

export default function ProductCard({
  product,
  onDelete,
}: {
  product: Product;
  onDelete: (id: string) => void;
}) {
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm("Emin misin?");
    if (ok) onDelete(product.id);
  };

  return (
    <div className="product-card">
      <div className="product-card__top">
        <h3 className="product-title">{product.name}</h3>
        <span className="badge">{product.category}</span>
      </div>

      <p className="product-price">{product.price} ₺</p>

      <div className="product-actions">
        <button
          className="btn btn-secondary"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          Detay
        </button>
        <button className="btn btn-danger" onClick={handleDelete}>
          Sil
        </button>
      </div>
    </div>
  );
}
