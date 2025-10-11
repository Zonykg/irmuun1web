"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const [menuActive, setMenuActive] = useState(false);
  const [language, setLanguage] = useState("mn");
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleMenu = () => setMenuActive(!menuActive);

  const toggleFavorite = (index) => {
    setFavorites((prev) => {
      const updated = prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index];

      const favoriteProducts = updated.map((i) => products[i]);
      localStorage.setItem("favorites", JSON.stringify(favoriteProducts));

      return updated;
    });
  };

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(
      `${product.title[language]} ${
        language === "mn" ? "сагсанд нэмэгдлээ!" : "added to cart!"
      }`
    );
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    console.log("Form submitted:", { name, email, message });
    alert(
      language === "mn"
        ? "Таны мессеж амжилттай илгээгдлээ!"
        : "Your message has been sent successfully!"
    );
    e.target.reset();
  };

  const services = [
    {
      icon: "📄",
      title: { mn: "Ном, товхимол хэвлэх", en: "Book & Brochure Printing" },
      desc: {
        mn: "Бид таны ном, товхимол, брошюрийг өндөр чанартайгаар хэвлэнэ.",
        en: "We print your books, brochures in high quality.",
      },
      img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: "🎨",
      title: { mn: "График & Дизайн", en: "Graphic & Design" },
      desc: {
        mn: "Бид таны брэндийн зураг, лого, маркетингийн материалын дизайныг боловсруулна.",
        en: "We create logos, graphics, and marketing materials for your brand.",
      },
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=400&q=80",
    },
    {
      icon: "📦",
      title: { mn: "Сав баглаа боодол", en: "Packaging" },
      desc: {
        mn: "Бүтээгдэхүүний сав баглаа боодол, шошго, багц дизайныг хийх үйлчилгээ.",
        en: "We design packaging, labels, and product packages.",
      },
      img: "https://images.unsplash.com/photo-1590608897129-79c95e17c33d?auto=format&fit=crop&w=400&q=80",
    },
  ];

  const products = [
    { title: { mn: "Цаасны багц", en: "Paper Pack" }, category: { mn: "Хэвлэлийн материал", en: "Printing Material" }, price: "$20", badge: "Шинэ", id: 1, img: "https://images.unsplash.com/photo-1589998059171-988d887df646?auto=format&fit=crop&w=400&q=80" },
    { title: { mn: "Брошюр", en: "Brochure" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$50", badge: "", id: 2, img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80" },
    { title: { mn: "Сэтгүүл", en: "Magazine" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$35", badge: "Шинэ", id: 3, img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" },
    { title: { mn: "Календар", en: "Calendar" }, category: { mn: "Хэвлэлийн материал", en: "Printing Material" }, price: "$15", badge: "", id: 4, img: "https://blog.lulu.com/content/images/2025/06/custom-wall-calendar.png" },
    { title: { mn: "Постер", en: "Poster" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$25", badge: "Шинэ", id: 5, img: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=400&q=80" },
    { title: { mn: "Цаасан уут", en: "Paper Bag" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$10", badge: "", id: 6, img: "https://m.media-amazon.com/images/I/61FtK4buE6L._AC_SL1500_.jpg" },
    { title: { mn: "Бэлгийн хайрцаг", en: "Gift Box" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$30", badge: "Шинэ", id: 7, img: "https://t3.ftcdn.net/jpg/00/97/34/10/360_F_97341026_7LdmtHCd2M1cGx6U3UICsee18NDzvYUs.jpg" },
    { title: { mn: "Лого хэвлэл", en: "Logo Print" }, category: { mn: "График & Дизайн", en: "Graphic & Design" }, price: "$40", badge: "", id: 8, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb7ojmaH0oP91p8rHpuyWPveoZ1JalvMC9AA&s" },
    { title: { mn: "Нэвтрүүлгийн хавтас", en: "Magazine Cover" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$18", badge: "", id: 9, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv9oMpOY0yalILxACJQhksaR2-vh_C4m0uHQ&s" },
    { title: { mn: "Брэнд тэмдэглэгээ", en: "Brand Label" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$12", badge: "", id: 10, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdvJrSvzxFb639xjMhHDVCcRUbOD79-ITjJg&s" },
    { title: { mn: "Тэмдэглэл дэвтэр", en: "Notebook" }, category: { mn: "Хэвлэлийн материал", en: "Printing Material" }, price: "$8", badge: "Шинэ", id: 11, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_glPGZkWygPy-_8DudF_GhugM93e0Aq0f5Q&s" },
    { title: { mn: "Стикер багц", en: "Sticker Pack" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$5", badge: "", id: 12, img: "https://axiomprint.com/_next/image?url=https%3A%2F%2Fnewapi.axiomprint.com%2Fuploads%2Fcustom-stocker-pack-2-754.jpg&w=3840&q=100" },
    { title: { mn: "Цаасан шошго багц", en: "Label Pack" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$7", badge: "", id: 13, img: "https://printingstudio.in/cdn/shop/files/beautiful-cider-label-template_23-2150191169.jpg?v=1710506650" },
    { title: { mn: "Сурталчилгааны баннер", en: "Advertising Banner" }, category: { mn: "График & Дизайн", en: "Graphic & Design" }, price: "$45", badge: "", id: 14, img: "https://static.vecteezy.com/system/resources/thumbnails/002/314/222/small_2x/collection-web-banners-different-sizes-for-mobile-and-social-networks-poster-shopping-ads-and-marketing-material-vector.jpg" },
    { title: { mn: "Уран зураг хэвлэл", en: "Art Print" }, category: { mn: "График & Дизайн", en: "Graphic & Design" }, price: "$38", badge: "Шинэ", id: 15, img: "https://media.architecturaldigest.com/photos/624cb571b79451cd757d2164/16:9/w_2560%2Cc_limit/artwork-cool-paintings-art-prints-2022-2.jpg" },
    { title: { mn: "Бичгийн хэрэгсэл багц", en: "Stationery Set" }, category: { mn: "Хэвлэлийн материал", en: "Printing Material" }, price: "$28", badge: "", id: 16, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPzMfCM_KCs2BEHLa87G3HB5u4nHJy9KK8ew&s" },
    { title: { mn: "Сурталчилгааны постер", en: "Promo Poster" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$32", badge: "", id: 17, img: "https://static.vecteezy.com/system/resources/previews/001/829/863/non_2x/business-design-concept-poster-with-flat-cartoon-illustration-flyer-business-pamphlet-brochure-magazine-cover-design-layout-space-for-promotion-advertising-marketing-print-template-in-a4-size-free-vector.jpg" },
    { title: { mn: "Лого хэвлэл хайрцаг", en: "Logo Box" }, category: { mn: "Сав баглаа боодол", en: "Packaging" }, price: "$50", badge: "Шинэ", id: 18, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaRBl3sbfsRkxiBR2dVBynfO3S-Rq90n1DQ&s" },
    { title: { mn: "Брошюр хэвлэл шинэ", en: "New Brochure" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$18", badge: "", id: 19, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP_I2X_UE0MeQ2wO38WNEEXuPyrFqjIp3P0Q&s" },
    { title: { mn: "Плакат хэвлэл", en: "Printed Poster" }, category: { mn: "Хэвлэлийн бүтээгдэхүүн", en: "Printed Product" }, price: "$20", badge: "Шинэ", id: 20, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYFU70_eR_pZ1p_yB4DmauHmy2I7lZkQUeA&s" },
  ];

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <span>🖨️</span>
              <span>Admon</span>
            </div>

            <button
              className="lang-btn"
              onClick={() => setLanguage(language === "mn" ? "en" : "mn")}
            >
              {language === "mn" ? "EN" : "MN"}
            </button>

            <button className="mobile-menu-btn" onClick={toggleMenu}>
              <i className={menuActive ? "fas fa-times" : "fas fa-bars"}></i>
            </button>

            <ul className={`nav-links ${menuActive ? "active" : ""}`}>
              <li>
                <Link href="/favorites">{language === "mn" ? "Таалагдсан" : "Favorites"}</Link>
              </li>
              <li>
                <Link href="#hero">{language === "mn" ? "Нүүр" : "Home"}</Link>
              </li>
              <li>
                <Link href="#services">{language === "mn" ? "Үйлчилгээ" : "Services"}</Link>
              </li>
              <li>
                <Link href="#products">{language === "mn" ? "Бүтээгдэхүүн" : "Products"}</Link>
              </li>
              <li>
                <Link href="#about">{language === "mn" ? "Бидний тухай" : "About Us"}</Link>
              </li>
              <li>
                <Link href="#contact">{language === "mn" ? "Холбогдох" : "Contact"}</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <h1>
              {language === "mn"
                ? "Монголын шилдэг хэвлэлийн үйлчилгээ"
                : "Mongolia's Best Printing Services"}
            </h1>
            <p>
              {language === "mn"
                ? "Бид таны бүх төрлийн хэвлэлийн хэрэгцээг нэг дороос шийдэх бүрэн цогц шийдлийг санал болгож байна"
                : "We provide all your printing needs in one place with complete solutions."}
            </p>
            <div className="btn-group">
              <Link href="#products" className="btn">
                {language === "mn" ? "Бүтээгдэхүүн үзэх" : "View Products"}
              </Link>
              <Link href="#contact" className="btn btn-secondary">
                {language === "mn" ? "Үнэ авах" : "Get Quote"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <div className="section-title">
            <h2>{language === "mn" ? "Бидний Үйлчилгээ" : "Our Services"}</h2>
            <p>{language === "mn" ? "Бид олон төрлийн үйлчилгээ үзүүлдэг" : "We offer a variety of services"}</p>
          </div>
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <Image
                  src={service.img}
                  alt={service.title[language]}
                  width={400}
                  height={250}
                  className="service-img"
                />
                <div className="service-content">
                  <span className="service-icon">{service.icon}</span>
                  <h3>{service.title[language]}</h3>
                  <p>{service.desc[language]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" id="products">
        <div className="container">
          <div className="section-title">
            <h2>{language === "mn" ? "Бүтээгдэхүүн" : "Products"}</h2>
            <p>{language === "mn" ? "Бидний бүтээгдэхүүнүүд" : "Our Products"}</p>
          </div>
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={index} className="product-card">
                {product.badge && (
                  <div className="product-badge">{product.badge}</div>
                )}
                <Image
                  src={product.img}
                  alt={product.title[language]}
                  width={400}
                  height={250}
                  className="product-img"
                />
                <div className="product-content">
                  <span className="product-category">{product.category[language]}</span>
                  <h3>{product.title[language]}</h3>
                  <div className="product-price">{product.price}</div>
                  <div className="product-actions">
                    <button className="btn btn-cart" onClick={() => addToCart(product)}>
                      🛒 {language === "mn" ? "Сагсанд нэмэх" : "Add to Cart"}
                    </button>
                    <button
                      className={`btn btn-favorite ${favorites.includes(index) ? "active" : ""}`}
                      onClick={() => toggleFavorite(index)}
                    >
                      ❤
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="section-title">
            <h2>{language === "mn" ? "Бидний тухай" : "About Us"}</h2>
            <p>{language === "mn" ? "Admon компанийн товч танилцуулга" : "Brief introduction about Admon"}</p>
          </div>
          <div className="about-content">
            <div className="about-text">
              <h3>{language === "mn" ? "20+ жилийн туршлага" : "20+ Years of Experience"}</h3>
              <p>
                {language === "mn" 
                  ? "АДМОН компани нь 2000 оноос хойш тасралтгүй үйл ажиллагаа явуулж, хэвлэлийн салбарт Монголын тэргүүлэгч компаниудын нэг болон хөгжиж ирсэн.Бид орчин үеийн тоног төхөөрөмж, дэвшилтэт технологийг нэвтрүүлж, олон улсын стандартыг баримталж ажилладаг.Манай компани нь зөвхөн хэвлэх үйлдвэр биш, харин дизайн, хэвлэл, хувилахаас эхлээд бүтээгдэхүүнийг гарт хүргэх хүртэлх бүх үйл явцыг гүйцэтгэдэг цогц үйлчилгээний компани юм."
                  : "ADMON Company has been operating continuously since 2000 and has developed into one of Mongolia's leading companies in the printing industry. We introduce modern equipment and advanced technology and adhere to international standards. Our company is not just a printing house, but a comprehensive service company that performs the entire process from design, printing, copying to delivering products to the hand"}
              </p>
            </div>
            <div className="about-img">
              <Image
                src="https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"
                alt="Admon team"
                width={500}
                height={300}
              />
            </div>
          </div>
        </div>
      </section>

     
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>{language === "mn" ? "Бидэнтэй холбогдох" : "Contact Us"}</h2>
            <p>{language === "mn" ? "Бидэнтэй холбогдож асуулт асуух" : "Get in touch with us"}</p>
          </div>
          <div className="contact-form">
            <form id="contactForm" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">{language === "mn" ? "Нэр" : "Name"}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder={language === "mn" ? "Нэрээ оруулна уу" : "Enter your name"}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">{language === "mn" ? "И-мэйл" : "Email"}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder={language === "mn" ? "И-мэйл хаягаа оруулна уу" : "Enter your email"}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">{language === "mn" ? "Утас" : "Phone"}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  placeholder={language === "mn" ? "Утасны дугаараа оруулна уу" : "Enter your phone number"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">{language === "mn" ? "Мессеж" : "Message"}</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder={language === "mn" ? "Таны мессеж энд бичнэ үү..." : "Write your message here..."}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn">
                {language === "mn" ? "Илгээх" : "Send"}
              </button>
            </form>
          </div>
        </div>
      </section>

    
      <footer>
        <div className="container">
          <div className="footer-content">
         
            <div className="footer-column">
              <h3>Admon</h3>
              <p>
                Монголын хэвлэлийн салбарын тэргүүлэгч компани. Бид чанар, найдвартай байдал, хэрэглэгчийн сэтгэл ханамжийг дээд зэргээр тавьдаг.
              </p>
            </div>

        
            <div className="footer-column">
              <h3>Холбоос</h3>
              <p>Улаанбаатар хот, СХД, 1-р хороо</p>
              <p>+(976) 12345678</p>
              <p>info@admon.mn</p>
              <p>Даваа-Баасан: 9:00 - 18:00</p>
            </div>

            <div className="footer-column">
              <h3>Мэдээлэл авах</h3>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Бүртгэл амжилттай боллоо!");
                  e.target.reset();
                }}
              >
                <input
                  type="email"
                  placeholder="И-мэйл хаяг"
                  required
                  className="newsletter-input"
                />
                <button type="submit" className="btn">
                  Бүртгүүлэх
                </button>
              </form>
            </div>
          </div>

          <div className="copyright">
            © 2025 Admon Хэвлэлийн үйлдвэр. Бүх эрх хуулиар хамгаалагдсан.
          </div>
        </div>
      </footer>

      <style jsx>{`
      header {
  background: #0869deff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Desktop menu */
.nav-links {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  transition: all 0.3s ease;
}

.nav-links li a {
  text-decoration: none;
  color: #333;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-links li a:hover {
  color: #2575fc;
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Responsive part */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: block;
  }

  .nav-links {
    position: absolute;
    top: 70px;
    right: 0;
    background: white;
    width: 100%;
    max-height: 0;
    overflow: hidden;
    flex-direction: column;
    text-align: center;
    gap: 1rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }

  .nav-links.active {
    max-height: 300px; /* menu нээгдэхэд */
    padding: 1rem 0;
  }

  .nav-links li {
    margin: 0.5rem 0;
  }
}
        .lang-btn {
          margin-left: 1rem;
          padding: 0.4rem 1rem;
          background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
          color: white;
          border: none;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
        }

        .lang-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .lang-btn:active {
          transform: scale(0.95);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .product-actions {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
        }

        .btn-favorite {
          background: transparent;
          border: 2px solid #ffc107;
          color: #ffc107;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-favorite.active {
          background: #ffc107;
          color: #1a237e;
        }

        .btn-favorite:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .btn-cart {
          background: #ffc107;
          color: #1a237e;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.3s;
        }

        .btn-cart:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }
          footer {
    background: #111;
    color: #eee;
    padding: 3rem 0;
    margin-top: 4rem;
  }

  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
  }

  .footer-column h3 {
    margin-bottom: 1rem;
    color: #fff;
  }

  .footer-column p {
    color: #ccc;
    font-size: 0.9rem;
    line-height: 1.5;
  }

  .footer-column form {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .newsletter-input {
    padding: 0.6rem;
    border-radius: 5px;
    border: none;
    outline: none;
  }

  footer .btn {
    background: #ffc107;
    color: #1a237e;
    border: none;
    border-radius: 5px;
    padding: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
  }

  footer .btn:hover {
    background: #ffca28;
    transform: translateY(-2px);
  }

  .copyright {
    text-align: center;
    margin-top: 2rem;
    padding-top: 1rem;
    border-top: 1px solid #333;
    color: #aaa;
    font-size: 0.85rem;
  }
      `}</style>
    </>
  );
} 