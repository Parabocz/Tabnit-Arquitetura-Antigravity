"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Trajectory.module.css";

const stats = [
  { value: "+150", label: "Projetos desenvolvidos" },
  { value: "23", label: "Cidades atendidas" },
  { value: "4", label: "Países" },
  { value: "+30 mil", label: "m² projetados" },
  { value: "2", label: "Premiações internacionais" },
  { value: "2015", label: "Desde a fundação" }
];

export default function Trajectory() {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: itemsRef.current,
              translateY: [22, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
              easing: "easeOutCubic",
              duration: 800
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
    <section ref={sectionRef} className="section-sm">
      <div className="container">
        <div className={styles.header}>
          <span className="eyebrow" style={{ color: "var(--muted)" }}>Trajetória</span>
          <h2 className={`display-sm ${styles.title}`}>
            10 anos traduzidos em números.
          </h2>
        </div>

        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={styles.statBox}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{ opacity: 0 }}
            >
              <div className={styles.value}>{stat.value}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
