import React from "react";
import { Row } from "react-bootstrap";
import Cards from "../traits/Cards";

const Backend = () => {
  return (
    <>
      <h3 className="fw-bolder my-5">Render Settings</h3>
      <h4>Backend</h4>
      <p>
        NFT-Inator comes with two render systems - one using Canvas and the
        other using FFmpeg. The Canvas backend is faster, but only supports PNG
        and JPEG files. The FFmpeg backend is slower and uses more memory, but
        supports animation & video export.
      </p>
      <Row className="border-bottom pb-5">
        <Cards
          title="Canvas"
          demo="Much faster & requires less resources, but no animation support"
          className="me-4"
        />
        <Cards
          title="FFmpeg"
          demo="Supports animation, but is slower and requires experimental browser features"
        />
      </Row>
    </>
  );
};

export default Backend;
