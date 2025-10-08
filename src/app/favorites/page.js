"use client";

import { useState, useEffect } from "react";

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  // LocalStorage-с favorites ба cart унших
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setFavorites(storedFavorites);
    setCart(storedCart);
  }, []);

  // Favorite устгах
  const removeFavorite = (productId) => {
    const updated = favorites.filter((p) => p.id !== productId);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  // Сагсанд нэмэх
  const handleAddToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${product.title.mn} таны сагсанд нэмэгдлээ! 🛒`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>❤️ Таалагдсан бүтээгдэхүүнүүд</h1>

      {favorites.length === 0 ? (
        <p style={styles.empty}>Одоогоор таалагдсан бүтээгдэхүүн байхгүй байна.</p>
      ) : (
        <div style={styles.grid}>
          {favorites.map((product, index) => (
            <div key={index} style={styles.card}>
              <img
                src={product.img}
                alt={product.title.mn}
                style={styles.image}
              />
              <h3 style={styles.name}>{product.title.mn}</h3>
              <p style={styles.price}>{product.price}</p>

              <div style={styles.buttonGroup}>
                <button
                  onClick={() => handleAddToCart(product)}
                  style={{ ...styles.button, background: "#2196f3" }}
                >
                  🛒 Сагсанд хийх
                </button>
                <button
                  onClick={() => removeFavorite(product.id)}
                  style={{ ...styles.button, background: "#f44336" }}
                >
                  ❌ Хасах
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "40px 20px",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    marginBottom: "20px",
  },
  empty: {
    textAlign: "center",
    color: "#777",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    transition: "0.3s",
    background: "#fff",
    textAlign: "center",
    padding: "10px",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px",
  },
  name: {
    fontSize: "18px",
    margin: "10px 0 5px",
  },
  price: {
    color: "#009688",
    fontWeight: "bold",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    marginTop: "10px",
  },
  button: {
    flex: 1,
    border: "none",
    color: "#fff",
    padding: "8px 0",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "0.3s",
  },
};
