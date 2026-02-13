import { useContext, useMemo, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import ProductList from "../components/ProductList";

export default function ProductsPage() {
  const ctx = useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  if (!ctx) return null;

  const { products, deleteProduct } = ctx;

  // Kategorileri ürünlerden üret (unique)
  const categories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p: any) => {
      if (p.category) set.add(String(p.category).trim());
    });
    return ["all", ...Array.from(set)];
  }, [products]);

  // Arama + kategoriye göre filtrele
  const filteredProducts = useMemo(() => {
    const q = search.trim().toLowerCase();

    return products.filter((p: any) => {
      const matchSearch =
        q === "" ||
        String(p.name).toLowerCase().includes(q) ||
        String(p.description || "").toLowerCase().includes(q);

      const matchCategory =
        selectedCategory === "all" ||
        String(p.category).toLowerCase() === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [products, search, selectedCategory]);

  return (
    <div className="page">
      <div className="toolbar">
        <input
          className="toolbar-input"
          placeholder="Ürün ara..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="toolbar-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((c) => (
            <option key={c} value={c === "all" ? "all" : c.toLowerCase()}>
              {c === "all" ? "Tüm Kategoriler" : c}
            </option>
          ))}
        </select>

        <div className="toolbar-count">
          <span className="count-number">{filteredProducts.length}</span>
          <span className="count-text">ürün</span>
        </div>
      </div>

      <h1 className="page-title">Ürünler</h1>

      <ProductList products={filteredProducts} onDelete={deleteProduct} />
    </div>
  );
}
