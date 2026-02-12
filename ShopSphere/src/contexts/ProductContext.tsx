import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const STORAGE_KEY = "shopsphere_products";

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<any[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
  }, [products]);

  const addProduct = (productData: any) => {
    const newProduct = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      ...productData,
    };
    setProducts((prev) => [newProduct, ...prev]);
  };

  const deleteProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const getProductById = (id: string) => {
    return products.find((p) => String(p.id) === String(id));
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, deleteProduct, getProductById }}>
      {children}
    </ProductContext.Provider>
  );
}
