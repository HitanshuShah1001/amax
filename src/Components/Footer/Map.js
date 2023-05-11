import React from "react";

export default function Map() {
  return (
    <div style={{ width: "50%" }}>
      <iframe
        width="100%"
        height="200"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Amax%20Equipments)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/distance-area-calculator.html">
          measure acres/hectares on map
        </a>
      </iframe>
    </div>
  );
}
