import React from "react";
import ImagesSlider from "../Carousel/ImagesSlider";

export default function Home() {
  return (
    <div>
      <div className="main-container" style={{ marginTop: 20 }}>
        <div className="image-carousel">
          <ImagesSlider />
        </div>
      </div>
    </div>
  );
}
