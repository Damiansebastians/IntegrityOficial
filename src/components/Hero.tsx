import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
              Nuevo proyecto de INTEGRITY <br></br>
            </span>{" "}
            El Moroloco, Bujan, DaSilva <br></br>
          </h1>{" "}
          
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Sigo pensándote 
            </span>{" "}
            LANZAMIENTO 26/04
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          !Próximamente en todas las plataformas!
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
        <a 
  href="https://open.spotify.com/intl-es/artist/2uNcnzZVBcvvc1PDLlBjnw?si=4uMaIBINTt2uNRwWA3Vlsg" 
  target="_blank"
>
  <Button 
    style={{ 
      backgroundColor: 'green',
      color: 'white'
    }}
    className="w-full md:w-1/2"    
  >
    SPOTIFY
  </Button>
</a>

          <a style={{ backgroundColor: 'red', color: 'white' }}
            href="https://www.youtube.com/@integrityoficial"
            target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            YOUTUBE OFICIAL
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="">
        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
