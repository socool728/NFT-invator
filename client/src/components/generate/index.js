import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import NftGenerate from "./NftGenerate";

const Generate = () => {
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col className="over p-0">
          <NftGenerate />
        </Col>
      </Row>
    </Container>
  );
};

export default Generate;
