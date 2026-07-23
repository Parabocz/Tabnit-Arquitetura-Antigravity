"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";
import styles from "./Office.module.css";
import { ArrowRight } from "lucide-react";

export default function Office() {
  const sectionRef = useRef(null);
  const textGroupRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: textGroupRef.current.children,
              translateY: [22, 0],
              opacity: [0, 1],
              delay: anime.stagger(150),
              easing: "easeOutCubic",
              duration: 800
            });
            anime({
              targets: imgRef.current,
              translateY: [40, 0],
              opacity: [0, 1],
              delay: 300,
              easing: "easeOutCubic",
              duration: 1000
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
    <section ref={sectionRef} className="section" id="sobre">
      <div className={`container ${styles.grid}`}>
        
        {/* Texto à esquerda */}
        <div className={styles.textContent} ref={textGroupRef}>
          <span className="eyebrow" style={{ color: "var(--muted)", opacity: 0 }}>O escritório</span>
          
          <h2 className={`display-sm ${styles.title}`} style={{ opacity: 0 }}>
            Arquitetura contemporânea com identidade própria.
          </h2>
          
          <div className={styles.paragraphs} style={{ opacity: 0 }}>
            <p>
              Fundado por Fabrício e Janayne, o escritório desenvolve projetos residenciais e comerciais personalizados — com linguagem autoral, precisão técnica e uma leitura cuidadosa de cada terreno, rotina e objetivo.
            </p>
            <p>
              Cada projeto nasce do encontro entre os desejos de quem irá habitar o espaço e soluções arquitetônicas inteligentes: materiais naturais, integração com o ambiente e uma estética que valoriza o imóvel e atravessa o tempo.
            </p>
          </div>
          
          <a href="#contato" className={`link-underline group ${styles.link}`} style={{ opacity: 0 }}>
            Conheça o escritório
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Imagem à direita */}
        <div className={styles.imageCol} ref={imgRef} style={{ opacity: 0 }}>
          <figure className={styles.figure}>
            <div className={styles.imageWrapper}>
              <Image 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop" 
                alt="Arquiteta Fundadora" 
                fill
                className={styles.image}
                unoptimized
              />
            </div>
            <figcaption className={styles.caption}>
              <span className="font-serif">Janayne & Fabrício</span>
              <span>Fundadores</span>
            </figcaption>
          </figure>
        </div>

      </div>
    </section>
  );
}
