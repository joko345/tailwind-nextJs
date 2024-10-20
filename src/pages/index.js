import React from "react";
import Link from "next/link";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";

export default function Home() {
  return (
    <div className="flex space-x-44 ">
      <div>
        <div className="mt-5">
          <h1 title="Jon Gate" className="text-6xl leading-[80px]">
            Jonathan Alexander Gate
          </h1>
        </div>
        <div className="flex item-center my-10 mb-28 space-y-5">
          <div>{/* <AddHomeWorkIcon /> */}</div>
          <div className="flex flex-col">
            <span className="font-light">Website Developer</span>
            <span>Portofolio</span>
            <div>
              Untuk mengecilkan ukuran gambar, Anda bisa mengatur lebar dan
              tinggi maksimal menggunakan Tailwind CSS. Berikut ini contoh cara
              memperkecil gambar dengan menyesuaikan ukurannya menggunakan kelas
              seperti max-w-sm dan h-auto agar proporsi gambar tetap terjaga:
            </div>
          </div>
        </div>
        <Link
          href="/"
          className="border p-10 py-2 text-center bg-slate-700  text-white border-slate-500 p-2"
        >
          Get in touch
        </Link>
      </div>
      <div className="w-1/2">
        <img
          src="/bg/pexels-mathilde-17921251.jpg"
          className="w-full"
          alt="photo"
          className="w-full object-cover"
        ></img>
      </div>
    </div>
  );
}
