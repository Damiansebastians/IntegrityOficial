
//import LogoIntegrity from "../assets/logo_transp.png";

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-2">
          <a
            href="/"
            className="font-bold text-xl flex"
          >
          INTEGRITY MANAGEMENT
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">REDES SOCIALES</h3>
          <div>
            <a
              href="https://www.instagram.com/integrityoficial/"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Instagram
            </a>
          </div>

          <div>
            <a
              href="https://twitter.com/integrityoficia"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Twitter
            </a>
          </div>

          <div>
            <a
              href="https://www.facebook.com/"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Tiktok
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">PLATAFORMAS</h3>
          <div>
            <a
              href="https://www.youtube.com/@integrityoficial"
              target="_blank"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              href="https://open.spotify.com/intl-es/artist/2uNcnzZVBcvvc1PDLlBjnw?si=4uMaIBINTt2uNRwWA3Vlsg"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Spotify
            </a>
          </div>

          <div>
            <a
              href="https://www.apple.com/es/apple-music/"
              className="opacity-60 hover:opacity-100"
              target="_blank"
            >
              Apple Music
            </a>
          </div>
        </div> 

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              FAQ
            </a>
          </div>
        </div> */}

        {/* <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Community</h3>
          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Youtube
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Discord
            </a>
          </div>

          <div>
            <a
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitch
            </a>
          </div>
        </div> */}
      </section>

      <section className="container pb-14 text-center">
        <h3>
          &copy; 2024 Web creada por{" "}
          <a
            target="_blank"
            href="https://www.linkedin.com/in/damian-sebastian-silvera-collazo-/"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Damian Silvera
          </a>
        </h3>
      </section>
    </footer>
  );
};
