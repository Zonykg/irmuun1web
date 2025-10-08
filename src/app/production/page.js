
"use client";

import { useState, useEffect } from "react";
import styles from "./page.module.css"; 
export default function ProductionPage() {
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);


  useEffect(() => {
    const handleAnchorClick = (e) => {
      if (e.target.tagName === "A" && e.target.getAttribute("href")?.startsWith("#")) {
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
              <li><a href="/">Нүүр</a></li>
              <li><a href="/services">Үйлчилгээ</a></li>
              <li><a href="/production">Бүтээгдэхүүн</a></li>
              <li><a href="#about">Бидний тухай</a></li>
              <li><a href="#contact">Холбогдох</a></li>
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
            
            <div className="product-card">
              <div
                className="product-img"
                style={{
                  backgroundImage:
                    "url('https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1646811400-92057303.jpg&w=400&h=500&zc=2&q=90&s=1')",
                }}
              ></div>
              <div className="product-content">
                <span className="product-category">Ном</span>
                <h3>Зохиолын ном</h3>
                <div className="product-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="product-price">20,000₮ / 100ш</div>
                <div className="product-actions">
                  <a href="#contact" className="btn btn-sm">Захиалах</a>
                  <a href="#" className="btn btn-sm btn-secondary">Дэлгэрэнгүй</a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="product-card">
              <div className="product-badge">Хямдрал</div>
              <div
                className="product-img"
                style={{
                  backgroundImage:
                    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSXXfjSpNqn5qc7vfp5GbzUZI6yCf-7Ll1ZQ&s')",
                }}
              ></div>
              <div className="product-content">
                <span className="product-category">Дэвтэр</span>
                <h3>Дэвтэр</h3>
                <div className="product-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <div className="product-price">
                  <span style={{ textDecoration: "line-through", color: "#999", marginRight: "10px" }}>35,000₮</span>
                  <span>28,000₮</span>
                </div>
                <div className="product-actions">
                  <a href="#contact" className="btn btn-sm">Захиалах</a>
                  <a href="#" className="btn btn-sm btn-secondary">Дэлгэрэнгүй</a>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="product-card">
              <div
                className="product-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
                }}
              ></div>
              <div className="product-content">
                <span className="product-category">Брошур</span>
                <h3>Бизнесийн илтгэл брошур</h3>
                <div className="product-rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
                <div className="product-price">120,000₮ / 500ш</div>
                <div className="product-actions">
                  <a href="#contact" className="btn btn-sm">Захиалах</a>
                  <a href="#" className="btn btn-sm btn-secondary">Дэлгэрэнгүй</a>
                </div>
              </div>
            </div>
          </div>

          <div style={{ textAlign: "center", marginTop: "4rem" }}>
            <a href="#products" className="btn">Бүх бүтээгдэхүүн үзэх</a>
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
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Холбоо барих</h3>
              <div className="footer-contact-info">
                <p><i className="fas fa-map-marker-alt"></i> Улаанбаатар хот, СХД, 1-р хороо</p>
                <p><i className="fas fa-phone"></i> +(976) 12345678</p>
                <p><i className="fas fa-envelope"></i> info@admon.mn</p>
                <p><i className="fas fa-clock"></i> Даваа-Баасан: 9:00 - 18:00</p>
              </div>
            </div>

            <div className="footer-column">
              <h3>Мэдээлэл авах</h3>
              <p>Бидний шинэ бүтээгдэхүүн, үйлчилгээний талаар мэдээлэл авахыг хүсвэл и-мэйл хаягаа үлдээнэ үү.</p>
              <div className="form-group" style={{ marginTop: "1rem" }}>
                <input type="email" className="form-control" placeholder="И-мэйл хаяг" />
                <button type="submit" className="btn btn-sm" style={{ width: "100%", marginTop: "0.5rem" }}>Бүртгүүлэх</button>
              </div>
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
