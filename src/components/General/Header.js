import React from "react";
import Link from "next/link";
import { menu } from "@/src/data/menu";

export default function Header() {
  return (
    <header className="border-b border-slate-950 py-5 mb-5">
      {" "}
      {/* Ganti <headers> dengan <header> */}
      <div className="container mx-auto flex justify-between lg:p-0 p-5">
        <div className="logo">
          <Link href="/">Mathilda</Link>
        </div>
        <ul className="flex gap-5">
          {menu.map((value, index) => (
            <li key={index}>
              {/* value dari datamenu */}
              <Link href={value.href}>{value.label}</Link>
            </li>
          ))}
        </ul>
        <div>
          <Link href="/contact">
            <div className="border border-slate-500 p-1 px-5">Contact</div>
          </Link>
        </div>
      </div>
    </header>
  );
}
