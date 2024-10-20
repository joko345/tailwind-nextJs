import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-slate-950 py-5 mb-5"> {/* Ganti <headers> dengan <header> */}
            <div className="container mx-auto flex justify-between">
                <div className="logo">Mathilda</div>
                <ul className="flex gap-5">
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
                <div>
                    <Link href="/">
                        <div className="border border-slate-500 p-1 px-5">Contact</div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
