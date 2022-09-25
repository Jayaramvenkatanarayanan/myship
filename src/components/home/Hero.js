import React from "react";
// import Container from "react-bootstrap/Container";
import "../../css/hero.css";
import HeroImage from "../../assets/hero-img.svg";
import CountUp from "react-countup";

export default function Hero() {
  const [loading, setLoading] = React.useState(false);
  const onStart = () => {
    setLoading(true);
  };
  const onEnd = () => {
    setLoading(false);
  };
  const containerProps = {
    "aria-busy": loading,
  };
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row gy-4 d-flex justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2 data-aos="fade-up">Your Lightning Fast Delivery Partner</h2>
            <p data-aos="fade-up" data-aos-delay="100">
              Facere distinctio molestiae nisi fugit tenetur repellat non
              praesentium nesciunt optio quis sit odio nemo quisquam. eius quos
              reiciendis eum vel eum voluptatem eum maiores eaque id optio ullam
              occaecati odio est possimus vel reprehenderit
            </p>

            <form
              action="#"
              className="form-search d-flex align-items-stretch mb-3"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Airway Bill Number(AWB)"
              />
              <button type="submit" className="btn btn-primary">
                Search
              </button>
            </form>

            <div className="row gy-4" data-aos="fade-up" data-aos-delay="400">
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <CountUp delay={0} end={300} />
                  <p>Clients</p>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <CountUp
                    end={50000}
                    duration="3"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                  <p>Happy Sellers</p>
                </div>
              </div>

              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <CountUp
                    end={24500}
                    duration="3"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                  <p>Pin Codes Covered</p>
                </div>
              </div>
              <div className="col-lg-3 col-6">
                <div className="stats-item text-center w-100 h-100">
                  <CountUp
                    end={1560}
                    duration="3"
                    onStart={onStart}
                    onEnd={onEnd}
                    containerProps={containerProps}
                  />
                  <p>Shipments Daily</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="col-lg-5 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
          >
            <img
              src={HeroImage}
              className="img-fluid mb-3 mb-lg-0"
              alt="MyHero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
