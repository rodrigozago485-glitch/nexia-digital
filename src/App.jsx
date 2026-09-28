import "./App.css";

import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="site">

      <header className="navbar">
        <div className="logo">
          NEXIA<span>.</span>
        </div>

        <nav>
          <a href="#inicio">Início</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#contato" className="nav-button">
          Começar projeto
        </a>
      </header>

      <main>

        {/* PRIMEIRA TELA */}
        <section className="hero" id="inicio">

          <div className="hero-content">

            <div className="hero-tag">
              <span></span>
              NEXIA DIGITAL
            </div>

            <h1>
              Seu negócio merece
              <strong>um site extraordinário.</strong>
            </h1>

            <p>
              Criamos sites modernos, rápidos e responsivos
              para empresas e profissionais que querem se
              destacar no digital.
            </p>

            <div className="hero-buttons">

              <a href="#contato" className="primary-button">
                Solicitar um projeto
                <span>→</span>
              </a>

              <a href="#projetos" className="secondary-button">
                Ver projetos
              </a>

            </div>

            <div className="hero-stats">

              <div>
                <strong>100%</strong>
                <span>Responsivo</span>
              </div>

              <div>
                <strong>MODERNO</strong>
                <span>Design personalizado</span>
              </div>

              <div>
                <strong>WEB</strong>
                <span>Experiência digital</span>
              </div>

            </div>

          </div>

          <div className="hero-visual">

            <div className="glow"></div>

            <div className="floating-card card-one">
              <span>DESIGN</span>
              <strong>+</strong>
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
                  Build your
                  <span>digital future.</span>
                </h2>

                <div className="mini-button">
                  Explore
                </div>

                <div className="mini-lines">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

              </div>

            </div>

            <div className="floating-card card-two">
              <span>RESPONSIVE</span>
              <strong>100%</strong>
            </div>

          </div>

        </section>


        {/* SERVIÇOS */}
        <Services />


        {/* PROJETOS */}
        <Projects />


        <Contact />


        {/* APRESENTAÇÃO */}
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

      </main>

    </div>
  );
}

export default App;