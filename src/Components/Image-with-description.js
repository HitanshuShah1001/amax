import React from "react";

export default function Imagewithdescription({
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
          and further exploring International markets. Our products are known
          for their reliability, durability, and performance and we are
          committed to providing our customers with the best products and
          services possible. With about 21 years of experience in the industry,
          our team of experts have developed a reputation for excellence and
          performance of our products. We are constantly working to improve our
          products and processes to meet the changing needs of our customers in
          this competitive market.
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
