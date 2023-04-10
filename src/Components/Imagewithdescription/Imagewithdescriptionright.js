import React from "react";
import "./styles-right.css";

export default function Imagewithdescriptiononright({
  imgsource,
  alt = "Image",
  title,
}) {
  return (
    <div className="container">
      <img className="about-us-image" src={imgsource} alt={alt} />
      <div className="desc">
        <h2 className="profile">{title}</h2>
        <hr />

        <p>
          With 20+ Years of Experience in manufacturing and trading of Road
          Construction machinery, we are growing our market presence now as Amax
          Equipments in the Domestic and International markets across the globe.
        </p>
      </div>
    </div>
  );
}
