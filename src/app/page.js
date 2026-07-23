import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SocialProof from "@/components/SocialProof/SocialProof";
import Differentials from "@/components/Differentials/Differentials";
import Team from "@/components/Team/Team";
import Portfolio from "@/components/Portfolio/Portfolio";
import Process from "@/components/Process/Process";
import Testimonials from "@/components/Testimonials/Testimonials";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Differentials />
        <Team />
        <Portfolio />
        <Process />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
