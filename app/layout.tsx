import Footer from "@/components/common/footer";
import Header from "@/components/common/header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flynn's Arcade",
  description: "Flynn's Arcade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-[#05060D] text-white overflow-x-hidden"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
