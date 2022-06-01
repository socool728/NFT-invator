import React from "react";

const Item = ({ title, type }) => {
  return (
    <div className="border p-2 rounded-3 ms-3" style={{ width: "200px" }}>
      <small className="m-0 text-muted">{title}</small>
      <input
        type={type}
        className="py-0 border-0"
        style={{ width: "100%" }}
        placeholder={title}
      />
    </div>
  );
};

export default Item;
