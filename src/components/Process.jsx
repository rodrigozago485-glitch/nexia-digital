import "./Process.css";

function Process() {
  const steps = [
    {
      number: "01",
      title: "Você apresenta sua ideia",
      text: "Conte para a Nexia o que você precisa, qual é o seu negócio e qual objetivo deseja alcançar.",
    },
    {
      number: "02",
      title: "Planejamos o projeto",
      text: "Definimos a estrutura, o visual e as funcionalidades que fazem sentido para o seu negócio.",
    },
    {
      number: "03",
      title: "Desenvolvemos seu site",
      text: "Transformamos o planejamento em uma experiência digital moderna, responsiva e profissional.",
    },
    {
      number: "04",
      title: "Seu site vai para o ar",
      text: "Depois da aprovação, seu projeto pode ser publicado e apresentado aos seus clientes.",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-container">

        <div className="process-heading">
          <span>COMO FUNCIONA</span>

          <h2>
            Da ideia
            <strong>ao seu novo site.</strong>
          </h2>

          <p>
            Um processo simples e transparente para transformar sua ideia
            em uma presença digital profissional.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step) => (
            <article className="process-card" key={step.number}>

              <div className="process-number">
                {step.number}
              </div>

              <div className="process-content">
                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>

              <div className="process-line"></div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;