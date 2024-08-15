import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Wanna get in touch?</h3>
            <p>
              I'm baby big mood keffiyeh snackwave tote bag. Fit beard squid
              single-origin coffee praxis meditation master cleanse locavore.
              Seitan austin knausgaard, prism mixtape banjo adaptogen try-hard
              celiac wayfarers actually.{" "}
            </p>
            <p>
              Squid swag fanny pack, af letterpress mustache ascot +1 raclette
              tbh lo-fi. Vexillologist polaroid gentrify, yuccie before they
              sold out small batch freegan Brooklyn XOXO enamel pin taxidermy
              cliche woke hot chicken cornhole.
            </p>
            <p>
              Brunch seitan venmo, bespoke iceland distillery etsy normcore
              tilde same viral coloring book tattooed taxidermy.
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">submit</button>

            </form>
          </article>
        </section>
      </main>
    </Layout>
  );
};

export default Contact;
