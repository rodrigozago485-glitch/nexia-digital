import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">

        <div className="contact-heading">
          <span>VAMOS CONVERSAR</span>

          <h2>
            Seu próximo projeto
            <strong>começa aqui.</strong>
          </h2>

          <p>
            Tem uma ideia para seu negócio? Entre em contato com a
            Nexia Digital e vamos conversar sobre o seu projeto.
          </p>
        </div>

        <div className="contact-options">

          <a
            href="mailto:nexiadigital@gmail.com"
            className="contact-card"
          >
            <div>
              <span>EMAIL</span>
              <h3>nexiadigital@gmail.com</h3>
            </div>

            <strong>↗</strong>
          </a>

          <a
            href="https://wa.me/5511952909693"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div>
              <span>WHATSAPP</span>
              <h3>(11) 95290-9693</h3>
            </div>

            <strong>↗</strong>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;