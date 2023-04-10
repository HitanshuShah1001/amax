import React from "react";
import "./styles.css";

export default function Imagewithdescriptiononleft({
  imgsource,
  alt = "Image",
  title,
}) {
  return (
    <div className="container">
      <div className="desc">
        <h2 className="profile">{title}</h2>
        <hr />

        <p>
          We are proud to be one of the most renowned Manufacturers of quality
          Road Equipment that is used by Contractors and Governments pan-India
          and further exploring International markets. With 20+ Years of
          Experience in manufacturing and trading of Road Construction
          machinery, we are growing our market presence now as Amax Equipments
          in the Domestic and International markets across the globe. Our
          products are known for their reliability, durability, and performance
          and we are committed to providing our customers with the best products
          and services possible.
        </p>
      </div>
      <img
        className="about-us-image"
        src={imgsource}
        alt={alt}
        style={{ width: "40%" }}
      />
    </div>
  );
}
