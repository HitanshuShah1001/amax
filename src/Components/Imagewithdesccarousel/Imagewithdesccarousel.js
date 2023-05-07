/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect } from "react";
import { useState } from "react";
import { Imagesshowcase } from "../../Constants/Imageswithdesc";
import "./images-with-desc-styles.css";

export default function Imagewithdesccarousel() {
  const [showcontent, setShowcontent] = useState(false);

  useEffect(() => {
    setShowcontent(true);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {Imagesshowcase.map(({ title, description }, index) => (
        <div
          style={{
            width: "35vw",
            marginTop: 15,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 13,
          }}
          className={`background-linear-grad ${
            showcontent ? "fade-cards-in-show" : "fade-cards-in"
          }`}
        >
          <h3 style={{ color: "white", textAlign: "center" }}>{title}</h3>
          <p style={{ color: "white", textAlign: "center" }}>{description}</p>
        </div>
      ))}
    </div>
  );
}
