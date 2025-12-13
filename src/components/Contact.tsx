import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Rua Exemplo, 123 - Centro", "São Paulo - SP, 01000-000"],
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["(11) 3000-0000", "(11) 99000-0000"],
    },
    {
      icon: Mail,
      title: "E-mail",
      details: ["contato@colonhesiadvocacia.com.br"],
    },
    {
      icon: Clock,
      title: "Horário",
      details: ["Segunda a Sexta", "09h às 18h"],
    },
  ];

  return (
    <section id="contato" className="py-24 lg:py-32 bg-charcoal">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Info */}
          <div>
            <span className="text-sm font-medium tracking-widest uppercase text-gold mb-4 block opacity-0 animate-fade-up">
              Contato
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-6 opacity-0 animate-fade-up animation-delay-200">
              Entre em contato
            </h2>
            <div className="w-16 h-[1px] bg-gold mb-8 opacity-0 animate-fade-up animation-delay-400" />
            <p className="text-stone-light text-lg leading-relaxed mb-12 opacity-0 animate-fade-up animation-delay-600">
              Estamos prontos para atendê-lo. Entre em contato para agendar 
              uma consulta e conhecer como podemos ajudar no seu caso.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {contactInfo.map((info, index) => (
                <div
                  key={info.title}
                  className="opacity-0 animate-fade-up"
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  <info.icon className="h-6 w-6 text-gold mb-3" strokeWidth={1.5} />
                  <h3 className="font-serif text-lg font-medium text-primary-foreground mb-2">
                    {info.title}
                  </h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-stone-light text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Form */}
          <div className="opacity-0 animate-slide-in-right" style={{ animationDelay: '0.4s' }}>
            <form className="bg-charcoal-light/50 p-8 lg:p-10 border border-stone/20">
              <h3 className="font-serif text-2xl text-primary-foreground mb-6">
                Envie sua mensagem
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-stone-light mb-2">
                    Nome completo
                  </label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-b border-stone/40 focus:border-gold py-3 text-primary-foreground placeholder:text-stone outline-none transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-light mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-b border-stone/40 focus:border-gold py-3 text-primary-foreground placeholder:text-stone outline-none transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-light mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-transparent border-b border-stone/40 focus:border-gold py-3 text-primary-foreground placeholder:text-stone outline-none transition-colors"
                    placeholder="(00) 00000-0000"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-stone-light mb-2">
                    Mensagem
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b border-stone/40 focus:border-gold py-3 text-primary-foreground placeholder:text-stone outline-none transition-colors resize-none"
                    placeholder="Como podemos ajudar?"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold-light text-charcoal font-medium py-4 tracking-wide transition-colors duration-300"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
