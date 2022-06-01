import React from "react";
import { Row, Col, InputGroup, FormControl } from "react-bootstrap";
import Art from "./Art";

const Artbar = () => {
  return (
    <div className="p-0">
      <Row
        className="p-3 border-bottom position-fixed border-end"
        style={{ backgroundColor: "#ffffff", width: "18vw", height: "76px" }}
      >
        <Col sm={2}>
          <i
            className="fas fa-search text-muted py-2 ps-3"
            style={{ fontSize: "20px" }}
          />
        </Col>
        <Col>
          <input
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon1"
            className="inputborder mt-1"
          />
        </Col>
      </Row>
      <div className="pt-5 pb-4"></div>
      <div style={{ overflow: "scroll", height: "92vh" }}>
        <div id="Accessories">
          <Row className="bg-light text-dark my-2 py-1 border-top border-bottom">
            <small>Accessories</small>
          </Row>
          <Row>
            <Art />
            <Art />
            <Art />
            <Art />
            <Art />
            <Art />
            <Art />
            <Art />
            <Art />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Artbar;
