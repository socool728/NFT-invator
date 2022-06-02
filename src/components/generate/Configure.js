import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Cards from "../settings/traits/Cards";

const Configure = () => {
  return (
    <Container className="configure">
      <div className="p-3 rounded-3 bg-whites">
        <p>✅ Ready, read before you continue</p>
        <p className="text-muted">
          <b>Make sure your metadata settings are correct</b> and adjust the
          rarity of your traits before starting the generator.
        </p>
        <p className="text-muted">
          <b>If saved designs are included they will be generated first.</b>{" "}
          Keep this tab open until all exports are completed.
        </p>
        <p className="text-muted">
          <b>All image processing is done on your device</b> so you don't have
          to upload your source files. Using a faster computer will result in
          faster generation.
        </p>
        <Link to="/settings">Metadata Setting →</Link>
        <Link to="/settings/weighting" className="ms-4">
          Trait name & Rarity →
        </Link>
      </div>
      <Row className="mx-0 my-3">
        <Cards
          title="Include saved designs"
          demo="Any saved designs are generated to be generated"
          className="me-3"
        />
        <Cards
          title="Completely random"
          demo="Traits and variations will be generated at random"
        />
      </Row>
      <Button variant="primary width-100">Submit</Button>
    </Container>
  );
};

export default Configure;
