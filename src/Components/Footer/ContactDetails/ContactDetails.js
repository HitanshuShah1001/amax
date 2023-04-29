import React from "react";
import "./Contact-details.css";

export default function ContactDetails({ title, source }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src={source}
        alt="Imagee"
        height={"20"}
        style={{ marginRight: 10 }}
      />
      <h4>{title}</h4>
    </div>
  );
}
