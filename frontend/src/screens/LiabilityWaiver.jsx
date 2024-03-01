import Header from "../components/Header";
import { useEffect } from "react";

const LiabilityWaiver = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <h3>Acknowledgment of Risk</h3>
      <p>
        I, the undersigned, understand and acknowledge that participating in dog
        adventure services, including but not limited to off-leash park visits,
        socialization activities, and transportation provided by Red's
        Runaround, involves potential risks and dangers to my dog(s) and myself.
        These risks may include, but are not limited to, injuries, loss, damage,
        or death resulting from accidents, the unpredictability of dogs,
        exposure to outdoor elements, and interactions with other dogs.
      </p>
      <h3>Assumption of Risk</h3>
      <p>
        I voluntarily agree to assume all risks associated with my dog(s)'
        participation in services offered by Red's Runaround. I understand the
        nature of dog adventure services and accept full responsibility for any
        personal injury, illness, damage, loss, claim, liability, or expense, of
        any kind, that my dog(s) or I may experience or incur in connection with
        our participation in Red's Runaround services.
      </p>
      <h3>Release and Waiver of Liability</h3>
      <p>
        In consideration of and as a condition for the participation of my
        dog(s) in the services provided by Red's Runaround, I, for myself and on
        behalf of my heirs, executors, administrators, and assigns, hereby
        release, waive, and forever discharge Red's Runaround, its owners,
        employees, agents, and representatives from any and all liability,
        claims, demands, actions, and causes of action whatsoever directly or
        indirectly arising out of or related to any loss, damage, injury, or
        death, that may be sustained by my dog(s) or me, or any property
        belonging to me, while participating in any activity, or while in, on or
        upon the premises where the services are being conducted.
      </p>
      <h3>Indemnification</h3>
      <p>
        I further agree to indemnify, defend, and hold harmless Red's Runaround
        and its representatives from and against any loss, damage, liability,
        claim, or expense (including reasonable attorneys' fees) arising out of
        my dog(s)' participation in the services provided by Red's Runaround.
      </p>
      <h3>Acknowledgment of Policies and Procedures</h3>
      <p>
        I acknowledge that I have read, understand, and agree to abide by all
        policies and procedures of Red's Runaround, including but not limited to
        those regarding scheduling, cancellations, health and vaccination
        requirements, and behavior standards for participating dogs.{" "}
      </p>
      <h3>Understanding of Agreement</h3>
      <p>
        I acknowledge and agree that this Liability Waiver and Release is
        intended to be as broad and inclusive as permitted by law and that if
        any portion is held invalid, the balance shall continue in full legal
        force and effect. This agreement constitutes the entire agreement
        between the parties regarding the subject matter herein.
      </p>
      <p>
        I have read this Liability Waiver and Release of Claims, fully
        understand its terms, and understand that I am giving up substantial
        rights, including my right to sue. I acknowledge that I am signing the
        agreement freely and voluntarily, and intend by my signature for this to
        be a complete and unconditional release of all liability to the greatest
        extent allowed by law.
      </p>
    </>
  );
};

export default LiabilityWaiver;
