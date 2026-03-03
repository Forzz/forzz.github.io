import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import BackToTop from "@/components/ui/BackToTop";
import ScrollProgress from "@/components/ui/ScrollProgress";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import CursorGlow from "@/components/ui/CursorGlow";
import ScrollReset from "@/components/ui/ScrollReset";
import PageBackground from "@/components/ui/PageBackground";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Contacts from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <ScrollReset />
      <PageBackground />
      <ScrollProgress />
      <NoiseOverlay />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Contacts />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
