import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";

const Settings = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Sidebar />
          <Col sm={2} className="border-end over">
            {/* <Artbar /> */}
          </Col>
          <Col sm={7} className="over">
            {/* <ArtGenerator /> */}
          </Col>
          <Col className="border-start">
            {/* <Traits /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Settings;
