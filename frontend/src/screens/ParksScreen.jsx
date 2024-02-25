import Header from "../components/Header";
import banneker from "../assets/banneker.jpeg";
import duke from "../assets/duke.jpeg";
import jameshunter from "../assets/jameshunter.jpeg";
import shirlington from "../assets/shirlington.jpeg";
import utah from "../assets/utah.jpeg";
import { Row, Col, Image } from "react-bootstrap";

const ParksScreen = () => {
  return (
    <>
      <Header />
      <br />
      <h3 className="title-heading">Parks</h3>
      <p className="smaller-subtitle-heading">
        Explore our Adventure Locations!
      </p>
      <br />
      <Row className="align-items-center">
        <Col sm={6}>
          <Image src={banneker} rounded fluid />
        </Col>
        <Col sm={6}>
          <h3>Benjamin Banneker Dog Park</h3>
          <p>
            <ul>
              <li>Address: 1700 N Sycamore Street, Arlington, VA 22205</li>
              <li>
                Highlights: Spacious area, well-maintained grounds, and props
                for your dogs to play on!
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="align-items-center">
        <Col sm={6}>
          <h3>Duke Street Dog Park</h3>
          <p>
            <ul>
              <li>Address: 5000 Duke Street, Alexandria, VA 22304</li>
              <li>
                Highlights: Spacious area, well-maintained grounds, and props
                for your dogs to play on!
              </li>
            </ul>
          </p>
        </Col>
        <Col sm={6}>
          <Image src={duke} rounded fluid />
        </Col>
      </Row>
      <br />
      <br />
      <Row className="align-items-center">
        <Col sm={6}>
          <Image src={jameshunter} rounded fluid />
        </Col>
        <Col sm={6}>
          <h3>James Hunter Dog Park</h3>
          <p>
            <ul>
              <li>Address: 1230 N Hartford Street, Arlington, VA 22201</li>
              <li>
                Highlights: Water feature in the summer months, spacious, soft
                ground, great for fetch!
              </li>
            </ul>
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <Row className="align-items-center">
        <Col sm={6}>
          <h3>Shirlington Dog Park</h3>
          <p>
            <ul>
              <li>Address: 2710 S Oakland Street, Arlington, VA 22206</li>
              <li>
                Highlights: 2 acres total, and one quarter mile in length. Great
                for running!
              </li>
            </ul>
          </p>
        </Col>
        <Col sm={6}>
          <Image src={shirlington} rounded fluid />
        </Col>
      </Row>
      <br />
      <br />
      {/* <Row className="align-items-center">
        <Col sm={6}>
          <Image src={utah} rounded fluid />
        </Col>
        <Col sm={6}>
          <h3>Utah Dog Park</h3>
          <p>
            <ul>
              <li>Address: 3191 S Utah Street, Arlington, VA 22206</li>
              <li>Highlights:</li>
            </ul>
          </p>
        </Col>
      </Row> */}
    </>
  );
};
export default ParksScreen;
