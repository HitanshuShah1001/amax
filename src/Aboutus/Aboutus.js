import React, { useEffect, useState } from "react";
import "./styles.css";
import { Features } from "../Constants/Features";

export default function AboutUs() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <div
      className="about-us-container"
      style={{ opacity: showContent ? 1 : 0, backgroundColor: "#F5F5F5" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px 20px 20px",
        }}
      >
        <img
          src={require("../Carousel/Logo_withouttitle.png")}
          style={{ height: 80, width: 120 }}
          alt="Logo"
        />
      </div>
      <img
        className="about-us-image"
        src={require("../Carousel/AboutUs.png")}
        alt="About Us Logo"
      />
      <div className="about-us-content">
        <p className="about-us-description">
          We are proud to be one of the most renowned Manufacturers of quality
          Road Equipment that is used by Contractors and Governments pan-India
          and further exploring International markets. Our products are known
          for their reliability, durability, and performance and we are
          committed to providing our customers with the best products and
          services possible. With about 21 years of experience in the industry,
          our team of experts have developed a reputation for excellence and
          performance of our products. We are constantly working to improve our
          products and processes to meet the changing needs of our customers in
          this competitive market.
        </p>
        <h4 className="about-us-difference-header">What makes us different?</h4>
        <ul className="about-us-difference-list">
          {Features.map((feature, id) => (
            <div key={id}>
              <li key={id}>{feature}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
