import React from "react";

const AboutMe = () => {
  return (
    <section id="about-me">
      <div className="space-y-3">
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
    </section>
  );
};

export default AboutMe;
