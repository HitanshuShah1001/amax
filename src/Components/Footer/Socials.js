import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Socials() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        marginTop: 10,
      }}
    >
      <ul
        style={{
          display: "flex",
          listStyle: "none",

          margin: 0,
          padding: 0,
        }}
      >
        <li style={{ marginRight: 10 }}>
          <a href="https://www.instagram.com">
            <FaInstagramSquare size={"30px"} />
          </a>
        </li>
        <li style={{ marginRight: 10 }}>
          <a href="https://www.facebook.com">
            <FaFacebook size={"30px"} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com">
            <FaLinkedin size={"30px"} />
          </a>
        </li>
      </ul>
    </div>
  );
}
