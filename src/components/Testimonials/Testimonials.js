import styles from "./Testimonials.module.css";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Eduarda Schram",
    text: "O nível de confiança que a equipe nos passou desde a primeira reunião foi absurdo. Entregaram no prazo, com uma qualidade que superou nossas expectativas. A obra foi tranquila, sem as dores de cabeça habituais.",
    role: "Cliente Residencial"
  },
  {
    name: "Meri Gomes",
    text: "Pontualidade e profissionalismo impecáveis. A união da arquitetura com a engenharia fez toda a diferença para o sucesso do nosso projeto. Senti que meu investimento estava seguro.",
    role: "Cliente Comercial"
  },
  {
    name: "Luis Andrei",
    text: "Colaboração top, entrega no prazo e o resultado final ficou sensacional. Recomendo de olhos fechados.",
    role: "Cliente Residencial"
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`container`}>
        <div className={styles.header}>
          <h2 className={styles.title}>O Que Dizem Nossos Clientes</h2>
          <p className={styles.subtitle}>Confiança construída com resultados reais.</p>
        </div>
      </div>
      
      {/* Drag to scroll container */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {testimonials.map((item, index) => (
            <div key={index} className={styles.card}>
              <Quote className={styles.quoteIcon} size={32} />
              <p className={styles.text}>"{item.text}"</p>
              <div className={styles.authorInfo}>
                <h4 className={styles.name}>{item.name}</h4>
                <span className={styles.role}>{item.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
