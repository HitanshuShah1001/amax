import React from "react";
import Socials from "./Socials";
import Contact from "./Contact";
import Privatelimited from "./Privatelimited";
import { styles } from "./styles";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
      <div style={styles.footer}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "20%",
            justifyContent: "space-around",
            padding: "10px",
          }}
        >
          <img
            src={require("../../Carousel/Amax_logo.JPG")}
            alt="Company Logo"
            style={{ height: "5rem", marginRight: "1rem" }}
          />
          <p style={{ marginTop: 10 }}>
            Survey No. 777,Limbasi-Vastana Road,via Ahmedabad-Baroda National
            Highway,Dist Kheda,Gujarat-387520
          </p>
        </div>
        <Contact />
      </div>
      <Privatelimited />
    </footer>
  );
};

export default Footer;
