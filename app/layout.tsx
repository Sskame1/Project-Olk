import type { Metadata } from "next";
import "./reset.css";
import "./globals.scss"
import Header from "@/components/Header/Header";
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
      </body>
    </html>
  );
}
