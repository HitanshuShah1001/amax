import React from "react";
import { styles } from "./styles";
import Socials from "./Socials";

export default function Contact() {
  return (
    <div style={styles.contact}>
      <p
        style={{
          margin: 0,
          textAlign: "center",
          fontSize: "16px",
          color: "black",
        }}
      >
        Contact Us:
      </p>
      <ul style={styles.list}>
        <li style={{ margin: 0, textAlign: "center", marginTop: "12px" }}>
          +91 91605 73422
        </li>
        <li style={{ margin: 0, textAlign: "center", marginTop: "12px" }}>
          sales@amaxequipments.com
        </li>
      </ul>
      <Socials />
    </div>
  );
}
