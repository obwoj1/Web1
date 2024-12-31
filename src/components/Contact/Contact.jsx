import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Hit me up😼!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:obwoj1@morgan.edu" target="_blank" rel="noopener noreferrer">obwoj1@morgan.edu</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/obwoj/" target="_blank" rel="noopener noreferrer">linkedin.com/Obaloluwa Wojuade</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/obwoj1" target="_blank" rel="noopener noreferrer">github.com/obwoj1</a>
        </li>
      </ul>
    </footer>
  );
};
