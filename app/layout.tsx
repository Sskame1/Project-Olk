import type { Metadata } from "next";
import "./reset.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
export const metadata: Metadata = {
  title: "Сайт города asdsad",
  description: "Сайт который должен улучшить жизнь жителей города.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
