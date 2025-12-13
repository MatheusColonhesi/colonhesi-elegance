import { ArrowDown } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden"
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
