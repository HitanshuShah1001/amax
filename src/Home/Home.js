import React, { useEffect, useState } from "react";
import ImagesSlider from "../Carousel/ImagesSlider";
import Getaquote from "../Components/GetAQuote/Getaquote";
import Features from "../Components/Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import Imagewithdesccarousel from "../Components/Imagewithdesccarousel/Imagewithdesccarousel";
import History from "./History/History";
import "./styles.css";

export default function Home() {
  const [slidIn, setIsSlidIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlidIn(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="main-container">
        <div className="image-carousel">
          <ImagesSlider />
        </div>

        <Getaquote />
        <div className="feature-container">
          <Features />
        </div>
        <Testimonial />
        <Imagewithdesccarousel />
        <History />
      </div>
    </div>
  );
}
