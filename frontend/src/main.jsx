import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import HomeScreen from "./screens/HomeScreen";
import AboutUsScreen from "./screens/AboutUsScreen";
import OurServicesScreen from "./screens/OurServicesScreen";
import FAQScreen from "./screens/FAQScreen";
import SafetyScreen from "./screens/SafetyScreen";
import ParksScreen from "./screens/ParksScreen";
import ThankYouScreen from "./screens/ThankYouScreen";
import ContactScreen from "./screens/ContactScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import LiabilityWaiver from "./screens/LiabilityWaiver";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/about" element={<AboutUsScreen />} />
      <Route path="/services" element={<OurServicesScreen />} />
      <Route path="/faqs" element={<FAQScreen />} />
      <Route path="/safety" element={<SafetyScreen />} />
      <Route path="/parks" element={<ParksScreen />} />
      <Route path="/thankyou" element={<ThankYouScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/registration" element={<RegistrationScreen />} />
      <Route path="/liabilitywaiver" element={<LiabilityWaiver />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
