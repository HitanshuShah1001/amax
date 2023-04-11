import React from "react";
import "./styles-right.css";

export default function Imagewithdescriptiononright({
  imgsource,
  alt = "Image",
  title,
  children,
}) {
  return (
    <div className="container-div">
      <img className="about-us-image" src={imgsource} alt={alt} />
      <div className="desc">
        <h1 className="profile">{title}</h1>
        <hr />

        {children}
      </div>
    </div>
  );
}
