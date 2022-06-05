import React from "react";

const Count = ({ text, Id }) => {
  return (
    <div className="border rounded p-2 width-100p height-66p">
      <small className="text-muted">{text}</small>
      <input type="number" id={Id} className="border-0 p-0 width-100" />
    </div>
  );
};

export default Count;
