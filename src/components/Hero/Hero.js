"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime from "animejs";
import styles from "./Hero.module.css";
import { ArrowRight } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2560&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2560&auto=format&fit=crop"
];

export default function Hero() {
  const [currentImg, setCurrentImg] = useState(0);
  const textRefs = useRef([]);

  useEffect(() => {
    // Crossfade de imagens
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animação de entrada dos textos
    anime({
      targets: textRefs.current,
      translateY: [20, 0],
      opacity: [0, 1],
      delay: anime.stagger(200, { start: 500 }),
      easing: "easeOutCubic",
      duration: 1000
    });
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background Images Crossfade */}
      <div className={styles.bgWrapper}>
        {images.map((src, index) => (
          <div 
            key={index}
            className={`${styles.imageContainer} ${index === currentImg ? styles.active : ""}`}
          >
            <Image 
              src={src} 
              alt="Arquitetura" 
              fill
              priority={index === 0}
              className={styles.image}
              unoptimized
            />
          </div>
        ))}
        {/* Gradientes idênticos ao do Dalber para escurecer o topo e a base */}
        <div className={styles.gradientTop}></div>
        <div className={styles.gradientBottom}></div>
      </div>

      <div className={`container ${styles.content}`}>
        <span 
          ref={(el) => (textRefs.current[0] = el)} 
          className="eyebrow" 
          style={{ opacity: 0, color: "rgba(255,255,255,0.7)" }}
        >
          Arquitetura de Alto Padrão
        </span>
        
        <h1 
          ref={(el) => (textRefs.current[1] = el)} 
          className={`display ${styles.headline}`}
          style={{ opacity: 0 }}
        >
          Projetos Que Valorizam Seu Imóvel e Transformam a Sua Rotina.
        </h1>
        
        <p 
          ref={(el) => (textRefs.current[2] = el)} 
          className={styles.description}
          style={{ opacity: 0 }}
        >
          A segurança de um escritório em Ponta Grossa que une arquitetura sensível e engenharia de precisão.
        </p>
        
        <div 
          ref={(el) => (textRefs.current[3] = el)}
          className={styles.actions}
          style={{ opacity: 0 }}
        >
          <a href="#projetos" className="btn-light group">
            Conheça os projetos
            <ArrowRight size={16} className={styles.iconHover} />
          </a>
          <a href="https://wa.me/5542999699469" target="_blank" rel="noopener noreferrer" className="btn-outline-light">
            Agendar Reunião de Diagnóstico
          </a>
        </div>
      </div>
    </section>
  );
}
