"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Testimonials.module.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Um projeto que superou nossas expectativas! A equipe foi atenciosa desde a primeira reunião e o resultado ficou incrível. A atenção aos detalhes faz toda a diferença.",
    author: "Ricardo S."
  },
  {
    text: "Trabalho impecável e muito profissional. Gostamos muito de como conduziram todo o processo, sempre transparentes e rápidos no retorno.",
    author: "Marcos e Juliana"
  },
  {
    text: "Excelente escritório! Conseguiram traduzir perfeitamente o que queríamos em um projeto moderno, funcional e dentro do orçamento estipulado.",
    author: "Fernanda Lima"
  }
];

export default function Testimonials() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: cardsRef.current,
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutCubic",
              duration: 800
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            className={styles.card}
            ref={(el) => (cardsRef.current[i] = el)}
            style={{ opacity: 0 }}
          >
            <div className={styles.stars}>
              {[1,2,3,4,5].map((_, idx) => <Star key={idx} size={14} fill="var(--ink)" color="var(--ink)" />)}
            </div>
            <p className={styles.text}>"{t.text}"</p>
            <span className={styles.author}>— {t.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
