import React from "react";
import "./features.css";
import { Featurepoints } from "../../Constants/Featurepoints";

export default function Features() {
  return (
    <div
      style={{
        display: "flex",
        alignSelf: "center",
      }}
    >
      {Featurepoints.map((indfeat, findex) => (
        <div className="list-container">
          <div>
            <h2 style={{ textAlign: "center" }}>{indfeat.name}</h2>
          </div>
          <ul>
            {indfeat.feature.map((feat, index) => (
              <li>{feat}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
