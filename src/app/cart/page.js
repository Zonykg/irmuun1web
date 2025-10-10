"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const updateQuantity = (product, amount) => {
    const updatedCart = cart.map((p) => {
      if (p.title.mn === product.title.mn) {
        const newQty = (p.quantity || 1) + amount;
        return { ...p, quantity: newQty > 0 ? newQty : 1 };
      }
      return p;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((p) => p.title.mn !== product.title.mn);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalPrice = cart.reduce((acc, item) => {
    const priceNum = parseFloat(item.price.replace("$", ""));
    return acc + priceNum * (item.quantity || 1);
  }, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h1>🛒 Танай сагс</h1>
      {cart.length === 0 ? (
        <p>Сагсанд бараа байхгүй байна.</p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {cart.map((product, idx) => (
            <div
              key={idx}
              style={{ display: "flex", border: "1px solid #ccc", padding: "10px", gap: "10px", alignItems: "center" }}
            >
              <img src={product.img} style={{ width: "100px", height: "100px", objectFit: "cover" }} />
              <div style={{ flex: 1 }}>
                <h3>{product.title.mn}</h3>
                <p>Үнэ: {product.price}</p>
                <p>Тоо: {product.quantity || 1}</p>
                <div style={{ display: "flex", gap: "5px", marginTop: "5px" }}>
                  <button onClick={() => updateQuantity(product, 1)}>➕</button>
                  <button onClick={() => updateQuantity(product, -1)}>➖</button>
                  <button onClick={() => removeFromCart(product)}>❌ Хасах</button>
                </div>
              </div>
            </div>
          ))}
          <h2>Нийт үнэ: ${totalPrice}</h2>
        </div>
      )}
    </div>
  );
}
