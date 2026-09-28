import "./Services.css";

function Services() {
  const services = [
    {
      number: "01",
      title: "Sites Institucionais",
      text: "Sites profissionais para apresentar sua empresa, seus serviços e sua marca na internet.",
    },
    {
      number: "02",
      title: "Landing Pages",
      text: "Páginas criadas para apresentar uma oferta, produto ou serviço de forma objetiva e atrativa.",
    },
    {
      number: "03",
      title: "Sites Responsivos",
      text: "Seu site adaptado para celular, tablet e computador, proporcionando uma boa experiência em qualquer tela.",
    },
    {
      number: "04",
      title: "Integrações",
      text: "Botões de WhatsApp, formulários, mapas e outras funcionalidades para facilitar o contato com seus clientes.",
    },
  ];

  return (
    <section className="services-section" id="servicos">
      <div className="services-container">

        <div className="section-heading">
          <span>O QUE FAZEMOS</span>

          <h2>
            Seu negócio merece
            <strong>uma presença digital.</strong>
          </h2>

          <p>
            Desenvolvemos experiências digitais pensadas para
            apresentar seu negócio de forma profissional.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-top">
                <span>{service.number}</span>
                <div className="service-arrow">↗</div>
              </div>

              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;