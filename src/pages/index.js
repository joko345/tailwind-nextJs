import React from "react";
import Link from "next/link";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row lg:space-x-12 ">
      <Head>
        <title>Home</title>
        <meta name="description" content="Home Page"></meta>
      </Head>
      <div className="grid place-content-center lg:text-left text-center">
        <div>
          <h1 title="Jon Gate" className="text-6xl leading-[80px]">
            Jonathan Alexander Gate
          </h1>
        </div>
        <div className="flex item-center my-10 lg:mb-28 mb-8 space-y-2 text-sm[2px]">
          <div>{/* <AddHomeWorkIcon /> */}</div>
          <div className="flex flex-col">
            <span className="font-light ">Website Developer</span>
            <span>Portofolio</span>
            <div className="text-balance font-semibold lg:mt-0 mt-5">
              Untuk mengecilkan ukuran gambar, Anda bisa mengatur lebar dan
              tinggi maksimal menggunakan Tailwind CSS. Berikut ini contoh cara
              memperkecil gambar dengan menyesuaikan ukurannya menggunakan kelas
              seperti dan hauto agar proporsi gambar tetap terjaga: You're using
              a w-1/2 container, but there’s no parent flexbox context ensuring
              it takes half the width. You might need to wrap the parent
              container with flex to align them properly.
            </div>
          </div>
        </div>
        <nav className="lg:pb-0 pb-8">
          <Link
            href="/"
            className="border mb-12 lg:mb-28 p-10 py-2 text-center bg-slate-700  text-white border-slate-500 p-2"
          >
            Get in touch
          </Link>
        </nav>
      </div>
      <div className="w-full h-[300px] lg:w-1/2 lg:h-[440px] ">
        <img
          src="/bg/pexels-mathilde-17921251.jpg"
          className="w-full h-full object-cover"
          alt="photo"
        ></img>
      </div>
    </div>
  );
}
