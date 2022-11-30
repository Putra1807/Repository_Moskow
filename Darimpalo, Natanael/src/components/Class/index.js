import classes from "../../local-json/class.json";
import yoga from "../../../src/assets/images/class/yoga-class.jpg";

export default function Class() {
  return (
    <section className="class section" id="class">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center mb-5">
            <h6 data-aos="fade-up">Get A Perfect Body</h6>
            <h2 data-aos="fade-up" data-aos-delay={200}>
              Our Training Classes
            </h2>
          </div>

          {classes.map(({ name, id, instructor, description, image }) => (
            <div
              className="col-lg-4 col-md-6 col-12"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="class-thumb">
                <img src={yoga} className="img-fluid" alt="Class" />
                <div className="class-info mb-4">
                  <h3 className="mb-1">
                    <div key={id}>{name}</div>
                  </h3>
                  <span>
                    <strong>Trained by</strong> - {instructor}
                  </span>
                  <span className="class-price">$50</span>
                  <p className="mt-3">{description}</p>
                </div>
              </div>
            </div>
          ))}
          
          <div
            className="mt-5 mt-lg-0 mt-md-0 col-lg-4 col-md-6 col-12"
            data-aos="fade-up"
            data-aos-delay={500}
          ></div>
        </div>
      </div>
    </section>
  );
}
