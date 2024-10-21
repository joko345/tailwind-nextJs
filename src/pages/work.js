import React from "react";
import Head from "next/head";

const Work = () => (
  <section id="work" className="flex flex-col lg:flex-row gap-5 p-5 ">
    <Head>
      <title>Work</title>
      <meta name="description" content="Work Page"></meta>
    </Head>
    <div className="flex gap-3 flex-grow">
      <div className="w-1/2">
        <img
          src="/bg/pexels-mathilde-14320964.jpg"
          className="w-full h-full object-cover"
          alt="work1"
        />
      </div>

      <div className="w-1/2 space-y-3 overflow-hidden">
        <img
          src="/bg/pexels-mathilde-13347119.jpg"
          className="w-full max-h-500 object-cover"
          alt="work2"
        />
        <img
          src="/bg/pexels-mathilde-14792098.jpg"
          className="w-full max-h-500 object-cover"
          alt="work3"
        />
      </div>
    </div>

    <div className="w-[400px] flex-shrink-0 p-20">
      <h1 className="text-5xl mb-5">
        <span>Feature</span>
        <br />
        <span className="font-bold">Bio</span>
      </h1>
      <ul className="ml-0.5">
        <li>1. Open the Command Palette (Ctrl + Shift + P).</li>
        <li>2. Search for and select "Reload Window".</li>
        <li>3. Restart with --disable-extensions (Optional).</li>
      </ul>
    </div>
  </section>
);

export default Work;
