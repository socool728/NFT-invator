import React, { useState } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { saveRender } from "../../actions/settings";

const Render = (props) => {
  const [type, setType] = useState(props.type);
  const [width, setWidth] = useState(props.width);
  const [height, setHeight] = useState(props.height);
  const [quality, setQuality] = useState(props.quality);

  return (
    <Container className="width-800p">
      <h3 className="fw-bolder my-5">Render Settings</h3>
      <div className="border-bottom pb-5">
        <h4 className="pt-4">Output</h4>
        <p>
          Dimensions and format used exporting tokens. We highly recommend using
          source files with the same dimensions to reduce generation time.
        </p>

        <Row>
          <Col sm={4}>
            <Form.Label htmlFor="outFormat">Format</Form.Label>
            <Form.Select
              aria-label="outFormat"
              id="outFormat"
              onChange={(e) => {
                setType(e.target.value);
                saveRender({ type: e.target.value, width, height, quality });
              }}
            >
              <option value="PNG">PNG</option>
              <option value="GIF">GIF</option>
            </Form.Select>
          </Col>
          <Col sm={8} />
          <Col sm={4} className="mt-3">
            <Form.Label htmlFor="outWidth">Width</Form.Label>
            <Form.Control
              type="number"
              id="outWidth"
              onChange={(e) => {
                setWidth(parseInt(e.target.value));
                saveRender({
                  type,
                  width: parseInt(e.target.value),
                  height,
                  quality,
                });
              }}
              defaultValue={width}
            />
          </Col>
          <Col sm={4} className="mt-3">
            <Form.Label htmlFor="outHeight">Height</Form.Label>
            <Form.Control
              type="number"
              id="outHeight"
              onChange={(e) => {
                setHeight(parseInt(e.target.value));
                saveRender({
                  type,
                  width,
                  height: parseInt(e.target.value),
                  quality,
                });
              }}
              defaultValue={height}
            />
          </Col>
        </Row>
      </div>
      <h4 className="pt-4">Preview</h4>
      <p>Lower preview quality will make updates quicker</p>
      <Col sm={4}>
        <Form.Label htmlFor="outFormat">Format</Form.Label>
        <Form.Select
          aria-label="outFormat"
          id="outFormat"
          onChange={(e) => {
            setQuality(parseInt(e.target.value));
            saveRender({
              type,
              width,
              height,
              quality: parseInt(e.target.value),
            });
          }}
        >
          <option value={20}>Very Low(20%)</option>
          <option value={40}>Low(40%)</option>
          <option value={60}>Medium(60%)</option>
          <option value={80}>High(80%)</option>
          <option value={100}>Full(100%)</option>
        </Form.Select>
      </Col>
    </Container>
  );
};

Render.propTypes = {
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
};

const mapStateToProps = (state) => ({
  type: state.setting.type,
  width: state.setting.width,
  height: state.setting.height,
  quality: state.setting.quality,
});

export default connect(mapStateToProps, { saveRender })(Render);
