import React from "react";
import "./Address-styles.css";

export default function Address({ title, desc }) {
  return (
    <div>
      <h4>{title}</h4>
      <h5>{desc}</h5>
    </div>
  );
}
