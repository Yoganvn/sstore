import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Jual HP Bekas | Dapatkan Harga Terbaik untuk HP Lamamu",
  description: "Jual atau tukar tambah HP bekas iPhone, Samsung, OPPO, Xiaomi dengan harga tinggi dan proses cepat. Layanan aman, terpercaya, dan gratis penjemputan!",
  keywords: ["jual hp bekas", "tukar tambah hp", "beli hp second", "jual iphone bekas", "jual samsung bekas"],
  authors: [{ name: "SStore" }],
  openGraph: {
    title: "Jual HP Bekas | Dapatkan Harga Terbaik",
    description: "Jual HP bekas dengan harga terbaik. Proses cepat dan aman!",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
