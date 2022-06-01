import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import NftGenerate from "./NftGenerate";

const Generate = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col className="over">
          <NftGenerate />
        </Col>
      </Row>
    </Container>
  );
};

export default Generate;
