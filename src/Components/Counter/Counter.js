import React, { useEffect, useState } from "react";

export default function Counter({ maximum, label, toincludeplus = false }) {
  const [count, setCount] = useState(maximum);
  //   useEffect(() => {
  //     counter(maximum);
  //   }, []);

  //   const counter = (maximum, minimum = 1) => {
  //     for (let count = minimum; count <= maximum; count++) {
  //       setTimeout(() => {
  //         setCount(count);
  //       }, 1300);
  //     }
  //   };
  return (
    <div>
      <h1
        style={{
          color: "#393939",
          marginBottom: 0,
          textAlign: "center",
          fontSize: "50px",
        }}
      >
        {count} {toincludeplus ? "+" : ""}
      </h1>
      <h2 style={{ color: "#393939", marginTop: 10 }}>{label}</h2>
    </div>
  );
}
