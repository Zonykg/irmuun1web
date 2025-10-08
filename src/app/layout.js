import "./globals.css";

export const metadata = {
  title: "Admon Онлайн Хэвлэлийн Үйлдвэр",
  description: "Монголын тэргүүлэгч хэвлэлийн компани",
};

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
