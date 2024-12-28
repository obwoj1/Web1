import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/obeya-modified.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Fullstack Developer</h3>
              <p>
                I'm a Fullstack Developer with experience in building responsive
                and optimized web applications. Proficient in both frontend
                technologies like React and backend frameworks such as Node.js,
                I specialize in creating seamless user experiences and robust
                server-side logic.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>iOS Developer</h3>
              <p>
                I'm an iOS Developer with experience in building intuitive and
                user-friendly mobile applications. Proficient in Swift and
                Objective-C, I focus on creating seamless user experiences and
                integrating with RESTful APIs to enhance app functionality.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Data icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst / Visualization Specialist</h3>
              <p>
                As a Data Analyst, I specialize in transforming complex data
                sets into actionable insights. Proficient in tools like Python,
                R, and Tableau, I create compelling visualizations that help
                stakeholders make informed decisions based on data-driven
                strategies.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
