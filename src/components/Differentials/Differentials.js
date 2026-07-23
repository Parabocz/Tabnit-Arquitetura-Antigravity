"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Differentials.module.css";

const differentials = [
  {
    tag: "VALORIZAÇÃO",
    prefix: "Aumento de até ",
    number: 30,
    suffix: "% do valor do seu imóvel."
  },
  {
    tag: "ENGENHARIA",
    text: "Redução drástica de perdas financeiras e atrasos em obra."
  },
  {
    tag: "SENSIBILIDADE",
    text: "Design pensado para abraçar a história da sua família."
  }
];

export default function Differentials() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: itemsRef.current,
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutCubic",
              duration: 800
            });
            
            const counter = { val: 0 };
            anime({
              targets: counter,
              val: 30,
              duration: 1500,
              easing: "easeOutExpo",
              delay: 400,
              update: () => {
                if (numberRef.current) {
                  numberRef.current.innerText = Math.round(counter.val);
                }
              }
            });

            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {differentials.map((item, index) => (
          <div 
            key={index} 
            className={styles.card}
            ref={(el) => (itemsRef.current[index] = el)}
            style={{ opacity: 0 }}
          >
            <span className="eyebrow" style={{ color: "var(--muted)" }}>{item.tag}</span>
            <p className={styles.text}>
              {item.number ? (
                <>
                  {item.prefix}
                  <span ref={numberRef}>0</span>
                  {item.suffix}
                </>
              ) : (
                item.text
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
