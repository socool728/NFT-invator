import React from "react";

const Count = ({ text, Id }) => {
  return (
    <div
      className="border rounded p-2"
      style={{ width: "100px", height: "66px" }}
    >
      <small className="text-muted">{text}</small>
      <input
        type="number"
        id={Id}
        className="border-0 p-0"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Count;
