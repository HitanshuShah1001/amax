import React from "react";
import ContactDetails from "./ContactDetails";
import { Contactdetails } from "../../../Constants/Contact-details";

export default function ContactIndex() {
  return (
    <div>
      {Contactdetails.map(({ source, value }, index) => (
        <ContactDetails title={value} source={source} key={index} />
      ))}
    </div>
  );
}
