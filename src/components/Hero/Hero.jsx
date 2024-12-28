import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Oba</h1>
        <p className={styles.description}>
        Hello! I'm Oba. A second year major in Computer Science major at Morgan State University. I have a passion for creating innovative solutions to complex problems. With a strong background in computer science, I am skilled in a variety of programming languages and technologies, including Python, JavaScript, HTML/CSS, and Swift. I have gained knowledge in various areas of computer science, including algorithm design, data structures, data visualization and software engineering. With my skills and experience, I am looking for software engineering internship opportunities, and the chance to work on challenging projects and to continue learning and growing as a developer. In my spare time, I enjoy playing soccer and ping pong.
          
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/oba.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
