import React from "react";
import ImagesSlider from "../Carousel/ImagesSlider";
import Getaquote from "../Components/GetAQuote/Getaquote";
import Features from "../Components/Features/Features";
import Footer from "../Footer/Footer";
import Testimonial from "./Testimonial/Testimonial";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ececec" }}>
      <div className="main-container">
        <div className="image-carousel">
          <ImagesSlider />
        </div>
        <div>
          <Getaquote />
          <div className="feature-container">
            <Features />
          </div>
          <Testimonial />
        </div>
        <Footer />
      </div>
    </div>
  );
}
