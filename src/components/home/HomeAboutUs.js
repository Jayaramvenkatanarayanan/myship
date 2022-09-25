import React from "react";
import "../../css/homeAboutUs.css";
import AboutUsImage from "../../assets/myabout.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
export default function HomeAboutUs() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="content">
              <h3>Who We Are</h3>
              <h2>
                Expedita voluptas omnis cupiditate totam eveniet nobis sint
                iste. Dolores est repellat corrupti reprehenderit.
              </h2>
              <p>
                Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                et. Inventore et et dolor consequatur itaque ut voluptate sed
                et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                corrupti.
              </p>
              <div className="text-center text-lg-start">
                <button type="submit" className="btn btn-primary">
                  <span style={{ paddingRight: 10 }}>Read More</span>
                  <FontAwesomeIcon icon={faCircleRight} />
                </button>
              </div>
            </div>
          </div>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <picture>
              <img src={AboutUsImage} className="img-fluid " alt="" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}
