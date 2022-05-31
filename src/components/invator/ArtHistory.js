import React from "react";

const ArtHistory = () => {
  return (
    <div className="border-bottom my-3" style={{ display: "flex" }}>
      <div className="artImageHistory bg-light rounded-3">
        <img
          prop="prop"
          src="/img//Accessories/Bunny-Boy_0001_Layer-044------.png"
          className="artImage"
        />
      </div>
      <div style={{ width: "70%" }}>
        <p className="m-0 p-1 ps-3">Bunny Boy</p>
        <p className="m-0 ps-3 text-muted">Accessories</p>
      </div>
      <div className="m-3 rounded-pill delete py-2 px-3">
        <i className="fas fa-trash-alt " />
      </div>
    </div>
  );
};

export default ArtHistory;
