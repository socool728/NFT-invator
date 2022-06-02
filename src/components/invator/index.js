import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Artbar from "./Artbar";
import ArtGenerator from "./ArtGenerator";
import Traits from "./Traits";

const Invator = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col sm={2} className="border-end p-0" id="artbar">
          <Artbar />
        </Col>
        <Col sm={7} className="over bg-light" id="artgenerate">
          <ArtGenerator />
        </Col>
        <Col className="border-start" id="traits">
          <Traits />
        </Col>
      </Row>
    </Container>
  );
};

export default Invator;
