import React, { useEffect, useState } from "react";
import Counter from "../../Components/Counter/Counter";
import "./history-styles.css";

export default function History() {
  const [slidIn, setIsSlidIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSlidIn(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`slide-in-container`} style={{ opacity: slidIn ? 1 : 0 }}>
      <div
        style={{
          display: "flex",

          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop: 15,
        }}
      >
        <Counter maximum={20} label={"Years of Experience"} toincludeplus />
        <Counter maximum={100} label={"Installations"} toincludeplus />
        <Counter maximum={50} label={"Happy Customers"} toincludeplus />
      </div>
    </div>
  );
}
