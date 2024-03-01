import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const OurServicesScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <br />
      <h1 className="title-heading">Our Services</h1>
      <p className="subtitle-heading">
        Welcome to a World of Tail-Wagging Adventures!
      </p>
      <br />
      <Row>
        <Col>
          <ol>
            <li>
              <h3>Four Hour Dog Park Adventure - $60</h3>
              <ul>
                <li>
                  Duration: A total of 4 hours, including pick-up and drop-off.
                </li>
                <li>
                  Experience: 3 hours of playtime at a local dog park, where
                  your dog can run, play, and socialize off-leash in a safe and
                  monitored environment.
                </li>
                <li>
                  Personalized Care: Each handler is assigned to only three
                  dogs, ensuring individual attention and care.
                </li>
                <li>
                  Convenience: We handle all transportation, providing a
                  stress-free experience for both you and your dog.
                </li>
                <li>
                  Scheduling: Call us to discuss availability and schedule a
                  fun-filled adventure for your dog!
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Add-On Bath Service - Additional $25</h3>
              <ul>
                <li>
                  Post-Adventure Clean-Up: After a day full of play, opt for our
                  bath service to ensure your dog comes home clean and fresh.
                </li>
                <li>
                  Gentle Care: We use pet-friendly products and provide a
                  thorough, gentle cleaning.
                </li>
                <li>
                  Convenience: No more messy bathrooms at home; we take care of
                  the cleanup!
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>One-on-One Walks - $20 per 30m, $35 per hour</h3>
              <ul>
                <li>
                  Personalized Attention: Ideal for dogs who prefer individual
                  walks or need special attention.
                </li>
                <li>
                  Flexible Duration: From a quick stroll to an extended walk, we
                  cater to your dog’s needs and energy levels.
                </li>
                <li>
                  Safety and Enjoyment: Our experienced handlers ensure a safe
                  and enjoyable experience for your pet.
                </li>
              </ul>
            </li>
          </ol>
        </Col>
      </Row>
    </>
  );
};
export default OurServicesScreen;
