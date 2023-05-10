import React, { useEffect, useState } from "react";
import ImagesSlider from "../Carousel/ImagesSlider";
import Getaquote from "../Components/GetAQuote/Getaquote";
import Features from "../Components/Features/Features";
import Testimonial from "./Testimonial/Testimonial";
import Imagewithdesccarousel from "../Components/Imagewithdesccarousel/Imagewithdesccarousel";
import Footer from "../Components/Footer/footer";
import History from "./History/History";
import "./styles.css";
import { ProductList } from "../Components/Products/Products";

export default function Home() {
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
        <ProductList />
        <Footer />
      </div>
    </div>
  );
}
