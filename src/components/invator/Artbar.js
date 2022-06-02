import React from "react";
import { Row, Col } from "react-bootstrap";
import Art from "./Art";

const Artbar = () => {
  return (
    <div className="p-0">
      <Row className="p-3 border-bottom position-fixed border-end bg-white height-76p width-18">
        <Col sm={2}>
          <i className="fas fa-search text-muted py-2 ps-3 fs-5" />
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
      <div className="overflow-scroll height-92">
        <div id="Accessories">
          <Row className="bg-light text-dark my-2 py-1 border-top border-bottom">
            <small>Accessories</small>
          </Row>
          <Row className="m-0">
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
