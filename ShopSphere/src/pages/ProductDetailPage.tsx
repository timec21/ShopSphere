import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

export default function ProductDetailPage() {
  const ctx = useContext(ProductContext);
  const { id } = useParams();
  const navigate = useNavigate();

  if (!ctx) return null;
  const { getProductById } = ctx;

  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="page">
        <h1 className="page-title">Ürün Detay</h1>
        <p style={{ color: "white" }}>Ürün bulunamadı.</p>
        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Geri
        </button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1 className="page-title">Ürün Detay</h1>

      <div className="detail-card">
        {product.imageUrl && (
          <img className="detail-img" src={product.imageUrl} alt={product.name} />
        )}

        <h2 style={{ color: "white", marginTop: 0 }}>{product.name}</h2>
        <p style={{ color: "white" }}>
          <b>Fiyat:</b> {product.price} ₺
        </p>
        <p style={{ color: "white" }}>
          <b>Kategori:</b> {product.category}
        </p>
        <p style={{ color: "white" }}>
          <b>Açıklama:</b> {product.description || "-"}
        </p>

        <button className="btn btn-secondary" onClick={() => navigate("/")}>
          Geri
        </button>
      </div>
    </div>
  );
}
