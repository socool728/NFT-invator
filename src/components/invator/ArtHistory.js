import React from "react";
import { Row, Col } from "react-bootstrap";

const ArtHistory = () => {
  return (
    <Row className="border-bottom m-0 my-3">
      <Col xs={2}>
        <div className="artImageHistory bg-light rounded-3">
          <img
            src="/img//Accessories/Bunny-Boy_0001_Layer-044------.png"
            className="artImage"
            alt=""
          />
        </div>
      </Col>
      <Col xs={7}>
        <p className="m-0 p-1 ps-3">Bunny Boy</p>
        <p className="m-0 ps-3 text-muted">Accessories</p>
      </Col>
      <Col className="m-3 rounded-pill delete py-2 ps-3">
        <i className="fas fa-trash-alt ms-1" />
      </Col>
    </Row>
  );
};

export default ArtHistory;
