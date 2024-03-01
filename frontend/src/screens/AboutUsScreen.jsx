import Header from "../components/Header";
import { Row, Col, Image, Stack } from "react-bootstrap";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import Footer from "../components/Footer";
import { useEffect } from "react";

const AboutUsScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <Row className="text-center align-items-center">
        <h1 className="title-heading">About Us</h1>
      </Row>
      <Row className="text-center align-items-center">
        <Col sm={6}>
          <Image
            src={image1}
            alt="Red surrounded by friends at the park"
            fluid
            rounded
          />
        </Col>
        <Col sm={6}>
          <br />
          <h1>Our Story</h1>
          <p>
            Red's Runaround began not just as a business, but as a personal
            journey of discovery and healing. Our founder, a New York native,
            moved to Arlington, VA, during the challenging times of the
            pandemic. Leaving behind the open spaces of the Hudson Valley
            suburbs for a sixth-floor apartment in the heart of Ballston brought
            unforeseen challenges, especially for Red, a beloved canine
            companion. Red’s struggle with severe separation anxiety in the
            absence of his usual free-roaming environment was heart-wrenching.
            This change led to a significant realization - the undeniable link
            between a dog’s physical activity and their mental well-being.
          </p>
          <p>
            Determined to restore Red’s happiness, our founder embarked on a
            mission: long walks and hours of play at the local dog park became a
            daily routine. Miraculously, as Red’s activity increased, his
            anxiety diminished. It was a profound transformation - from a dog at
            the end of his leash with anxiety to one with controlled excitement
            and calm interactions. This journey with Red sparked an inspiration:
            if one dog could find such joy and peace through proper exercise and
            freedom, why not others?
          </p>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row className="text-center align-items-center">
        <Col sm={6}>
          <h1>Our Mission</h1>
          <p>
            At Red's Runaround, our mission is to bring this same sense of
            freedom and joy to every dog. We believe that adequate exercise,
            coupled with the joy of exploration and socialization, is not just
            beneficial but essential for a dog’s mental and physical health. Our
            service is dedicated to ensuring that dogs in urban settings, who
            might not have easy access to open, free spaces, can still
            experience the exhilaration of unleashed adventures.
          </p>
        </Col>
        <Col sm={6}>
          <Image src={image2} alt="Red at the park" fluid rounded />
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row>
        <Col className="justify-content-center align-items-center">
          <Image
            src={image3}
            alt="Red and Gradle sitting like the best dogs in the world"
            fluid
            rounded
          />
        </Col>
      </Row>
      <br />
      <Row className="align-items-center">
        <Col xs={2}></Col>
        <Col xs={8}>
          <ul>
            <li>
              Empathy for Every Paw: Understanding each dog's unique needs and
              behaviors.
            </li>
            <li>
              Commitment to Joyful Journeys: Ensuring every outing is filled
              with fun and freedom.
            </li>
            <li>
              Safety as a Priority: Maintaining the highest standards of safety
              and care.
            </li>
            <li>
              Community and Connection: Building a community of well-exercised,
              happy dogs and satisfied owners.
            </li>
            <li>
              Passion for Paws: A deep-rooted love for dogs drives everything we
              do.
            </li>
          </ul>
        </Col>
      </Row>
      <br />
      <Row>
        <Col className="text-center">
          <p className="subtitle-heading">
            Red's story is at the heart of our business. It's a story about
            overcoming challenges, rediscovering joy, and the incredible bond
            between humans and their canine companions. At Red's Runaround, we
            extend this story to your dog, promising adventures that bring out
            their happiest, healthiest self.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default AboutUsScreen;
