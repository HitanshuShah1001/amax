import React from "react";
import "./styles-footer.css";
import ContactDetails from "./ContactDetails/ContactDetails";
import Address from "./Address/Address";
import ContactIndex from "./ContactDetails/ContactIndex";
export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        backgroundColor: "black",
        flexDirection: "column",
      }}
    >
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
        <h1 className="contact-us-header">Contact Us</h1>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <ContactIndex />
        <div>
          <Address
            title={"Industry"}
            desc={
              "Survey No. 777, Limbasi-Vastana Road, Off. Ahmedabad- Baroda National Highway, Dist. Kheda, Gujarat."
            }
          />
          <Address title={"Office"} desc={"Ahemdabad,Gujarat"} />
        </div>
        <div>
          <h4 style={{ color: "white" }}>Hi</h4>
          <h4 style={{ color: "white" }}>Hi</h4>
          <h4 style={{ color: "white" }}>Hi</h4>
        </div>
      </div>
    </div>
  );
}
