import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e) {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const service = form.service.value;
    const message = form.message.value;

    const whatsappMessage = `
Hello DozenBrains,

I would like to make an enquiry.

Name: ${name}
Email: ${email}
Service: ${service}

Message:
${message}
    `.trim();

    const whatsappNumber = "26662620909";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSent(true);

    window.open(whatsappUrl, "_blank");
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">GET IN TOUCH</div>

          <h1>
            Let's talk <span>technology.</span>
          </h1>

          <p>
            Ask about IT services, repairs, software projects or student
            attachment opportunities.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">

          {/* CONTACT INFORMATION */}
          <div>
            <div className="eyebrow">CONTACT DOZEN BRAINS</div>

            <h2>
              Tell us what you <span>need.</span>
            </h2>

            <p className="lead">
              Send us your enquiry and we will get back to you as soon as
              possible.
            </p>

            <div className="contact-list">

              <div>
                <div className="contact-icon">
                  <Phone />
                </div>

                <div>
                  <strong>Phone</strong>
                  <p>+266 6262 0909</p>
                </div>
              </div>


              <div>
                <div className="contact-icon">
                  <Mail />
                </div>

                <div>
                  <strong>Email</strong>
                  <p>ntatemilobookings@gmail.com</p>
                </div>
              </div>


              <a
  href="https://www.google.com/maps/dir/?api=1&destination=-29.38211,27.53021"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-location-link"
>
  <div className="contact-icon">
    <MapPin />
  </div>

  <div>
    <strong>Location</strong>

    <p>
      Maseru, Lesotho
      <br />
      Ha-Abia near Ha Motaung
    </p>

    <span className="directions-text">
      Get Directions →
    </span>
  </div>
</a>

            </div>
          </div>


          {/* CONTACT FORM */}
          <form className="contact-form" onSubmit={submit}>

            <label>
              Your name

              <input
                name="name"
                required
                placeholder="Full name"
              />
            </label>


            <label>
              Email address

              <input
                name="email"
                required
                type="email"
                placeholder="you@example.com"
              />
            </label>


            <label>
              What can we help with?

              <select
                name="service"
                defaultValue="IT Support"
              >
                <option>IT Support</option>
                <option>Computer Repair</option>
                <option>Software Development</option>
                <option>Hardware / Box Programming</option>
                <option>Internship / Attachment</option>
                <option>Other</option>
              </select>
            </label>


            <label>
              Message

              <textarea
                name="message"
                required
                rows="6"
                placeholder="Tell us about your request..."
              ></textarea>
            </label>


            <button
              className="btn btn-primary"
              type="submit"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} />
                  Sent to WhatsApp
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Enquiry
                </>
              )}
            </button>


            {sent && (
              <p className="form-success">
                Your enquiry has been prepared and sent to DozenBrains
                WhatsApp.
              </p>
            )}

          </form>

        </div>
      </section>
    </>
  );
}

