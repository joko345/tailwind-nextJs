import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-slate-950 py-5"> {/* Ganti <headers> dengan <header> */}
            <div className="container mx-auto flex">
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
                        Contact
                    </Link>
                </div>
            </div>
        </header>
    );
}
