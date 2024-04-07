import { Statistics } from "./Statistics";
import pilot from "../assets/logo_integrity_fondo.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  {" "}
                </span>
                ¿QUIENES SOMOS?
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
              En INTEGRITY nos dedicamos a impulsar el talento y la creatividad en la industria musical, brindando a artistas emergentes y establecidos una plataforma sólida y recursos innovadores para conectar con su audiencia. Nuestra misión es promover la diversidad y la inclusión, ofreciendo oportunidades únicas en producción, promoción y distribución. Valoramos la autenticidad, la integridad y la excelencia, y estamos comprometidos a inspirar y empoderar a la próxima generación de talentos musicales.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
