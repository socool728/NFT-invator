import React from "react";
import { Form } from "react-bootstrap";

const Preview = () => {
  return (
    <div>
      <h4 className="pt-4">Preview</h4>
      <p>Lower preview quality will make updates quicker</p>
      <Form.Label htmlFor="outFormat">Format</Form.Label>
      <Form.Select aria-label="outFormat" id="outFormat">
        <option>Very Low(20%)</option>
        <option value="1">Low(40%)</option>
        <option value="1">Medium(60%)</option>
        <option value="1">High(80%)</option>
        <option value="1">Full(100%)</option>
      </Form.Select>
    </div>
  );
};

export default Preview;
