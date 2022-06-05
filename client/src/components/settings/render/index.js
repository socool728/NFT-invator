import React from "react";
import { Container } from "react-bootstrap";
import Backend from "./Backend";
import Output from "./Output";
import Preview from "./Preview";

const Render = () => {
  return (
    <Container className="width-800p">
      <Backend />
      <Output />
      <Preview />
    </Container>
  );
};

export default Render;
