import React, { useRef, useEffect } from "react";
import "./features.css";
import { Featurepoints } from "../../Constants/Featurepoints";

export default function Features() {
  return (
    <div style={{ display: "flex", alignSelf: "center" }}>
      {Featurepoints.map((indfeat, findex) => (
        <div className="list-container">
          <div>
            <h3
              style={{ textAlign: "center", fontSize: "15px" }}
              className="fade-in"
            >
              {indfeat.name}
            </h3>
            <ul className="slide-in">
              {indfeat.feature.map((feat, index) => (
                <li>
                  <p>{feat}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
