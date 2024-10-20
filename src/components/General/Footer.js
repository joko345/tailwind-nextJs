import React from "react";
import Link from "next/link"; // Pastikan Link diimpor dengan benar

export default function Footer() {
  return (
    <footer className="w-full mt-5 border-t border-slate-500">
      {" "}
      {/* Tambahkan padding untuk jarak */}
      <div className="container mx-auto flex py-5">
        <ul className="flex gap-5 justify-center lg:p-0 p-5 ">
          {" "}
          {/* Tambahkan justify-center agar konten rata tengah */}
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About Me</Link>
          </li>
          <li>
            <Link href="/">Work</Link>
          </li>
          <li>
            <Link href="/">Hobby</Link>
          </li>
        </ul>
        <div className="ml-auto lg:p-0 p-5">Copyright @2020</div>
      </div>
    </footer>
  );
}
