import React, { useState } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import Cards from "./Cards";
import Item from "./Item";
import Count from "./Count";

const Traits = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    console.log("clicked");
    setIsActive((current) => !current);
  };
  return (
    <Container style={{ width: "800px" }}>
      <h3 className="fw-bolder my-4">Traits</h3>
      <Row className="m-0 mb-4">
        <Cards
          Id="save"
          title="Include saved designs"
          demo="Any saved designs are guaranteed to be generated"
          isActive={isActive}
          onClick={handleClick}
        />
        <Cards
          Id="random"
          title="Complately random"
          demo="Traits and Varidations will be generated at random"
        />
      </Row>
      <Card className="shadow-sm rounded-3">
        <Row>
          <Col sm={3} className="p-3">
            <Item
              title="Accessories"
              className="d-inline-flex flex-row"
              type="text"
            />
          </Col>
          <Col sm={7} />
          <Col sm={2} className="ps-0">
            <div className="border rounded my-3 p-2" style={{ width: "100px" }}>
              <small className="text-muted">Count</small>
              <input
                type="number"
                className="border-0 p-0"
                style={{ width: "100%" }}
              />
            </div>
          </Col>
        </Row>
        <Card.Header>
          <Row>
            <Col sm={2}>VARIATION</Col>
            <Col sm={6} />
            <Col sm={2}>RARITY</Col>
            <Col sm={2} className="ps-0">
              COUNT
            </Col>
          </Row>
        </Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col sm={1}>
                <div
                  className="rounded-3 bg-light m-1"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img
                    src="/img/Accessories/Bunny-Boy_0001_Layer-044------.png"
                    className="artImage"
                    prop="sd"
                  />
                </div>
              </Col>
              <Col sm={7}>
                <Item title="Accessories" className="d-inline-flex flex-row" />
              </Col>
              <Col sm={2} className="py-3">
                12%
              </Col>
              <Col sm={2} className="ps-0">
                <Count />
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </Container>
  );
};

export default Traits;
