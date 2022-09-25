import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  const pageLinks = () => {
    return (
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="about">About us</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Terms of service</a>
        </li>
        <li>
          <a href="#">Privacy policy</a>
        </li>
      </ul>
    );
  };
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row>
          <Col>
            <div className=" footer-info">
              <a href="index.html" className="logo d-flex align-items-center">
                <span>My Ship</span>
              </a>
              <p>
                Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
                nada terra videa magna derita valies darta donna mare fermentum
                iaculis eu non diam phasellus.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="#" className="twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="#" className="instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="#" className="linkedin">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className=" footer-links">
              <h4>Useful Links</h4>
              {pageLinks()}
            </div>
          </Col>
          <Col>
            <div className=" footer-links">
              <h4>Our Services</h4>
              {pageLinks()}
            </div>
          </Col>
          <Col>
            <div className=" footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                Address Address
                <strong>Phone:</strong> +1 5589 55488 55
                <strong>Email:</strong> info@example.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
