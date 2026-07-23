import styles from "./Footer.module.css";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={`container`}>
        <div className={styles.topSection}>
          <h2 className={`display-sm ${styles.ctaText}`}>
            Está na hora de viver um espaço que realmente represente quem você é.
          </h2>
          <a 
            href="https://wa.me/5542999699469" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.ctaButton}
          >
            Falar com um Especialista no WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.infoCol}>
            <span className={styles.colTitle}>ENDEREÇO</span>
            <span className={styles.colText}>Av. Monteiro Lobato, 1600 - Sl 7</span>
            <span className={styles.colText}>Jardim Carvalho, Ponta Grossa - PR</span>
          </div>

          <div className={styles.infoCol}>
            <span className={styles.colTitle}>CONTATO</span>
            <span className={styles.colText}>+55 42 99969-9469</span>
            <span className={styles.colText}>contato@tabnitarquitetura.com.br</span>
          </div>
          
          <div className={styles.infoCol}>
            <span className={styles.colTitle}>TABNIT.</span>
            <span className={styles.colText}>&copy; {new Date().getFullYear()} Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
