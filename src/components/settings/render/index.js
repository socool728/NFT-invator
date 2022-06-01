import React from "react";
import { Container, Form } from "react-bootstrap";
import Backend from "./Backend";
import Output from "./Output";
import Preview from "./Preview";

const Render = () => {
  return (
    <Container style={{ width: "800px" }}>
      <Backend />
      <Output />
      <Preview />
    </Container>
  );
};

export default Render;
