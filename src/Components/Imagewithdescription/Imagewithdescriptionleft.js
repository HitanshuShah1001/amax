import React from "react";
import "./styles.css";

export default function Imagewithdescriptiononleft({
  imgsource,
  alt = "Image",
  title,
  children,
}) {
  return (
    <div className="container">
      <div className="desc">
        <h1 className="profile">{title}</h1>
        <hr />

        {children}
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
