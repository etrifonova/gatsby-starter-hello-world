import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>This is the About page</h2>
            <p>
              I'm baby big mood keffiyeh snackwave tote bag. Fit beard squid
              single-origin coffee praxis meditation master cleanse locavore.
              Seitan austin knausgaard, prism mixtape banjo adaptogen try-hard
              celiac wayfarers actually.
            </p>
            <p>
              Squid swag fanny pack, af letterpress mustache ascot +1 raclette
              tbh lo-fi. Vexillologist polaroid gentrify, yuccie before they
              sold out small batch freegan Brooklyn XOXO enamel pin taxidermy
              cliche woke hot chicken cornhole.
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage src='../assets/images/about.jpeg' alt='Person Pouring Salt in Bowl' className="about-img" placeholder="blurred"/>
        </section>
      </main>
    </Layout>
  );
};

export default About;
