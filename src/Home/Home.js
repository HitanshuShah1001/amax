import React from "react";
import ImagesSlider from "../Carousel/ImagesSlider";
import Getaquote from "../Components/GetAQuote/Getaquote";
import Features from "../Components/Features/Features";
import { Footer } from "../Components/FooterLib/Footer";

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <div className="image-carousel">
          <ImagesSlider />
        </div>
        <Getaquote />
        <div
          style={{
            width: "100vw",
            alignSelf: "center",
            justifyContent: "center",
            display: "flex",
            marginTop: 10,
          }}
        >
          <Features />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
