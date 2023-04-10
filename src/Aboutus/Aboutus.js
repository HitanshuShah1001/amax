import React, { useEffect, useState } from "react";
import "./styles.css";
import Imagewithdescriptiononleft from "../Components/Imagewithdescription/Imagewithdescriptionleft";
import Imagewithdescriptiononright from "../Components/Imagewithdescription/Imagewithdescriptionright";

export default function AboutUs() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);
  return (
    <div
      className="about-us-container"
      style={{ opacity: showContent ? 1 : 0, backgroundColor: "white" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div className="about-us-logo">
          <img
            src={require("../Carousel/Logo_withouttitle.png")}
            style={{ height: 80, width: 120 }}
            alt="Logo"
          />
        </div>
        <Imagewithdescriptiononleft
          title="Company Profile"
          imgsource={require("../assets/Amax-Equipments.png")}
        />
        <Imagewithdescriptiononright
          title="Infastructure"
          imgsource={require("../Carousel/AboutUs.png")}
        />
      </div>
    </div>
  );
}
