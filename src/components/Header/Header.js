"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <a href="/" className={styles.logo}>
          TABNIT
        </a>
        
        <nav className={styles.nav}>
          <a href="#sobre" className="link-underline">Sobre</a>
          <a href="#projetos" className="link-underline">Projetos</a>
          <a href="#servicos" className="link-underline">Serviços</a>
          <a href="#contato" className="link-underline">Contato</a>
        </nav>

        <a 
          href="https://wa.me/5542999699469" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.waLink}
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
