import React from "react";

const Identifier = (props) => {
  return (
    <div style={{ display: "inline-block" }}>
      <div
        style={{
          backgroundColor: props.color,
          height: "2rem",
          width: "2rem",
          display: "inline-block",
          margin: "0 1rem",
        }}
      ></div>
      <p style={{ display: "inline-block" }}>{props.title}</p>
    </div>
  );
};

export default Identifier;
