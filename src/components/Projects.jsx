import { useState } from "react";
import "./Projects.css";

import print1 from "./images/print1.png";
import print3 from "./images/print3.png";
import print4 from "./images/print4.png";

function Projects() {
  const imagens = [
    {
      src: print1,
      alt: "Página do Restaurante Casa dos Sabores",
    },
    {
      src: print3,
      alt: "Página do Restaurante Casa dos Sabores",
    },
    {
      src: print4,
      alt: "Página do Restaurante Casa dos Sabores",
    },
  ];

  const [imagemPrincipal, setImagemPrincipal] = useState(0);

  const miniaturas = imagens.filter(
    (_, index) => index !== imagemPrincipal
  );

  return (
    <section className="projects-section" id="projetos">
      <div className="projects-container">

        <div className="projects-heading">
          <span>PROJETO EM DESTAQUE</span>

          <h2>
            Restaurante Casa dos Sabores
            <strong>Um projeto desenvolvido pela Nexia Digital.</strong>
          </h2>

          <p>
            Um site criado para apresentar o restaurante de forma
            profissional, moderna e facilitar a conexão com seus clientes.
          </p>
        </div>

        <div className="restaurant-gallery">

          {/* IMAGEM PRINCIPAL */}

          <div className="gallery-main">
            <img
              src={imagens[imagemPrincipal].src}
              alt={imagens[imagemPrincipal].alt}
            />
          </div>

          {/* MINIATURAS */}

          <div className="gallery-side">

            {miniaturas.map((imagem) => {
              const index = imagens.findIndex(
                (item) => item.src === imagem.src
              );

              return (
                <button
                  key={imagem.src}
                  className="gallery-item"
                  onClick={() => setImagemPrincipal(index)}
                >
                  <img
                    src={imagem.src}
                    alt={imagem.alt}
                  />
                </button>
              );
            })}

          </div>

        </div>

        {/* INFORMAÇÕES DO PROJETO */}

        <div className="project-footer">

          <div>
            <span>PROJETO</span>
            <h3>Restaurante Casa dos Sabores</h3>
          </div>

          <div>
            <span>DESENVOLVIDO POR</span>
            <h3>Nexia Digital</h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;