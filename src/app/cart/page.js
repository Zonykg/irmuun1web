"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);

  const removeFromCart = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>🛒 Таны сагс</h1>
      {cart.length === 0 ? (
        <p>Таны сагс хоосон байна.</p>
      ) : (
        <div className="cart-grid">
          {cart.map((item, index) => (
            <div key={index} className="cart-card">
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.price}₮</p>
              <button onClick={() => removeFromCart(index)}>Хасах</button>
            </div>
          ))}
        </div>
      )}
      <h2>Нийт дүн: {totalPrice.toLocaleString()}₮</h2>

      <style jsx>{`
        .container {
          padding: 2rem;
        }
        .cart-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .cart-card {
          border: 1px solid #ccc;
          padding: 1rem;
          border-radius: 8px;
          width: 200px;
          text-align: center;
        }
        img {
          width: 100%;
          height: 150px;
          object-fit: cover;
        }
        button {
          background: #ff5252;
          border: none;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          margin-top: 0.5rem;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}
