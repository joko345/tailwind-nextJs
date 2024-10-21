import React from "react";
import Head from "next/head";

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col gap-2 lg:gap-52 lg:flex-row "
    >
      <Head>
        <title>About Me</title>
        <meta name="description" content="About Me Page"></meta>
      </Head>
      <div className="space-y-5 grid place-content-center">
        <h1 className="text-5xl">
          <span>About Me</span>
          <br />
          <span className="font-bold">Biography</span>
        </h1>
        <p>
          Lifecycle dalam Vue.js mengacu pada serangkaian tahapan atau siklus
          hidup yang dialami oleh sebuah komponen sejak ia dibuat hingga dihapus
          dari DOM. Vue.js menyediakan hooks lifecycle untuk memungkinkan
          developer mengeksekusi kode pada titik tertentu dalam proses ini.
        </p>
      </div>
      <div className="mt-10 lg:mt-0 h-[700px] w-full">
        <img
          src="/bg/pexels-mathilde-18278184.jpg"
          className="w-full h-full object-cover"
          alt="aboutme"
        ></img>
      </div>
    </section>
  );
};

export default AboutMe;
