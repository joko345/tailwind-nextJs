import React from "react";
import Link from "next/link";
import { menu } from "@/src/data/menu"; //di setting di jsconfig agar absolute import/@

export default function Footer() {
  return (
    <footer className="w-full mt-5 border-t border-slate-500">
      {" "}
      {/* Tambahkan padding untuk jarak */}
      <div className="container mx-auto flex py-5">
        <ul className="flex gap-5 justify-center lg:p-0 p-5 ">
          {menu.map((value, index) => (
            <li key={index}>
              {/* value dari datamenu */}
              <Link href={value.href}>{value.label}</Link>
            </li>
          ))}{" "}
        </ul>
        <div className="ml-auto lg:p-0 p-5">Copyright @2020</div>
      </div>
    </footer>
  );
}
