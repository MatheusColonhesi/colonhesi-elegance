import { Scale, Users, Award, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Scale,
      title: "Ética",
      description: "Conduta pautada pelos mais altos padrões de integridade profissional.",
    },
    {
      icon: Users,
      title: "Dedicação",
      description: "Atendimento personalizado com foco nas necessidades de cada cliente.",
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Busca constante pela qualidade e resultados excepcionais.",
    },
    {
      icon: Shield,
      title: "Confiança",
      description: "Relacionamentos duradouros baseados em transparência e respeito.",
    },
  ];

  return (
    <section id="sobre" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Top section - Image and Text */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          {/* Left column - Attorney Photo */}
          <div className="opacity-0 animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            <div className="relative">
              <div className="aspect-[4/5] bg-secondary overflow-hidden">
                <img
                  src="/placeholder.svg"
                  alt="Advogado Colonhesi"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold -z-10" />
            </div>
          </div>

          {/* Right column - Text */}
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.3s' }}>
            <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight">
              Tradição e modernidade na advocacia
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              O escritório Colonhesi Advocacia nasceu da paixão pelo Direito e do compromisso 
              inabalável com a justiça. Com anos de experiência e uma equipe altamente qualificada, 
              oferecemos soluções jurídicas eficientes e personalizadas.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nossa missão é representar os interesses de nossos clientes com excelência, 
              ética e dedicação, sempre buscando os melhores resultados em cada caso.
            </p>
          </div>
        </div>

        {/* Bottom section - Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="opacity-0 animate-fade-up group p-6 bg-secondary/50 hover:bg-secondary transition-colors duration-300"
              style={{ animationDelay: `${0.4 + index * 0.15}s` }}
            >
              <value.icon
                className="h-8 w-8 text-gold mb-4 group-hover:scale-110 transition-transform duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl font-medium text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
