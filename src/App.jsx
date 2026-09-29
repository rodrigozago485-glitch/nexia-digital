import "./App.css";

import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Process from "./components/Process";

function App() {
  return (
    <div className="site">

      <header className="navbar">
        <a href="#inicio" className="logo">
          NEXIA<span>.</span>
        </a>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a
  href="https://wa.me/5511952909693?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Nexia%20Digital%20e%20gostaria%20de%20criar%20um%20site%20para%20meu%20neg%C3%B3cio."
  target="_blank"
  rel="noopener noreferrer"
  className="nav-button"
>
  Solicitar projeto
</a>

      </header>

      <main>

        <section className="hero" id="inicio">

          <div className="hero-content">

            <div className="hero-tag">
              <span></span>
              NEXIA DIGITAL
            </div>

            <h1>
              Seu negócio merece
              <strong>uma presença digital à altura.</strong>
            </h1>

            <p>
              Criamos sites modernos, profissionais e responsivos
              para empresas e profissionais que querem apresentar
              seu negócio de forma marcante na internet.
            </p>

            <div className="hero-buttons">

              <a href="#contato" className="primary-button">
                Quero criar meu site
                <span>→</span>
              </a>

              <a href="#projetos" className="secondary-button">
                Ver projetos
              </a>

            </div>

            <div className="hero-stats">

              <div>
                <strong>RESPONSIVO</strong>
                <span>Em qualquer tela</span>
              </div>

              <div>
                <strong>PERSONALIZADO</strong>
                <span>Design pensado para você</span>
              </div>

              <div>
                <strong>PROFISSIONAL</strong>
                <span>Presença digital</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="glow"></div>

            <div className="floating-card card-one">
              <span>DESIGN</span>
              <strong>CRIATIVO</strong>
            </div>

            <div className="website-window">

              <div className="window-top">

                <div className="window-dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>

                <span>nexia.digital</span>

              </div>

              <div className="window-content">

                <div className="mini-label">
                  DIGITAL EXPERIENCE
                </div>

                <h2>
                  Seu negócio.
                  <span>Seu espaço digital.</span>
                </h2>

                <div className="mini-button">
                  CONHECER
                </div>

                <div className="mini-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

            </div>

            <div className="floating-card card-two">
              <span>EXPERIÊNCIA</span>
              <strong>WEB</strong>
            </div>

          </div>

        </section>

        <Services />
        

        <Process />


        <Projects />

        <section className="intro-section">

          <span>DESIGN + TECNOLOGIA</span>

          <h2>
            Não criamos apenas sites.
            <strong>Criamos experiências.</strong>
          </h2>

          <p>
            Cada projeto é desenvolvido para transmitir profissionalismo,
            valorizar sua marca e facilitar a conexão entre você e seus clientes.
          </p>

        </section>

        <Contact />

      </main>

    </div>
  );
}

export default App;