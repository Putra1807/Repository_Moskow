import team01 from "../../assets/images/team/team-image01.jpg";
import classes from "../../local-json/team.json";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="mt-lg-5 mb-lg-0 mb-4 col-lg-5 col-md-10 mx-auto col-12">
            <h2 className="mb-4" data-aos="fade-up" data-aos-delay={300}>
              Hello, we are Gymso
            </h2>
            <p data-aos="fade-up" data-aos-delay={400}>
              You are NOT allowed to redistribute this HTML template
              downloadable ZIP file on any template collection site. You are
              allowed to use this template for your personal or business
              websites.
            </p>
            <p data-aos="fade-up" data-aos-delay={500}>
              If you have any question regarding{" "}
              <a
                rel="nofollow"
                href="https://www.tooplate.com/view/2119-gymso-fitness"
                target="_parent"
              >
                Gymso Fitness HTML template
              </a>
              , you can{" "}
              <a
                rel="nofollow"
                href="https://www.tooplate.com/contact"
                target="_parent"
              >
                contact Tooplate
              </a>{" "}
              immediately. Thank you.
            </p>
          </div>

          {classes.map(({ name, id, position }) => (
            <div
              className="mr-lg-auto mt-5 mt-lg-0 mt-md-0 col-lg-3 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={800}
            >
              <div className="team-thumb">
                <img src={team01} className="img-fluid" alt="Trainer" />
                <div className="team-info d-flex flex-column">
                  <h3>
                    <div key={id}>{name}</div>
                  </h3>
                  <span key={id}>{position}</span>
                  <ul className="social-icon mt-3">
                    <li>
                      <a href="#" className="fa fa-instagram" />
                    </li>
                    <li>
                      <a href="#" className="fa fa-facebook" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
