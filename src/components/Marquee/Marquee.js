"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Marquee.module.css";

const testimonials = [
  "O nível de confiança que a equipe nos passou foi absurdo.",
  "Pontualidade e profissionalismo impecáveis. Senti que meu investimento estava seguro.",
  "Colaboração top, entrega no prazo e o resultado final ficou sensacional."
];

export default function Marquee() {
  const content = testimonials.map((text, index) => (
    <span key={index} className={styles.item}>
      <span className={styles.text}>"{text}"</span>
      <span className={styles.dot}></span>
    </span>
  ));

  return (
    <section className={styles.section}>
      <div className={styles.marqueeWrapper}>
        <div className={styles.marqueeContent}>
          {content}
          {content}
          {content}
        </div>
      </div>
    </section>
  );
}
