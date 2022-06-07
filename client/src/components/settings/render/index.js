import React from "react";
import { Container } from "react-bootstrap";
import Output from "./Output";
import Preview from "./Preview";

const Render = () => {
  return (
    <Container className="width-800p">
      <h3 className="fw-bolder my-5">Render Settings</h3>
      <Output />
      <Preview />
    </Container>
  );
};

export default Render;
