"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./SocialProof.module.css";
import { Star } from "lucide-react";

export default function SocialProof() {
  const sectionRef = useRef(null);
  const blocksRef = useRef([]);
  const ratingRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: blocksRef.current,
              translateY: [30, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutCubic",
              duration: 1000,
            });
            
            // Animação progressiva do 5.0
            const counter = { val: 0 };
            anime({
              targets: counter,
              val: 5.0,
              duration: 1500,
              easing: "easeOutExpo",
              delay: 300,
              update: () => {
                if (ratingRef.current) {
                  ratingRef.current.innerText = counter.val.toFixed(1) + "/5";
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
        <div 
          className={styles.block} 
          ref={(el) => (blocksRef.current[0] = el)}
          style={{ opacity: 0 }}
        >
          <div className={`font-serif ${styles.rating}`} ref={ratingRef}>0.0/5</div>
          <div className="eyebrow" style={{ color: "var(--muted)", marginBottom: "1rem" }}>21 Avaliações no Google</div>
          <div className={styles.stars}>
            {[1,2,3,4,5].map((_, i) => <Star key={i} size={16} fill="var(--ink)" color="var(--ink)" />)}
          </div>
        </div>
      </div>
    </section>
  );
}
