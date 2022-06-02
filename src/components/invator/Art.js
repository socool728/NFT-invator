import React from "react";
import { Col } from "react-bootstrap";

const art = () => {
  return (
    <Col xs={4} className="my-2">
      <div className="artImageCard bg-light">
        <img
          src="/img/Accessories/Bunny-Boy_0001_Layer-044------.png"
          className="artImage"
          alt=""
        />
      </div>
      <small className="text-muted">Bunny boy</small>
    </Col>
  );
};

export default art;
