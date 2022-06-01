import React from "react";
import { Container, Row, Button } from "react-bootstrap";
import Cards from "../settings/traits/Cards";

const Share = () => {
  return (
    <div className="bg-light pt-5 " style={{ width: "100%", height: "100%" }}>
      <Container
        className="text-center p-4 shadow-sm mt-3 rounded-3"
        style={{ backgroundColor: "#ffffff", width: "500px" }}
      >
        <i className="rounded-circle p-2 bg-light">🔥</i>
        <p className="text-muted">
          Share your new creation with a free promo video. Don't forget to tag{" "}
          <span className="text-primary">@DiamondHH</span> to get featured!
        </p>
        <Row className="m-0 py-4">
          <Cards demo="Square" className="me-3" />
          <Cards demo="Horizontal" />
        </Row>
        <img style={{ width: "100%", height: "200px" }} />
        <Button validation="primary" className="mt-4" style={{ width: "100%" }}>
          <i className="fas fa-download" /> Download
        </Button>
        <Button
          variant="light"
          className="mb-3 mt-2 text-muted"
          style={{ width: "100%" }}
        >
          Return the generator
        </Button>
      </Container>
    </div>
  );
};

export default Share;
