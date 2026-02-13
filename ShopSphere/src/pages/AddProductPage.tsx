import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../contexts/ProductContext";

export default function AddProductPage() {
  const ctx = useContext(ProductContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [price, setPrice] = useState<string>(""); // input string gelir
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  if (!ctx) return null;
  const { addProduct } = ctx;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Validasyon
    if (!name.trim()) {
      alert("Ürün adı boş olamaz!");
      return;
    }

    const numericPrice = Number(price);
    if (Number.isNaN(numericPrice) || numericPrice <= 0) {
      alert("Fiyat sayı olmalı ve 0'dan büyük olmalı!");
      return;
    }

    addProduct({
      name: name.trim(),
      price: numericPrice,
      category: category.trim(),
      description: description.trim(),
      imageUrl: imageUrl.trim() || undefined, // boşsa ekleme
    });

    navigate("/");
  };

  return (
    <div className="page">
      <h1 className="page-title">Ürün Ekle</h1>

      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          Ürün Adı
          <input className="input" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <label className="label">
          Fiyat
          <input
            className="input"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="örn: 250"
          />
        </label>

        <label className="label">
          Kategori
          <input className="input" value={category} onChange={(e) => setCategory(e.target.value)} />
        </label>

        <label className="label">
          Açıklama
          <textarea
            className="input"
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label className="label">
          Görsel URL (opsiyonel)
          <input
            className="input"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="https://..."
          />
        </label>

        <div style={{ display: "flex", gap: 10 }}>
          <button className="btn btn-secondary" type="button" onClick={() => navigate("/")}>
            İptal
          </button>
          <button className="btn btn-primary" type="submit">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
