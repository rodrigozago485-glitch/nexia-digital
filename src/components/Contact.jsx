import "./Contact.css";
import { Mail, MessageCircle } from "lucide-react";

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
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nexiadigital@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-info">

              <div className="contact-icon">
                <Mail size={22} strokeWidth={1.8} />
              </div>

              <div>
                <span>EMAIL</span>
                <h3>nexia.digital01@gmail.com</h3>
              </div>

            </div>

            <strong>↗</strong>
          </a>

          <a
            href="https://wa.me/5511952909693?text=Ol%C3%A1!%20Vi%20o%20site%20da%20Nexia%20Digital%20e%20gostaria%20de%20criar%20um%20site%20para%20meu%20neg%C3%B3cio."
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-card-info">

              <div className="contact-icon whatsapp-icon">
                <MessageCircle size={22} strokeWidth={1.8} />
              </div>

              <div>
                <span>WHATSAPP</span>
                <h3>(11) 95290-9693</h3>
              </div>

            </div>

            <strong>↗</strong>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;