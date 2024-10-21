import React from "react";
import Link from "next/link";
import Head from "next/head";

const contact = () => (
  <section className="relative">
    <Head>
      <title>Contact</title>
      <meta name="description" content="Contact Page"></meta>
    </Head>
    <div className="h-full">
      <img
        src="/bg/pexels-furkan-gunes-45417726-28425084.jpg"
        className="lg:h-full h-[500px] h-full object-cover"
        alt="contactme"
      ></img>
    </div>
    <div className="w-1/2 lg:h-[625px]  bg-slate-200 absolute p-5 z-10 top-10 right-10 grid place-content-center">
      <h1 className="text-5xl mb-5 ">
        <span>Get In</span>
        <br />
        <span className="font-bold">Touch</span>
      </h1>
      <p>
        Address: Jl.cisadane 3 No.82 Depok Timur jokoutomo190.ju@gmail.com
        081282241793
      </p>
      <nav className="mx-20 lg:mt-20 mt-10 text-center ">
        <Link href="/contact">
          <div className="border border-slate-500 rounded-md p-2 px-6cursor-pointer hover:bg-slate-100 transition uppercase font-bold">
            Contact
          </div>
        </Link>
      </nav>
    </div>
  </section>
);
export default contact;
