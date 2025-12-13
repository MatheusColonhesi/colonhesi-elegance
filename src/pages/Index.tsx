import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <About />
      <PracticeAreas />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
