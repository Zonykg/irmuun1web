"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FavoritesPage() {
  const router = useRouter();
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("mn");

  // Homepage-с ирсэн product-д id байх ёстой
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

  // Cart-д нэмэх үед favorites-д бас байх
  const handleAddToCart = (product) => {
    // Cart-д нэмэх
    if (!cart.find((p) => p.id === product.id)) {
      const updatedCart = [...cart, product];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      alert(`${product.title[language]} ${language === "mn" ? "сагсанд нэмэгдлээ!" : "added to cart!"}`);
    } else {
      alert(`${product.title[language]} ${language === "mn" ? "сагсанд аль хэдийнэ байна!" : "is already in cart!"}`);
    }

    // Favorites-д байхгүй бол нэмэх
    if (!favorites.find((p) => p.id === product.id)) {
      const updatedFav = [...favorites, product];
      setFavorites(updatedFav);
      localStorage.setItem("favorites", JSON.stringify(updatedFav));
    }
  };

  const colors = theme === "dark" ? darkColors : lightColors;

  return (
    <div style={{ ...styles.container, background: colors.bg, color: colors.text }}>
      <div style={styles.header}>
        <h1>❤️ {language === "mn" ? "Таалагдсан бүтээгдэхүүнүүд" : "Favorites"}</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={toggleTheme} style={{ ...styles.themeBtn, background: colors.button }}>
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
          <button onClick={toggleLanguage} style={{ ...styles.themeBtn, background: colors.button }}>
            {language === "mn" ? "EN" : "MN"}
          </button>
          <button onClick={() => router.push("/")} style={{ ...styles.themeBtn, background: "#2196f3" }}>
            {language === "mn" ? "Нүүр хуудас руу буцах" : "Back to Home"}
          </button>
        </div>
      </div>

      {favorites.length === 0 ? (
        <p style={styles.empty}>{language === "mn" ? "Одоогоор таалагдсан бүтээгдэхүүн байхгүй байна." : "No favorites yet."}</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((product) => (
            <div key={product.id} style={{ ...styles.card, background: colors.card }}>
              <img src={product.img} alt={product.title[language]} style={styles.image} />
              <h3>{product.title[language]}</h3>
              <p style={{ color: colors.price }}>{product.price}</p>
              <div style={styles.buttonGroup}>
                <button onClick={() => handleAddToCart(product)} style={{ ...styles.button, background: "#2196f3" }}>
                  🛒 {language === "mn" ? "Сагсанд нэмэх" : "Add to Cart"}
                </button>
                <button onClick={() => removeFavorite(product.id)} style={{ ...styles.button, background: "#f44336" }}>
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

// 🌞 Light mode өнгө
const lightColors = {
  bg: "#f5f5f5",
  text: "#222",
  card: "#fff",
  button: "#333",
  price: "#009688",
};

// 🌙 Dark mode өнгө
const darkColors = {
  bg: "#121212",
  text: "#f5f5f5",
  card: "#1e1e1e",
  button: "#555",
  price: "#80cbc4",
};

const styles = {
  container: { minHeight: "100vh", padding: "40px 20px", transition: "0.4s ease all" },
  header: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  themeBtn: { border: "none", color: "#fff", padding: "8px 16px", borderRadius: "6px", cursor: "pointer", transition: "0.3s" },
  empty: { textAlign: "center", color: "#777" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "20px" },
  card: { borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 8px rgba(0,0,0,0.2)", transition: "0.3s", textAlign: "center", padding: "10px" },
  image: { width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px" },
  buttonGroup: { display: "flex", justifyContent: "space-between", gap: "10px", marginTop: "10px" },
  button: { flex: 1, border: "none", color: "#fff", padding: "8px 0", borderRadius: "6px", cursor: "pointer", transition: "0.3s" },
};
