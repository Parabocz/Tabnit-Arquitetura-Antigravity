"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import anime from "animejs";
import gsap from "gsap";
import styles from "./Portfolio.module.css";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Casa PK",
    location: "Ponta Grossa, PR",
    type: "Residencial",
    description: "Arquitetura contemporânea de alto padrão, focada na integração de ambientes e conforto.",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Casa TV",
    location: "Ponta Grossa, PR",
    type: "Residencial",
    description: "Interiores sofisticados com iluminação autoral e materiais de curadoria.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Projeto Canaan",
    location: "Curitiba, PR",
    type: "Comercial",
    description: "Espaço corporativo focado em produtividade, com layout inteligente e design acolhedor.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Casa FD",
    location: "Ponta Grossa, PR",
    type: "Residencial",
    description: "Fachada imponente e layout que prioriza a privacidade sem perder a conexão visual.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Apto CR",
    location: "São Paulo, SP",
    type: "Residencial",
    description: "Elegância minimalista em um apartamento urbano de luxo com vista privilegiada.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/apto_cr_mockup_1784775622276.jpg"
  },
  {
    title: "Casa HJ",
    location: "Ponta Grossa, PR",
    type: "Residencial",
    description: "Residência envolta por paisagismo, equilibrando texturas naturais e modernidade.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/casa_hj_mockup_1784775631747.jpg"
  },
  {
    title: "Projeto Overall",
    location: "Curitiba, PR",
    type: "Comercial",
    description: "Arquitetura corporativa de alta performance, unindo tecnologia e estética.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/projeto_overall_mockup_1784775640216.jpg"
  },
  {
    title: "Casa M",
    location: "Joinville, SC",
    type: "Residencial",
    description: "Volumes geométricos puros criando uma moradia serena e imponente.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/casa_m_mockup_1784775648124.jpg"
  },
  {
    title: "Casa V",
    location: "Ponta Grossa, PR",
    type: "Residencial",
    description: "Conexão perfeita entre interior e exterior com uma deslumbrante piscina infinita.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/casa_v_mockup_1784775675672.jpg"
  },
  {
    title: "Casa GB",
    location: "Curitiba, PR",
    type: "Residencial",
    description: "Uso arrojado de pedras naturais e aço compondo uma residência contemporânea.",
    image: "/api/files/ab3ad7d6-a229-4ed3-b338-ec798e5eef96/casa_gb_mockup_1784775683848.jpg"
  }
];

export default function Portfolio() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const listItemsRef = useRef([]);
  const imagesRef = useRef([]);
  const imageContainerRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            anime({
              targets: headerRef.current.children,
              translateY: [22, 0],
              opacity: [0, 1],
              delay: anime.stagger(100),
              easing: "easeOutCubic",
              duration: 800
            });
            anime({
              targets: listItemsRef.current,
              translateY: [20, 0],
              opacity: [0, 1],
              delay: anime.stagger(100, { start: 200 }),
              easing: "easeOutCubic",
              duration: 800
            });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseEnter = (index) => {
    if (index === activeIndex) return;
    
    const currentImage = imagesRef.current[activeIndex];
    const nextImage = imagesRef.current[index];
    
    // Animação de saída da imagem atual
    gsap.to(currentImage, { 
      opacity: 0, 
      scale: 1.05, 
      duration: 0.8, 
      ease: "power2.inOut",
      zIndex: 1
    });
    
    // Animação de entrada da nova imagem
    gsap.fromTo(nextImage, 
      { opacity: 0, scale: 0.95, zIndex: 2 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.inOut" }
    );
    
    // Anima a troca do texto de descrição abaixo da imagem
    gsap.fromTo("#project-info-block", 
      { opacity: 0, y: 10 }, 
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
    );
    
    setActiveIndex(index);
  };

  const handleClick = (index) => {
    handleMouseEnter(index);
    if (imageContainerRef.current) {
      imageContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <section ref={sectionRef} className={`section ${styles.section}`} id="projetos">
      <div className="container">
        {/* Cabeçalho espelhando o estilo da Equipe */}
        <div className={styles.header} ref={headerRef}>
          <span className="eyebrow" style={{ color: "var(--muted)", opacity: 0 }}>Projetos</span>
          
          <h2 className={`display-sm ${styles.title}`} style={{ opacity: 0 }}>
            Projetos em destaque
          </h2>
          
          <div className={styles.paragraphs} style={{ opacity: 0 }}>
            <p>
              Residências e espaços comerciais desenvolvidos para diferentes regiões, culturas e estilos de vida.
            </p>
          </div>
          
          <a href="#projetos" className={`link-underline group ${styles.link}`} style={{ opacity: 0 }}>
            Ver todos os projetos
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* GSAP Interactive Layout */}
        <div className={styles.interactiveGrid}>
          
          {/* Lista de Nomes (Esquerda) */}
          <div className={styles.projectList}>
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`${styles.listItem} ${activeIndex === index ? styles.listItemActive : ""}`}
                ref={(el) => (listItemsRef.current[index] = el)}
                onMouseEnter={() => handleMouseEnter(index)}
                onClick={() => handleClick(index)}
                style={{ opacity: 0 }}
              >
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <div className={styles.itemIcon}>
                  <ArrowUpRight size={24} strokeWidth={1} />
                </div>
              </div>
            ))}
          </div>

          {/* Coluna da Direita (Imagem + Detalhes - Sticky) */}
          <div className={styles.rightColumn} ref={imageContainerRef}>
            <div className={styles.imageContainer}>
              {projects.map((project, index) => (
                <div 
                  key={index}
                  ref={(el) => (imagesRef.current[index] = el)}
                  className={styles.imageWrapper}
                  style={{ 
                    opacity: index === 0 ? 1 : 0,
                    zIndex: index === 0 ? 2 : 1
                  }}
                >
                  <Image 
                    src={project.image}
                    alt={project.title}
                    fill
                    className={styles.image}
                    unoptimized
                  />
                  <div className={styles.overlay}></div>
                </div>
              ))}
            </div>
            
            <div className={styles.activeProjectInfo} id="project-info-block">
              <div className={styles.projectMeta}>
                <span>{projects[activeIndex].location}</span>
                <span className={styles.separator}></span>
                <span>{projects[activeIndex].type}</span>
              </div>
              <p className={styles.projectDesc}>
                {projects[activeIndex].description}
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
