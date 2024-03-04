import home from "../assets/home.png";
import { Image, Container } from "react-bootstrap";
import { useEffect } from "react";
import Header from "../components/HeaderNoLogo";

const HomeScreen = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <Image src={home} fluid />
      <Container>
        <h1 className="title-heading">Welcome to Red's Runaround</h1>
        <p className="subtitle-heading">The Ultimate Playdate for Pups!</p>
        <p className="body-text px-5">
          Embark on a journey of tail-wagging fun with Red's Runaround, a unique
          dog adventure service designed to unleash joy! For just $60, we offer
          a 3-hour block of bliss and freedom for your furry companion. Our
          service is thoughtfully structured to maximize fun and minimize hassle
          for you and your pet.
        </p>
        <p className="body-text px-5">
          The adventure begins with a convenient pick-up by one of our dedicated
          handlers, ensuring each furry guest is comfortably and safely
          transported to their play destination. We believe in personalized
          attention, which is why each of our handlers is responsible for no
          more than three dogs at a time, allowing us to provide care that’s
          attentive, safe, and full of fun.
        </p>
        <p className="body-text px-5">
          Once at the park, your dog will enjoy three full hours of off-leash
          exploration, socialization, and play in a secure and stimulating
          environment. Our handlers are trained to make every moment count,
          ensuring each dog gets the exercise, interaction, and attention they
          deserve. Whether it’s running freely, playing fetch, or simply basking
          in the sun, your dog will have the time of their life.
        </p>
        <p className="body-text px-5">
          After a day of adventure, we ensure a safe and comfortable ride back
          home, where your pet will return, happily exhausted, from their day of
          exploration and fun. We handle all the logistics, so you can enjoy
          peace of mind knowing your pet is having the time of their life.
        </p>
        <p className="body-text px-5">
          Interested in scheduling an adventure for your dog? Give us a call!
          We’ll discuss availability and find a time that works best for you and
          your furry friend. At Red's Runaround, every day is an opportunity for
          a new adventure, and we can't wait to share this experience with your
          dog!
        </p>
      </Container>
    </>
  );
};

export default HomeScreen;
