import React from "react";
import Header from "@/components/General/Header";
import Footer from "@/components/General/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header /> {/* <> Menggunakan fragment untuk membungkus elemen */}
      <main className="container mx-auto lg:py-5 lg:p-0 p-5">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
