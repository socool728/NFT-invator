import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <h1 className="fw-bolder py-3 px-5">NFT Generator</h1>
      <Row className="border-top border-bottom">
        <Col className="d-flex">
          <i
            className="text-primary fas fa-check-circle d-flex ms-3 mt-2 pt-1"
            style={{ fontSize: "25px" }}
          />
          <p className="d-flex ms-3 mb-0 mt-2 pt-1">Configure</p>
        </Col>
        <Col>
          <img
            src="/img/path.svg"
            className="d-inline-flex"
            style={{ height: "50px" }}
          />
          <div
            className="border rounded-circle ms-3 px-2 text-muted d-inline-flex text-center"
            style={{ width: "25px", height: "25px" }}
          >
            2
          </div>
          <p className="d-inline-flex ms-3 text-muted">Generate</p>
        </Col>
        <Col>
          <img
            src="/img/path.svg"
            className="d-inline-flex"
            style={{ height: "50px" }}
          />
          <div
            className="border rounded-circle ms-3 px-2 text-muted d-inline-flex text-center"
            style={{ width: "25px", height: "25px" }}
          >
            3
          </div>
          <p className="d-inline-flex ms-3 text-muted">Share</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
