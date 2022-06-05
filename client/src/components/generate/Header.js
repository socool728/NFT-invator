import React from "react";
import { Col, Row } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <h1 className="fw-bolder py-3 px-5">NFT Generator</h1>
      <Row className="border-top border-bottom">
        <Col className="d-flex">
          <i className="text-primary fas fa-check-circle d-flex ms-3 mt-2 pt-1 fs-4" />
          <p className="d-flex ms-3 mb-0 mt-2 pt-1">Configure</p>
        </Col>
        <Col>
          <img
            src="/img/path.svg"
            className="d-inline-flex height-50p"
            alt=""
          />
          <div className="border rounded-circle ms-3 px-2 text-muted d-inline-flex text-center width-25p height-25p">
            2
          </div>
          <p className="d-inline-flex ms-3 text-muted">Generate</p>
        </Col>
        <Col>
          <img
            src="/img/path.svg"
            className="d-inline-flex height-50p"
            alt=""
          />
          <div className="border rounded-circle ms-3 px-2 text-muted d-inline-flex text-center width-25p height-25p">
            3
          </div>
          <p className="d-inline-flex ms-3 text-muted">Share</p>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
