"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ProductionPage() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);

  const products = [
    {
      id: 1,
      title: "Зохиолын ном",
      category: "Ном",
      price: "20,000₮ / 100ш",
      img: "https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1646811400-92057303.jpg&w=400&h=500&zc=2&q=90&s=1",
      badge: "",
      rating: 4,
    },
    {
      id: 2,
      title: "Дэвтэр",
      category: "Дэвтэр",
      price: "28,000₮",
      oldPrice: "35,000₮",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXXfjSpNqn5qc7vfp5GbzUZI6yCf-7Ll1ZQ&s",
      badge: "Хямдрал",
      rating: 5,
    },
    {
      id: 3,
      title: "Бизнесийн илтгэл брошур",
      category: "Брошур",
      price: "120,000₮ / 500ш",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      badge: "",
      rating: 4,
    },
  ];

  const handleNewsletter = (e) => {
    e.preventDefault();
    alert("Бүртгэл амжилттай боллоо!");
    e.target.reset();
  };

  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (
        e.target.tagName === "A" &&
        e.target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const targetId = e.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
        setMenuActive(false);
      }
    };

    const animateOnScroll = () => {
      const elements = document.querySelectorAll(
        ".service-card, .product-card, .about-img, .about-text"
      );

      elements.forEach((el) => {
        const elPos = el.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (elPos < screenPos) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
        }
      });
    };

    document.addEventListener("click", handleAnchorClick);
    window.addEventListener("scroll", animateOnScroll);
    window.addEventListener("load", animateOnScroll);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", animateOnScroll);
      window.removeEventListener("load", animateOnScroll);
    };
  }, []);

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <span>🖨️</span>
              <span>Admon</span>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
            <ul className={`nav-links ${menuActive ? "active" : ""}`}>
              <li>
                <Link href="/">Нүүр</Link>
              </li>
              <li>
                <Link href="/services">Үйлчилгээ</Link>
              </li>
              <li>
                <Link href="/production">Бүтээгдэхүүн</Link>
              </li>
              <li>
                <Link href="#about">Бидний тухай</Link>
              </li>
              <li>
                <Link href="#contact">Холбогдох</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="products" className="products">
        <div className="container">
          <div className="section-title">
            <h2>Бидний бүтээгдэхүүн</h2>
            <p>Бидний санал болгож буй шилдэг хэвлэмэл бүтээгдэхүүнүүд</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
                <div className="product-img">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={400}
                    height={500}
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="product-content">
                  <span className="product-category">{product.category}</span>
                  <h3>{product.title}</h3>
                  <div className="product-rating">
                    {[...Array(5)].map((_, i) => (
                      <i
                        key={i}
                        className={i < product.rating ? "fas fa-star" : "far fa-star"}
                      ></i>
                    ))}
                  </div>
                  <div className="product-price">
                    {product.oldPrice && (
                      <span
                        style={{
                          textDecoration: "line-through",
                          color: "#999",
                          marginRight: "10px",
                        }}
                      >
                        {product.oldPrice}
                      </span>
                    )}
                    <span>{product.price}</span>
                  </div>
                  <div className="product-actions">
                    <Link href="#contact" className="btn btn-sm">
                      Захиалах
                    </Link>
                    <Link href={`/products/${product.id}`} className="btn btn-sm btn-secondary">
                      Дэлгэрэнгүй
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <Link href="#products" className="btn">
              Бүх бүтээгдэхүүн үзэх
            </Link>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>Admon</h3>
              <p>
                Монголын хэвлэлийн салбарын тэргүүлэгч компани. Бид чанар,
                найдвартай байдал, хэрэглэгчийн сэтгэл ханамжийг дээд зэргээр
                тавьдаг.
              </p>
              <div className="social-links">
                <Link href="#">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="#">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>

            <div className="footer-column">
              <h3>Холбоо барих</h3>
              <div className="footer-contact-info">
                <p>
                  <i className="fas fa-map-marker-alt"></i> Улаанбаатар хот, СХД,
                  1-р хороо
                </p>
                <p>
                  <i className="fas fa-phone"></i> +(976) 12345678
                </p>
                <p>
                  <i className="fas fa-envelope"></i> info@admon.mn
                </p>
                <p>
                  <i className="fas fa-clock"></i> Даваа-Баасан: 9:00 - 18:00
                </p>
              </div>
            </div>

            <div className="footer-column">
              <h3>Мэдээлэл авах</h3>
              <form onSubmit={handleNewsletter}>
                <input type="email" placeholder="И-мэйл хаяг" required />
                <button type="submit" className="btn btn-sm" style={{ width: "100%", marginTop: "0.5rem" }}>
                  Бүртгүүлэх
                </button>
              </form>
            </div>
          </div>

          <div className="copyright">
            <p>&copy; 2025 Admon Хэвлэлийн үйлдвэр. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer> 
    </>
  );
}
