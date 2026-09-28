import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Barbearia Zago",
      category: "Site para negócio",
      description:
        "Site desenvolvido para apresentar os serviços da barbearia de forma moderna e facilitar o contato com os clientes.",
    },
    {
      title: "Restaurante Casa dos Sabores",
      category: "Site para restaurante",
      description:
        "Site desenvolvido para apresentar o restaurante, seu cardápio, informações e os principais destaques do negócio.",
    },
  ];

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">

        <div className="projects-heading">
          <div>
            <span>PROJETOS</span>

            <h2>
              Alguns trabalhos
              <strong>que já criamos.</strong>
            </h2>
          </div>

          <p>
            Cada projeto é desenvolvido de acordo com a identidade
            e as necessidades de cada negócio.
          </p>
        </div>

        <div className="projects-grid">

          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>

              <div className={`project-preview project-${index + 1}`}>
                <div className="preview-browser">

                  <div className="preview-bar">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="preview-content">
                    <small>{project.category}</small>

                    <h3>{project.title}</h3>

                    <div className="preview-line"></div>

                    <div className="preview-blocks">
                      <i></i>
                      <i></i>
                      <i></i>
                    </div>
                  </div>

                </div>
              </div>

              <div className="project-info">

                <div>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                </div>

                <div className="project-number">
                  0{index + 1}
                </div>

                <p>{project.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;