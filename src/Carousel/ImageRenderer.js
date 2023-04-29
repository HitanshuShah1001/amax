import React from "react";

export default function ImageRenderer({ item }) {
  return (
    <div key={item.id}>
      <img
        src={item.src}
        alt={item.alt}
        style={{
          width: "100%",
          height: "30vh",
          borderRadius: 13,
          objectFit: "cover",
        }}
      />
    </div>
  );
}
