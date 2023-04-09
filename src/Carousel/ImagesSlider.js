import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Images } from "./Images";
import "./styles.css";
import { Settings } from "./Options";
import ImageRenderer from "./ImageRenderer";

export default function ImagesSlider() {
  return (
    <Slider {...Settings}>
      {Images.map((item) => (
        <ImageRenderer item={item} key={item.id} />
      ))}
    </Slider>
  );
}
