
"use client";

import { useState, useEffect } from "react";

export default function ServicesPage() {
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
    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return (
    <>
      {/* ======= HEADER ======= */}
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <span>🖨️</span>
              <span>Admon</span>
            </div>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {menuActive ? "✖" : "☰"}
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

      {/* ======= SERVICES SECTION ======= */}
      <section id="services" className="services">
        <div className="container">
          <div className="section-title">
            <h2>Манай үйлчилгээ</h2>
            <p>Бидний санал болгож буй бүх төрлийн хэвлэлийн үйлчилгээ</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div
                className="service-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1350&q=80')",
                }}
              ></div>
              <div className="service-content">
                <h3>Ном хэвлэлт</h3>
                <p>Сургуулийн гарын авлага, уран зохиол, сурах бичиг зэрэг бүх төрлийн номын хэвлэлт</p>
                <a href="#contact" className="btn btn-sm">Дэлгэрэнгүй</a>
              </div>
            </div>

            <div className="service-card">
              <div
                className="service-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1588666309990-d68f08e3d4a6?auto=format&fit=crop&w=1350&q=80')",
                }}
              ></div>
              <div className="service-content">
                <h3>Брошур, каталог</h3>
                <p>Бизнесийн брошур, бүтээгдэхүүн каталог, илтгэл зэрэг өндөр чанарын хэвлэлүүд</p>
                <a href="#contact" className="btn btn-sm">Дэлгэрэнгүй</a>
              </div>
            </div>

            <div className="service-card">
              <div
                className="service-img"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=1350&q=80')",
                }}
              ></div>
              <div className="service-content">
                <h3>Тэмдэглэлийн дэвтэр</h3>
                <p>Сургууль, оффис, хувийн хэрэглээнд зориулсан олон төрлийн дэвтэр</p>
                <a href="#contact" className="btn btn-sm">Дэлгэрэнгүй</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======= FOOTER ======= */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Admon</h3>
              <p>
                Монголын хэвлэлийн салбарын тэргүүлэгч компани. Бид чанар, найдвартай байдал, хэрэглэгчийн сэтгэл ханамжийг дээд зэргээр тавьдаг.
              </p>
              <div className="social-links">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
              </div>
            </div>

            <div className="footer-column">
              <h3>Холбоос</h3>
              <ul>
                <li><a href="#services">Үйлчилгээ</a></li>
                <li><a href="/production">Бүтээгдэхүүн</a></li>
                <li><a href="#about">Бидний тухай</a></li>
                <li><a href="#contact">Холбогдох</a></li>
                <li><a href="#">Түгээмэл асуулт</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3>Холбоо барих</h3>
              <p>📍 Улаанбаатар хот, СХД, 1-р хороо</p>
              <p>📞 +(976) 12345678</p>
              <p>✉ info@admon.mn</p>
              <p>🕒 Даваа–Баасан: 9:00–18:00</p>
            </div>

            <div className="footer-column">
              <h3>Мэдээлэл авах</h3>
              <p>Шинэ бүтээгдэхүүн, үйлчилгээний талаар мэдээлэл авах бол бүртгүүлээрэй.</p>
              <input type="email" placeholder="И-мэйл хаяг" className="email-input" />
              <button className="btn btn-sm">Бүртгүүлэх</button>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Admon Хэвлэлийн үйлдвэр. Бүх эрх хуулиар хамгаалагдсан.</p>
          </div>
        </div>
      </footer>

     
      <style jsx>{`
        header { background:#fff; box-shadow:0 2px 5px rgba(0,0,0,0.1); padding:1rem 0; position:sticky; top:0; z-index:10; }
        nav { display:flex; justify-content:space-between; align-items:center; }
        .nav-links { display:flex; gap:1.2rem; }
        .nav-links li { list-style:none; }
        .nav-links a { text-decoration:none; color:#333; font-weight:500; }
        .mobile-menu-btn { display:none; background:none; border:none; font-size:1.5rem; }

        .services { padding:3rem 1rem; background:#f9f9f9; }
        .services-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(250px,1fr)); gap:1.5rem; }
        .service-card { background:#fff; border-radius:10px; overflow:hidden; box-shadow:0 3px 8px rgba(0,0,0,0.1); transition:0.3s; }
        .service-card:hover { transform:translateY(-5px); }
        .service-img { height:180px; background-size:cover; background-position:center; }
        .service-content { padding:1rem; }

        .footer { background:#111; color:#ccc; padding:3rem 1rem 1rem; margin-top:3rem; }
        .footer-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(220px,1fr)); gap:2rem; }
        .footer h3 { color:#fff; margin-bottom:1rem; }
        .footer a { color:#ccc; text-decoration:none; }
        .footer a:hover { color:#fff; }
        .social-links a { margin-right:10px; color:#ccc; font-size:1.2rem; }
        .email-input { width:100%; padding:0.5rem; margin-top:0.5rem; border:none; border-radius:4px; }
        .btn { background:#e63946; color:#fff; border:none; padding:0.5rem 1rem; border-radius:4px; cursor:pointer; margin-top:0.5rem; }
        .btn:hover { background:#d62828; }
        .footer-bottom { border-top:1px solid #333; text-align:center; margin-top:2rem; padding-top:1rem; font-size:0.9rem; color:#777; }

        @media(max-width:768px){
          .nav-links { display:none; flex-direction:column; position:absolute; top:70px; right:0; background:#fff; padding:1rem; box-shadow:0 5px 10px rgba(0,0,0,0.1); }
          .nav-links.active { display:flex; }
          .mobile-menu-btn { display:block; }
        }
      `}</style>
    </>
  );
}
