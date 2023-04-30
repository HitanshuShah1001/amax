import React from "react";
import ImagesSlider from "../Carousel/ImagesSlider";
import Getaquote from "../Components/GetAQuote/Getaquote";
import Features from "../Components/Features/Features";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <div className="image-carousel">
          <ImagesSlider />
        </div>
        <Getaquote />
        <div className="feature-container">
          <Features />
        </div>
      </div>
      <Footer />
    </div>
  );
}
