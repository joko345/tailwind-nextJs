import React from "react";
import Head from "next/head";

const Testimoni = () => (
  <section id="testimoni" className="relative">
    <Head>
      <title>Testimoni</title>
      <meta name="description" content="Testimoni Page"></meta>
    </Head>
    <div className="h-[700px]">
      <img
        src="/bg/pexels-mathilde-18278210.jpg"
        className="w-full h-full object-cover"
      ></img>
    </div>
    <div className="text-black absolute z-10 top-0 left-0 p-10">
      <p className="font-bold text-2xl bg-yellow-600/50 p-2">
        &quot;Adverties Custom Neckwear has a winning blend of over 20 years
        experience creating custom neckties.&quot;
      </p>
      <span>- luxurious fabrics.</span>
    </div>
  </section>
);
export default Testimoni;
