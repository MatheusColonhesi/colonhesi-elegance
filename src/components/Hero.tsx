import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-charcoal/70" />

      <div className="relative z-10 container mx-auto px-6 lg:px-12 text-center">
        <div className="opacity-0 animate-fade-up">
          <img
            src={logo}
            alt="Colonhesi Advocacia"
            className="h-24 w-24 mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        <h1 className="opacity-0 animate-fade-up animation-delay-200 font-serif text-4xl md:text-5xl lg:text-7xl font-medium text-primary-foreground tracking-tight mb-6">
          Colonhesi Advocacia
        </h1>

        <div className="opacity-0 animate-fade-up animation-delay-400 w-16 h-[1px] bg-gold mx-auto mb-8" />

        <p className="opacity-0 animate-fade-up animation-delay-600 text-lg md:text-xl text-stone-light max-w-2xl mx-auto font-light tracking-wide leading-relaxed mb-12">
          Excelência jurídica com compromisso e dedicação.
          <br className="hidden md:block" />
          Soluções personalizadas para cada cliente.
        </p>

        <a
          href="#sobre"
          className="opacity-0 animate-fade-up animation-delay-800 inline-flex items-center gap-2 text-sm font-medium tracking-widest uppercase text-gold hover:text-gold-light transition-colors duration-300"
        >
          Conheça-nos
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
