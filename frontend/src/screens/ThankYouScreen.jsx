import { Row, Col, Container, Image, Button } from "react-bootstrap";
import ty from "../assets/ty.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";

const ThankYouScreen = () => {
  return (
    <>
      <Header />
      <Container className="text-center">
        <Row>
          <Col>
            <br />
            <Image src={ty} alt="Red" fluid rounded />
            <br />
            <br />

            <h1>Thank You!</h1>
            <p>
              Thank you for your submission! We will get back to you as soon as
              possible.
            </p>
            <Button as={Link} to="/" variant="dark">
              Home
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ThankYouScreen;
