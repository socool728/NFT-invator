import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Setting = () => {
  return (
    <Container className="width-800p">
      <h3 className="fw-bolder my-5">Basic Setting</h3>
      <h4>Collection</h4>
      <p>Metadata for this collection of NFTs</p>
      <Form>
        <Row className="pb-3">
          <Col>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Space Sneks Demo" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Family</Form.Label>
              <Form.Control type="text" placeholder="Diamond Hands Hotel" />
              <Form.Text id="passwordHelpBlock" muted>
                Optional name for a group of collections.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Row className="py-3">
          <Col>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Symbol</Form.Label>
              <Form.Control type="text" placeholder="SNEK" />
              <Form.Text id="passwordHelpBlock" muted>
                Exchange symbol (e.g SNEK)
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>Supply</Form.Label>
              <Form.Control type="text" placeholder="100" />
              <Form.Text id="passwordHelpBlock" muted>
                Number of tokens to generate.
              </Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Col} controlId="formName">
              <Form.Label>External URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://sneks.diamondhandshotel.com"
              />
              <Form.Text id="passwordHelpBlock" muted>
                Link to the website for this collection.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="py-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="My first demo using a small collection of Space Sneks components"
          />
        </Form.Group>
        <Button
          className="text-primary fw-bolder bg-blues border-0"
          type="submit"
        >
          Submit
        </Button>
        <p className="pt-4 text-muted">
          <small>
            Total fee will be split between recipient addresses according to
            their share.
          </small>
        </p>
      </Form>
    </Container>
  );
};

export default Setting;
