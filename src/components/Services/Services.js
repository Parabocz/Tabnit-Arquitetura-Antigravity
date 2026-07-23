"use client";

import { useEffect, useRef } from "react";
import anime from "animejs";
import styles from "./Services.module.css";
import { ArrowRight } from "lucide-react";

const servicesList = [
  {
    num: "01",
    title: "Projeto residencial personalizado",
    desc: "Residências autorais desenhadas a partir do terreno, da rotina e dos objetivos de cada cliente."
  },
  {
    num: "02",
    title: "Projeto comercial e interiores",
    desc: "Espaços corporativos e comerciais com identidade, funcionalidade e forte presença de marca."
  },
  {
    num: "03",
    title: "Projetos com tecnologia BIM",
    desc: "Metodologia BIM: integração, simulações, redução de erros e eficiência da concepção à obra."
  }
];

export default function Services() {
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
    <section ref={sectionRef} className="section" id="servicos">
      <div className="container">
        
        {/* Cabeçalho */}
        <div className={styles.header} ref={headerRef}>
          <span className="eyebrow" style={{ color: "var(--muted)", opacity: 0 }}>O que fazemos</span>
          <h2 className={`display-sm ${styles.title}`} style={{ opacity: 0 }}>Serviços</h2>
          <p className={styles.desc} style={{ opacity: 0 }}>
            Da concepção arquitetônica à experiência do cliente, conduzimos cada etapa com método, clareza e sofisticação.
          </p>
        </div>

        <div className={styles.content}>
          <p className={styles.listHeader}>Projeto e arquitetura</p>
          
          <ul className={styles.list}>
            {servicesList.map((service, index) => (
              <li 
                key={index} 
                className={styles.listItem}
                ref={(el) => (listRefs.current[index] = el)}
                style={{ opacity: 0 }}
              >
                <div className={styles.itemLeft}>
                  <span className={styles.num}>{service.num}</span>
                  <h3 className={styles.itemTitle}>{service.title}</h3>
                </div>
                <div className={styles.itemRight}>
                  <p className={styles.itemDesc}>{service.desc}</p>
                </div>
              </li>
            ))}
          </ul>

          <a href="#contato" className={`link-underline group ${styles.link}`}>
            Entre em contato
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
