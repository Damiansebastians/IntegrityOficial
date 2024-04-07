import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Newsletter = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Subscribed!");
  };

  return (
    <section id="newsletter">
      <hr className="w-11/12 mx-auto" />

      <div className="container py-24 sm:py-32">
        <h3 className="text-center text-4xl md:text-4xl font-bold">
          CONTACTO DE{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            INFORMACIÓN
          </span>
        </h3>
        <p className="text-xl text-muted-foreground text-center mt-4 mb-8">
        Para solicitar información contacta con:
        </p>
        <p className="text-center text-xl">
           info@integrityoficial.com.
          </p>
          <p className= "text-xl text-muted-foreground text-center mt-4 mb-8">
            O en el siguiente formulario:
          </p>

        <form
          className="flex flex-col w-full md:w-16/12 lg:w-6/12 mx-auto gap-4 md:gap-2"
          onSubmit={handleSubmit}
        >
          <Input
            placeholder="Nombre"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="text"
          />
          <Input
            placeholder="Correo"
            className="bg-muted/50 dark:bg-muted/80 "
            aria-label="email"
          />
          <Input
            placeholder="Mensaje"
            className="bg-muted/50 dark:bg-muted/80 h-32"
            aria-label="textarea"
          />
          <Button>Contacto</Button>
        </form>
      </div>

      <hr className="w-11/12 mx-auto" />
    </section>
  );
};
