import React from "react";
import ImagesSlider from "../Carousel/ImagesSlider";

export default function Home() {
  return (
    <div>
      <div className="main-container" style={{ marginTop: 20 }}>
        <h1 className="header">
          MANUFACTURERS OF{" "}
          <span style={{ color: "yellow" }}>ROAD CONSTRUCTION </span>MACHINERY
        </h1>
        <div className="image-carousel">
          <ImagesSlider />
        </div>
      </div>
    </div>
  );
}
