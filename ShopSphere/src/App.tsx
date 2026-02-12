import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ProductProvider } from "./contexts/ProductContext";

import ProductsPage from "./pages/ProductsPage";

import AddProductPage from "./pages/AddProductPage";

import ProductDetailPage from "./pages/ProductDetailPage";
import "./App.css";



function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductsPage />} />
           <Route path="/add" element={<AddProductPage />} /> 
           <Route path="/product/:id" element={<ProductDetailPage />} /> 
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
