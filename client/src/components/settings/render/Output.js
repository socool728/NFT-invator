import React from "react";
import { Col, Form, Row } from "react-bootstrap";

const Output = () => {
  return (
    <div className="border-bottom pb-5">
      <h4 className="pt-4">Output</h4>
      <p>
        Dimensions and format used exporting tokens. We highly recommend using
        source files with the same dimensions to reduce generation time.
      </p>

      <Row>
        <Col sm={4}>
          <Form.Label htmlFor="outFormat">Format</Form.Label>
          <Form.Select aria-label="outFormat" id="outFormat">
            <option>PNG</option>
            <option value="1">JPEG</option>
          </Form.Select>
        </Col>
        <Col sm={8} />
        <Col sm={4} className="mt-3">
          <Form.Label htmlFor="outWidth">Width</Form.Label>
          <Form.Control type="text" id="outWidth" />
        </Col>
        <Col sm={4} className="mt-3">
          <Form.Label htmlFor="outHeight">Height</Form.Label>
          <Form.Control type="text" id="outHeight" />
        </Col>
      </Row>
    </div>
  );
};

export default Output;
