import React from "react";
import "./skills.css";
import Frontend from "./Frontend";
import Design from "./Design";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Ko'nikmalar</h2>
      <span className="section__subtitle">Texnik darajam</span>

      <div className="skills__container container grid">
        <Frontend />
        <Design />
      </div>
    </section>
  );
};

export default Skills;
