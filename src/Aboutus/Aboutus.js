import React from "react";
import "./styles.css";
export default function Aboutus() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1 style={{ textAlign: "center" }}>About Us</h1>
      <img
        src={require("../Carousel/AboutUs.png")}
        alt="About Us Logo"
        style={{
          height: 300,
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          objectFit: "fill",
        }}
      />
      <div style={{ width: "90%" }}>
        <h4>
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
        </h4>
        <h4>What makes us different?</h4>
        <ul className="skilllist">
          <li>Comitted to Quality</li>
          <li>Standard Operating Procedure (SOP) based manufacturing line</li>
          <li>Completely In-house machinery Set up</li>
          <li>Larger working space for increasing production demands</li>
          <li>Skilled & experienced fabrication team</li>
          <li>Distinct QC and testing for all our product range</li>
        </ul>
      </div>
    </div>
  );
}
