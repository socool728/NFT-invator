import React from "react";

const Count = ({ text, Id, count, className, demoClass, changeC }) => {
  return (
    <div className={"border rounded p-2 width-100p height-56p " + className}>
      <small className="text-muted">{text}</small>
      <input
        type="number"
        id={Id}
        className={"border-0 width-100 py-1 " + demoClass}
        value={count}
        onChange={changeC}
      />
    </div>
  );
};

export default Count;
