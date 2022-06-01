import React from "react";
import { Form } from "react-bootstrap";

const Output = () => {
  return (
    <div className="border-bottom pb-5">
      <h4 className="pt-4">Output</h4>
      <p>
        Dimensions and format used exporting tokens. We highly recommend using
        source files with the same dimensions to reduce generation time.
      </p>
      <Form.Label htmlFor="outFormat">Format</Form.Label>
      <Form.Select aria-label="outFormat" id="outFormat">
        <option>PNG</option>
        <option value="1">JPEG</option>
      </Form.Select>
      <Form.Label htmlFor="outWidth">Width</Form.Label>
      <Form.Control type="text" id="outWidth" />
      <Form.Label htmlFor="outHeight">Height</Form.Label>
      <Form.Control type="text" id="outHeight" />
    </div>
  );
};

export default Output;
