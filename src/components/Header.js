import React from "react";
import image from "../images/e-logo-white.png";

export const Header = () => {
  return (
    <h2 style={{ textAlign: "center", color: "white", fontSize: "36px" }}>
      <span>
        <img
          src={image}
          width={23}
          style={{
            marginRight: "2px",
          }}
        />
      </span>
      xpense Tracker
    </h2>
  );
};
