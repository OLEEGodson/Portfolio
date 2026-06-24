import { useState } from "react";
import { developer } from "../data/Portfolio";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // simulate a network request with setTimeout
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  }

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <p className="section__label">Contact</p>
        <h2>Let's Work Together.</h2>

        <div className="contact__grid">
          {/* left copy */}
          <div className="contact__left">
            <p className="contact__intro">Have a question ? Let's talk</p>

            <div className="contact__details">
              <a href={`mailto:${developer.email}`} className="contact__detail">
                <span className="contact_detail-label">Email</span>
                <span className="contact__detail-value">{developer.email}</span>
              </a>

              <a
                href={developer.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail"
              >
                <span className="contact_detail-label">Github</span>
                <span className="contact__detail-value">
                  github.com/destinysolomon
                </span>
              </a>

              <a
                href={developer.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="contact__detail"
              >
                <span className="contact_detail-label">LinkedIn</span>
                <span className="contact__detail-value">
                  linkedIn.com/in/destinyokagbuo
                </span>
              </a>
            </div>
          </div>

          {/* Right-form */}
          <div className="contact__right">
            {status === "sent" ? (
              <div className="contact__success">
                <span className="contact__success-icon">✔</span>
                <p>Message sent. I'll be in Touch shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form__row">
                  <div className="form__field">
                    <label className="form__label" htmlFor="name">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="form__input"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form__field">
                    <label className="form__label" htmlFor="name">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form__input"
                      placeholder="Your@email.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form__field">
                    <label className="form__label" htmlFor="name">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="name"
                      className="form__input form__textarea"
                      placeholder="Tell me About your Project..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn--primary"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? "sending..." : "send message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
