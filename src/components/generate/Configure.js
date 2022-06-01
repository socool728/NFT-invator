import React from "react";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import Cards from "../settings/traits/Cards";

const Configure = () => {
  return (
    <Container style={{ width: "600px", height: "500px", marginTop: "150px" }}>
      <div className="p-3 rounded-3" style={{ backgroundColor: "#F9FAFB" }}>
        <p>✅ Ready, read before you continue</p>
        <p className="text-muted">
          <bold>Make sure your metadata settings are correct</bold> and adjust
          the rarity of your traits before starting the generator.
        </p>
        <p className="text-muted">
          <bold>
            If saved designs are included they will be generated first.
          </bold>{" "}
          Keep this tab open until all exports are completed.
        </p>
        <p className="text-muted">
          <bold>All image processing is done on your device</bold> so you don't
          have to upload your source files. Using a faster computer will result
          in faster generation.
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
      <Button variant="primary" style={{ width: "100%" }}>
        Submit
      </Button>
    </Container>
  );
};

export default Configure;
