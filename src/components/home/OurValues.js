import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import "../../css/ourValues.css";
import myValueOne from "../../assets/myValueOne.png";
import myValueTwo from "../../assets/myValueTwo.png";
import myValueThree from "../../assets/myValueThree.png";
import myValuefour from "../../assets/myValuefour.png";
export default function OurValues() {
  return (
    <section id="values" className="values">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Our Values</h2>
          <p>Odit est perspiciatis laborum et dicta</p>
        </header>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <picture>
                <img src={myValueOne} className="img-fluid" alt="" />
              </picture>
              <h3>Grow your ecommerce business and reduce cost</h3>
              <p>Reduce Shipping Cost & Increase Reach</p>
              <div className=" text-center ">
                <button
                  type="submit"
                  className="btn btn-primary justify-content-md-center"
                >
                  <span style={{ paddingRight: 10 }}>Read More</span>
                  <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="box">
              <picture>
                <img src={myValueTwo} className="img-fluid" alt="" />
              </picture>
              <h3>Improve shipping quality</h3>
              <p>
                Repudiandae amet nihil natus in distinctio suscipit id.
                Doloremque ducimus ea sit non.
              </p>
              <div className=" text-center ">
                <button
                  type="submit"
                  className="btn btn-primary justify-content-md-center"
                >
                  <span style={{ paddingRight: 10 }}>Read More</span>
                  <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="box">
              <picture>
                <img src={myValueThree} className="img-fluid" alt="" />
              </picture>
              <h3>Superior experience for your customers.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
              <div className=" text-center ">
                <button
                  type="submit"
                  className="btn btn-primary justify-content-md-center"
                >
                  <span style={{ paddingRight: 10 }}>Read More</span>
                  <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </div>
            </div>
          </div>

          <div
            className=" col-lg-4 off-mt-4 mt-lg-0 space"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div className="box">
              <picture>
                <img src={myValuefour} className="img-fluid" alt="" />
              </picture>
              <h3>Automated shipping & Reduce efforts.</h3>
              <p>
                Quam rem vitae est autem molestias explicabo debitis sint. Vero
                aliquid quidem commodi.
              </p>
              <div className=" text-center ">
                <button
                  type="submit"
                  className="btn btn-primary justify-content-md-center"
                >
                  <span style={{ paddingRight: 10 }}>Read More</span>
                  <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
