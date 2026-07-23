import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

// Substituindo Cormorant por Playfair que é mais limpa e moderna (similar à do Dalber)
const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400"], // O site de referência usa uma serifa bem leve/normal
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Tabnit Arquitetura — Arquitetura autoral",
  description: "Escritório de arquitetura autoral. Projetos residenciais e comerciais contemporâneos, com atuação nacional e internacional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
