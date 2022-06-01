import React from "react";
import { Row, InputGroup, FormControl } from "react-bootstrap";
import Art from "./Art";

const Artbar = () => {
  return (
    <div>
      <InputGroup className="p-3">
        <i
          className="fas fa-search text-muted p-2"
          style={{ fontSize: "20px" }}
        />
        <input
          placeholder="Search"
          aria-label="Search"
          aria-describedby="basic-addon1"
          className="inputborder"
        />
      </InputGroup>

      <div id="Accessories">
        <Row className="bg-light text-dark my-2 py-1 pl-2 border-top border-bottom">
          <small>Accessories</small>
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Headgear">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Headgear
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Clothes">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Clothes
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Eyes">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Eyes
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Expression">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Expression
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Skin">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Skin
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
      <div id="Background">
        <Row className="bg-light text-dark my-3 border-top border-bottom">
          Background
        </Row>
        <Row>
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
          <Art />
        </Row>
      </div>
    </div>
  );
};

export default Artbar;
