import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Cards from "../settings/traits/Cards";

const Share = () => {
  return (
    <Container fluid className="bg-light pt-5">
      <Container className="text-center p-4 shadow-sm mt-3 rounded-3 bg-white width-500p">
        <i className="rounded-circle p-2 bg-light">🔥</i>
        <p className="text-muted">
          Share your new creation with a free promo video. Don't forget to tag{" "}
          <span className="text-primary">@DiamondHH</span> to get featured!
        </p>
        <Row className="m-0 py-4">
          <Cards demo="Square" className="me-3" />
          <Cards demo="Horizontal" />
        </Row>
        <img className="width-100 height-200p" alt="tt" />
        <Button validation="primary" className="mt-4 width-100">
          <i className="fas fa-download" /> Download
        </Button>
        <Button variant="light" className="mb-3 mt-2 text-muted width-100">
          Return the generator
        </Button>
      </Container>
    </Container>
  );
};

export default Share;
