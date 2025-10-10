"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("mn");

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const savedTheme = localStorage.getItem("theme") || "light";

    setFavorites(storedFavorites);
    setCart(storedCart);
    setTheme(savedTheme);
    document.body.style.background = savedTheme === "dark" ? "#121212" : "#f5f5f5";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.style.background = newTheme === "dark" ? "#121212" : "#f5f5f5";
  };

  const toggleLanguage = () => setLanguage(language === "mn" ? "en" : "mn");

  const removeFavorite = (productId) => {
    const updated = favorites.filter((p) => p.id !== productId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const handleAddToCart = (product) => {
    if (!cart.find((p) => p.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.title[language]} ${language === "mn" ? "сагсанд нэмэгдлээ!" : "added to cart!"}`);
    } else {
      alert(`${product.title[language]} ${language === "mn" ? "сагсанд аль хэдийнэ байна!" : "is already in cart!"}`);
    }

    if (!favorites.find((p) => p.id === product.id)) {
      const updatedFav = [...favorites, product];
      setFavorites(updatedFav);
      localStorage.setItem("favorites", JSON.stringify(updatedFav));
    }
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div style={{ minHeight: "100vh", padding: "40px 20px", background: colors.bg, color: colors.text }}>
      <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1>❤️ {language === "mn" ? "Таалагдсан бүтээгдэхүүнүүд" : "Favorites"}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={toggleTheme} style={{ background: colors.button, color: "#fff", padding: "8px 16px", borderRadius: "6px" }}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button onClick={toggleLanguage} style={{ background: colors.button, color: "#fff", padding: "8px 16px", borderRadius: "6px" }}>
            {language === "mn" ? "EN" : "MN"}
          </button>
          <Link href="/" style={{ background: "#2196f3", color: "#fff", padding: "8px 16px", borderRadius: "6px", textDecoration: "none" }}>
            {language === "mn" ? "Нүүр хуудас руу буцах" : "Back to Home"}
          </Link>
        </div>
      </header>

      {favorites.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          {language === "mn" ? "Одоогоор таалагдсан бүтээгдэхүүн байхгүй байна." : "No favorites yet."}
        </p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" }}>
          {favorites.map((product) => (
            <div key={product.id} style={{ background: colors.card, borderRadius: "12px", padding: "10px", textAlign: "center" }}>
              <Image src={product.img} alt={product.title[language]} width={300} height={180} style={{ borderRadius: "10px", objectFit: "cover" }} />
              <h3>{product.title[language]}</h3>
              <p style={{ color: colors.price }}>{product.price}</p>
              <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <button onClick={() => handleAddToCart(product)} style={{ flex: 1, background: "#2196f3", color: "#fff", padding: "8px 0", borderRadius: "6px" }}>
                  🛒 {language === "mn" ? "Сагсанд нэмэх" : "Add to Cart"}
                </button>
                <button onClick={() => removeFavorite(product.id)} style={{ flex: 1, background: "#f44336", color: "#fff", padding: "8px 0", borderRadius: "6px" }}>
                  ❌ {language === "mn" ? "Хасах" : "Remove"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const lightColors = { bg: "#f5f5f5", text: "#222", card: "#fff", price: "#e63946", button: "#333" };
const darkColors = { bg: "#121212", text: "#fff", card: "#1e1e1e", price: "#ff6b6b", button: "#333" };
