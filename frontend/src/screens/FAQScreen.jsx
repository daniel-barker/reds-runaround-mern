import Header from "../components/Header";
import { Row, Col } from "react-bootstrap";
import { useEffect } from "react";

const FAQScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <br />
      <h1 className="title-heading">Frequently Asked Questions</h1>
      <br />
      <Row>
        <Col>
          <div className="faqs">
            <h3>
              What are the requirements for my dog to join the park adventures?
            </h3>
            <ul>
              <li>
                Vaccination and Health Requirements: Dogs must be up-to-date on
                vaccinations, including rabies, distemper, and bordetella
                (kennel cough). They should also be free of fleas, ticks, and
                contagious diseases.
              </li>
              <li>
                No Excessive Barking: While some barking is natural, excessive
                or disruptive barking, especially if it causes distress to other
                dogs, might not be suitable for group settings.
              </li>
              <li>
                Dogs must exhibit good social behavior with other dogs and
                humans. Aggressive, overly dominant, or overly fearful behaviors
                might necessitate removal from the group.
              </li>
              <li>
                Spayed or Neutered: The big thing that we worry about is a
                socially mature dog. If your dog is not neutered but is still
                friendly with other dogs and humans, we will still accept them.
                All female dogs must be spayed.
              </li>
              <li>
                Leash Behavior: Dogs should be reasonably well-behaved on a
                leash, as they will need to be leashed for transport or in
                certain areas of the park.
              </li>
              <li>
                Appropriate Play Style: Dogs should engage in play that is
                appropriate and not overly rough or dangerous to other dogs.
              </li>
              <li>
                Suitable for Group Dynamics: Some dogs may not thrive in a group
                setting. Dogs that are extremely timid, stressed, or anxious in
                groups may be better suited for our One-on-One walks!
              </li>
              <li>
                No Resource Guarding: Dogs that exhibit resource guarding
                behavior (over toys, food, people, etc.) may not be suitable for
                group play.
              </li>
            </ul>
            <br />
            <h3>
              How do you ensure the safety of the dogs during the adventures?
            </h3>
            <br />
            <div className="text-center">
              <h4>
                At Red's Runaround, ensuring the safety of your dogs during our
                adventures is our highest priority, and we have implemented
                several key measures to maintain a secure and enjoyable
                environment.
              </h4>
            </div>
            <br />
            <ul>
              <li>
                Pre-Adventure Health and Behavioral Assessments: Each dog is
                evaluated for health, temperament, and behavior before joining
                our adventures to ensure they are fit for the activity and
                compatible in a group setting.
              </li>
              <li>
                Small Group Sizes with Dedicated Handlers: We maintain a low
                dog-to-handler ratio, with one handler for every three dogs,
                allowing for close supervision and individual attention.
              </li>
              <li>
                Trained and Experienced Staff: Our handlers are trained in dog
                behavior, first aid, and emergency response, ensuring they are
                well-equipped to handle various situations and provide the best
                care for the dogs.
              </li>
              <li>
                Safe Transportation: Dogs are transported to and from the park
                in a safe manner, using specialized dog seatbelts that attach to
                the vehicle's seatbelt couplers. Each dog is required to wear a
                harness, which we provide if needed, for additional safety
                during transit.
              </li>
              <li>
                Choosing Safe and Suitable Locations: The parks we use for our
                adventures are carefully selected for their safety, maintenance,
                and suitability for off-leash play, ensuring a secure
                environment for the dogs.
              </li>
              <li>
                Emergency Protocols: We have clear procedures in place for
                emergencies, including immediate access to veterinary care if
                needed and a protocol for contacting owners promptly in any
                urgent situations.
              </li>
              <li>
                Regular Monitoring and Breaks: Throughout the adventure, dogs
                are closely monitored for signs of fatigue, overheating, or
                discomfort, with regular breaks for rest and hydration.
              </li>
            </ul>
            <br />
            <div className="text-center">
              <h4>
                By implementing these measures, we strive to create a safe and
                happy experience for all dogs under our care. Safety is not just
                a policy at Red's Runaround, it's a commitment we make every day
                to you and your furry family member.
              </h4>
            </div>
            <br />
            <h3>How do I know if my dog is a good fit for the adventures?</h3>
            <br />
            <div className="text-center">
              We welcome dogs of all shapes, sizes, and personalities, and we
              will work with you to determine if our adventures are a good fit
              for your dog. We will conduct a free in-home consultation to meet
              you and your dog, discuss your needs, and answer any questions you
              may have. We will also assess your dog's health, temperament, and
              behavior to ensure they are suitable for the adventures. If your
              dog is not a good fit for the adventures, we will recommend other
              services that may be more suitable, such as our One-on-One walks.
            </div>
            <br />
            <h3>How are dogs transported to and from the park?</h3>
            Secure Harness System:
            <ul>
              <li>
                Each dog is safely secured inside our vehicles using specialized
                dog seatbelts. These safety harnesses are specifically designed
                for canine passengers and attach directly to the car's existing
                seatbelt couplers.
              </li>
              <li>
                This system provides stability and safety for dogs during the
                drive, minimizing movement and reducing the risk of injury.
              </li>
            </ul>
            Harness Requirements:
            <ul>
              <li>
                For the effectiveness of our safety system, each dog must wear a
                harness during transport.
              </li>
              <li>
                We understand that not every owner may have a harness, so we
                provide high-quality harnesses upon request. This ensures that
                every dog, regardless of their own gear, receives the same level
                of safety during transportation.
              </li>
            </ul>
            Our Commitment:
            <ul>
              <li>
                Our team is trained to ensure each dog is comfortably and
                correctly harnessed in the vehicle before every drive.
              </li>
              <li>
                We regularly inspect and maintain our safety equipment to uphold
                the highest standards of safety for your dog.
              </li>
            </ul>
            <br />
            <div className="text-center little-bigger">
              Your pet's safety is our utmost concern, and we take every measure
              to ensure their journey to and from the park is as safe and
              comfortable as possible.
            </div>
            <br />
            <h3>Can I choose the time slot for my dog's adventure?</h3>
            <div className="text-center">
              During the winter months, due to the shorter period of light that
              we have, we currently only offer one time-slot and that is
              10am-2pm. During the longer days of the year we will offer a
              morning (9am-1pm) time-slot and an afternoon time-slot (2pm-6pm)
            </div>
            <br />
            <h3>What is included in the bath service?</h3>
            <div className="text-center">
              Our bath service includes a gentle and thorough wash using an
              oatmeal-based shampoo, known for its soothing properties and
              suitability for sensitive skin. This basic bathing package ensures
              your dog returns home clean and fresh. Please note, additional
              grooming services are currently unavailable.
            </div>
            <br />
            <h3>What is your cancellation and refund policy?</h3>
            <div className="text-center">
              We understand that plans can change, and we are happy to
              accommodate cancellations and rescheduling whenever possible. We
              ask that you provide at least 24 hours' notice for any
              cancellations or changes to your booking. This policy helps us
              manage our schedule and accommodate other clients efficiently.
              Cancellations made on the day of the scheduled service will be
              charged in full (that could've been another friends adventure!)
            </div>
            <br />
            <h3>How are payments handled?</h3>
            <div className="text-center">
              For your convenience, we accept multiple payment methods including
              cash, check, and digital payments through Venmo, Cash App, and
              Zelle. This flexibility allows you to choose the most convenient
              way to pay for our services.
            </div>
            <br />
            <h3>Can we meet the handler before booking a service?</h3>
            <div className="text-center">
              Absolutely! We encourage you to meet your dog's handler before
              booking a service. This gives you the opportunity to get to know
              them, ask questions, and ensure you feel comfortable with them
              before entrusting your dog to their care.
            </div>
            <br />
            <h3>Will I receive updates during my dog's adventure?</h3>
            <div className="text-center">
              Yes! If you'd like, we will happily send picture updates
              throughout the adventure. After every adventure, we will send a
              short report detailing the day's activities and any notable
              events.
            </div>
            <br />
            <h3>What areas do you service?</h3>
            <div className="text-center">
              We serve all of Arlington and parts of Alexandria. If you are
              outside of our service area, please contact us to discuss
              availability!
            </div>
            <br />
            <br />
            <br />
          </div>
        </Col>
      </Row>
    </>
  );
};
export default FAQScreen;
