import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Colonhesi Advocacia" className="h-10 w-10" />
            <span className="font-serif text-lg text-background">
              Colonhesi Advocacia
            </span>
          </div>
          
          <p className="text-stone text-sm text-center md:text-right">
            © {new Date().getFullYear()} Colonhesi Advocacia. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
