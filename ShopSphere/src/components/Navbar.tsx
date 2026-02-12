import { Link } from "react-router-dom";
import logo from "../assets/logo.png";


export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo"></img>

      <div className="nav-links">
        <Link to="/">Ürünler</Link>
        <Link to="/add">Ürün Ekle</Link>
      </div>
    </nav>
  );
}
