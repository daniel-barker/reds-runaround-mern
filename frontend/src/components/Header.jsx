// import "../assets/Header.css";
import logo from "../assets/main_logo.png";
import { Image, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="text-center">
        <Nav className="w-100 d-flex justify-content-between">
          <Nav.Link href="/about">About Us</Nav.Link>
          <Nav.Link href="/services">Our Services</Nav.Link>
          <Nav.Link href="/faqs">FAQs</Nav.Link>
          <Nav.Link href="/safety">Safety & Rules</Nav.Link>
          <Nav.Link href="/parks">Parks</Nav.Link>
          <Nav.Link href="/contact">Contact Us</Nav.Link>
          {/* <Nav.Link href="gallery">Happy Tails & Highlights</Nav.Link> */}
        </Nav>
      </Navbar>
      <Nav.Link className="text-center" href="/">
        <Image
          src={logo}
          alt="Red's Dog Park Adventures Logo"
          className="nav-logo"
          fluid
        />
      </Nav.Link>
    </>
  );
};

export default Header;
