import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";

const SafetyScreen = () => {
  return (
    <>
      <Header />
      <br />
      <h3 className="title-heading">Safety & Rules</h3>
      <p className="smaller-subtitle-heading">
        We've established strict safety protocols and rules to ensure every
        adventure is as safe as it is fun. Here's everything you need to know!
      </p>
      <Row>
        <Col>
          <h3>Our Safety Protocols</h3>
          <ol>
            <li>
              <h3>Health and Vaccination Requirements:</h3>
              <ul>
                <li>
                  All dogs must be treated for fleas and ticks before joining
                  group activities. Any visibly sick dogs will not be allowed to
                  participate in group activities. All dogs must be up-to-date
                  with vaccinations, including rabies, distemper, and
                  bordetella. You can provide us with a copy of your dog's
                  vaccination records or have your vet email them to us at
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Behavioral Assessments:</h3>
              <ul>
                <li>
                  Each dog is continuously assessed by our team to ensure they
                  are a good fit for our group play environment.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Secure Transportation:</h3>
              <ul>
                <li>
                  Dogs are safely secured in our vehicles using specially
                  designed dog seatbelts and harnesses.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Emergency Procedures:</h3>
              <ul>
                <li>
                  In the event of an incident requiring veterinary attention,
                  our immediate priority is to assess the situation and select
                  the most appropriate emergency veterinary facility. As soon as
                  these critical decisions are made, we will promptly contact
                  you with all the necessary details. We will inform you of the
                  chosen veterinary location and the nature of the incident,
                  allowing you to meet the handler directly at the vet's office
                  if you choose to do so.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <h3>Secure Play Areas:</h3>
              <ul>
                <li>
                  We only use dog parks that are fully fenced in and well
                  maintained to prevent escape and injury
                </li>
              </ul>
            </li>
          </ol>
        </Col>
      </Row>
    </>
  );
};
export default SafetyScreen;
