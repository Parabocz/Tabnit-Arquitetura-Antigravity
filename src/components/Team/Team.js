"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import anime from "animejs";
import styles from "./Team.module.css";
import { ArrowRight } from "lucide-react";

const teamData = [
  {
    name: "Janayne Holodivski",
    prefix: "Arq.",
    role: "ARQUITETA E URBANISTA · CEO E FUNDADORA",
    description: "Arquiteta e urbanista formada pela Cescage, mãe do Frederick, de 3 anos, esposa e sócia do Fabrício. Acredita que todo projeto começa pelas pessoas que vão viver ali — para ela, arquitetura é sobre criar lares pensados para a rotina, os momentos e a história de cada família.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Rafaelle Medeiro",
    prefix: "Arq.",
    role: "ARQUITETA E URBANISTA · SÓCIA PROPRIETÁRIA",
    description: "Arquiteta e urbanista formada pela Cescage, sócia da Tabnit e mãe da Maria Valentina. Com um olhar atento aos detalhes e forte senso de responsabilidade técnica, preza por entregas de alta qualidade, aliando organização, precisão e sensibilidade em cada etapa do projeto.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Fabrício Garcia",
    prefix: "Eng.",
    role: "ENGENHEIRO CIVIL · CEO E FUNDADOR",
    description: "Engenheiro civil formado pela Universidade Paulista, pai do Frederick, esposo e sócio da Janayne. Atua com foco em planejamento, execução e gestão de obras, acreditando que uma boa engenharia garante segurança, organização e tranquilidade em todas as etapas.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function Team() {
  const sectionRef = useRef(null);
  const textGroupRef = useRef(null);
  const rowsRef = useRef([]);

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
              targets: rowsRef.current,
              translateY: [40, 0],
              opacity: [0, 1],
              delay: anime.stagger(200, { start: 400 }),
              easing: "easeOutCubic",
              duration: 1000
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

  return (
    <section ref={sectionRef} className="section" id="sobre">
      <div className={`container`}>
        
        {/* Cabeçalho */}
        <div className={styles.header} ref={textGroupRef}>
          <span className="eyebrow" style={{ color: "var(--muted)", opacity: 0 }}>A Equipe</span>
          
          <h2 className={`display-sm ${styles.title}`} style={{ opacity: 0 }}>
            Linguagem autoral e precisão técnica.
          </h2>
          
          <div className={styles.paragraphs} style={{ opacity: 0 }}>
            <p>
              A Tabnit desenvolve projetos residenciais e comerciais personalizados, partindo de uma leitura cuidadosa de cada terreno e objetivo para garantir não apenas estética, mas também rentabilidade e viabilidade de execução.
            </p>
          </div>
          
          <a href="#contato" className={`link-underline group ${styles.link}`} style={{ opacity: 0 }}>
            Fale com os fundadores
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Lista Horizontal Empilhada */}
        <div className={styles.list}>
          {teamData.map((member, index) => (
            <div 
              key={index}
              className={styles.row}
              ref={(el) => (rowsRef.current[index] = el)}
              style={{ opacity: 0 }}
            >
              <div className={styles.imageCol}>
                <div className={styles.imageWrapper}>
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill
                    className={styles.image}
                    sizes="(max-width: 768px) 100vw, 40vw"
                    unoptimized
                  />
                </div>
              </div>
              
              <div className={styles.textCol}>
                <h3 className={styles.memberName}>
                  <span className={styles.prefix}>{member.prefix}</span> {member.name}
                </h3>
                <span className={styles.memberRole}>{member.role}</span>
                <p className={styles.memberDesc}>{member.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
