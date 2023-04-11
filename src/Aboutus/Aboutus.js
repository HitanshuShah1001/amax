import React, { useEffect, useState } from "react";
import "./styles.css";
import Imagewithdescriptiononleft from "../Components/Imagewithdescription/Imagewithdescriptionleft";
import Imagewithdescriptiononright from "../Components/Imagewithdescription/Imagewithdescriptionright";
import Fancytitle from "../Components/Titlefancy/Fancytitle";

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
            src={require("../assets/Amax-Logo-Iso.png")}
            style={{ width: 200 }}
            alt="Logo"
          />
        </div>
        <Imagewithdescriptiononleft
          title="Company Profile"
          imgsource={require("../assets/Amax-Equipments.png")}
        >
          <p>
            We are proud to be one of the most renowned Manufacturers of quality
            Road Equipment that is used by Contractors and Governments pan-India
            and further exploring International markets. With 20+ Years of
            Experience in manufacturing and trading of Road Construction
            machinery, we are growing our market presence now as Amax Equipments
            in the Domestic and International markets across the globe. Our
            products are known for their reliability, durability, and
            performance and we are committed to providing our customers with the
            best products and services possible.
          </p>
        </Imagewithdescriptiononleft>
        <Imagewithdescriptiononright
          title="Infastructure"
          imgsource={require("../assets/Worker-with-machine.png")}
        >
          <p>
            With 20+ Years of Experience in manufacturing and trading of Road
            Construction machinery, we are growing our market presence now as
            Amax Equipments in the Domestic and International markets across the
            globe.
          </p>
        </Imagewithdescriptiononright>
        <Imagewithdescriptiononleft
          title=""
          imgsource={require("../assets/Working-while-work.png")}
        >
          <Fancytitle />
          <p>
            We are proud to be one of the most renowned Manufacturers of quality
            Road Equipment that is used by Contractors and Governments pan-India
            and further exploring International markets. With 20+ Years of
            Experience in manufacturing and trading of Road Construction
            machinery, we are growing our market presence now as Amax Equipments
            in the Domestic and International markets across the globe. Our
            products are known for their reliability, durability, and
            performance and we are committed to providing our customers with the
            best products and services possible.
          </p>
        </Imagewithdescriptiononleft>
      </div>
    </div>
  );
}
