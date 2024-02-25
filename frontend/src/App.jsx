import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import OurServicesScreen from "./screens/OurServicesScreen";
import FAQScreen from "./screens/FAQScreen";
import SafetyScreen from "./screens/SafetyScreen";
import ParksScreen from "./screens/ParksScreen";
import Footer from "./components/Footer";
import ThankYouScreen from "./screens/ThankYouScreen";
import ContactScreen from "./screens/ContactScreen";
import RegistrationScreen from "./screens/RegistrationScreen";

function App() {
  return (
    <BrowserRouter>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutUsScreen />} />
          <Route path="/services" element={<OurServicesScreen />} />
          <Route path="/faqs" element={<FAQScreen />} />
          <Route path="/safety" element={<SafetyScreen />} />
          <Route path="/parks" element={<ParksScreen />} />
          <Route path="/thankyou" element={<ThankYouScreen />} />
          <Route path="/contact" element={<ContactScreen />} />
          <Route path="/registration" element={<RegistrationScreen />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
