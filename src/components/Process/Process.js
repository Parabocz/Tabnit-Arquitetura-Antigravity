"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Process.module.css";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "ESCUTA",
    desc: "Compreensão profunda das necessidades da sua família e características do terreno."
  },
  {
    num: "02",
    title: "PROJETO",
    desc: "Unimos arquitetura sensível e precisão de engenharia com tecnologia BIM."
  },
  {
    num: "03",
    title: "EXECUÇÃO",
    desc: "Segurança financeira, ausência de surpresas e paz de espírito durante a obra."
  }
];

export default function Process() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: headerRef.current.children,
              translateY: [22, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutCubic",
              duration: 800
            });
            anime({
              targets: listRefs.current,
              translateY: [22, 0],
              opacity: [0, 1],
              delay: anime.stagger(150, { start: 400 }),
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
    <section ref={sectionRef} className="section" id="processo">
      <div className="container">
        
        {/* Cabeçalho */}
        <div className={styles.header} ref={headerRef}>
          <span className="eyebrow" style={{ color: "var(--muted)", opacity: 0 }}>Nosso Processo</span>
          <h2 className={`display-sm ${styles.title}`} style={{ opacity: 0 }}>Como trabalhamos</h2>
          <p className={styles.desc} style={{ opacity: 0 }}>
            Da concepção à entrega, garantimos que a união entre arquitetura e engenharia resulte em uma obra tranquila.
          </p>
        </div>

        <div className={styles.content}>
          <p className={styles.listHeader}>As três etapas fundamentais</p>
          
          <ul className={styles.list}>
            {steps.map((step, index) => (
              <li 
                key={index} 
                className={styles.listItem}
                ref={(el) => (listRefs.current[index] = el)}
                style={{ opacity: 0 }}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.num}>{step.num}</span>
                  <h3 className={styles.itemTitle}>{step.title}</h3>
                </div>
                <div className={styles.itemRight}>
                  <p className={styles.itemDesc}>{step.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="https://wa.me/5542999699469" target="_blank" rel="noopener noreferrer" className={`link-underline group ${styles.link}`}>
            Agende uma reunião de diagnóstico
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
