import { 
  Building2, 
  Users, 
  Briefcase, 
  FileText, 
  Home, 
  Gavel 
} from "lucide-react";

const PracticeAreas = () => {
  const areas = [
    {
      icon: Building2,
      title: "Direito Empresarial",
      description: "Assessoria completa para empresas, desde a constituição até operações complexas de fusões e aquisições.",
    },
    {
      icon: Users,
      title: "Direito de Família",
      description: "Atuação sensível e profissional em divórcios, inventários, guarda e questões sucessórias.",
    },
    {
      icon: Briefcase,
      title: "Direito Trabalhista",
      description: "Defesa dos direitos de trabalhadores e empresas em todas as instâncias.",
    },
    {
      icon: FileText,
      title: "Direito Civil",
      description: "Contratos, responsabilidade civil, cobranças e demais questões do cotidiano jurídico.",
    },
    {
      icon: Home,
      title: "Direito Imobiliário",
      description: "Compra, venda, locação e regularização de imóveis com segurança jurídica.",
    },
    {
      icon: Gavel,
      title: "Direito do Consumidor",
      description: "Proteção e defesa dos direitos nas relações de consumo.",
    },
  ];

  return (
    <section id="areas" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block opacity-0 animate-fade-up">
            Áreas de Atuação
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 opacity-0 animate-fade-up animation-delay-200">
            Expertise jurídica completa
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto opacity-0 animate-fade-up animation-delay-400" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="opacity-0 animate-fade-up group relative bg-background p-8 shadow-card hover:shadow-elegant transition-all duration-500 border border-border/50"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Gold accent line */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              
              <area.icon
                className="h-10 w-10 text-charcoal-light group-hover:text-gold mb-6 transition-colors duration-300"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;
