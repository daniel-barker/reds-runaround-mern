import { Container, Row, Col, ListGroup, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import red from "../assets/red.jpg";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3">
      <Container>
        <hr />
        <Row>
          <Col md={3}>
            <Image src={red} alt="Red" fluid rounded />
          </Col>
          <Col md={3}>
            <h5>Contact Information</h5>
            <p>
              Phone: (202) 709-7982
              <br />
              Email: info@redsrunaround.com
            </p>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <a
              href="https://www.instagram.com/redsrunaround/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} size="2x" /> @RedsRunaround
            </a>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>

            <Link to="/about">About Us</Link>
            <br />

            <Link to="/services">Our Services</Link>
            <br />
            <Link to="/faqs">FAQs</Link>
            <br />
            <Link to="/safety">Safety & Rules</Link>
            <br />
            <Link to="/parks">Parks</Link>
            <br />
            <Link to="/contact">Contact Us</Link>
            <br />
            <Link to="/gallery">Happy Tails & Highlights</Link>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            © {new Date().getFullYear()} Reds Runaround. All Rights Reserved.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
export default Footer;
