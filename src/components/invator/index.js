import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Artbar from "./Artbar";
import ArtGenerator from "./ArtGenerator";
import Traits from "./Traits";

const Invator = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col sm={2} className="border-end over">
            <Artbar />
          </Col>
          <Col sm={7} className="over">
            <ArtGenerator />
          </Col>
          <Col className="border-start">
            <Traits />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Invator;
