import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Select from "react-select";
import { saveItem } from "../../../actions/settings";

const Rules = (props) => {
  const options = [{ value: "random", name: "random", label: "random" }];
  const [rule1, setRule1] = useState({ name: "random" });
  const [rule2, setRule2] = useState({ name: "random" });
  const [mix, setMix] = useState({ value: "not", label: "Doesn't MIX" });

  if (props.image.image) {
    props.image.image.map((i) => {
      options.push({
        value: i.name,
        name: i.name,
        label: (
          <div>
            <img
              src={i.url}
              width="30px"
              height="30px"
              className="rounded-3 me-1"
              alt={i.name}
            />
            {i.name}
          </div>
        ),
        collection: i.collection,
        url: i.url,
      });
    });
  }

  const mixes = [
    { value: "not", label: "Doesn't MIX" },
    { value: "mix", label: "MIX Only" },
  ];

  const clickSave = () => {
    if (
      rule1.name !== "random" &&
      rule2.name !== "random" &&
      JSON.stringify(rule1) === JSON.stringify(rule2)
    )
      alert(`${rule1.name} and ${rule2.name} must be different value.`);
    else {
      saveItem({ rule1: rule1, mix: mix, rule2: rule2 });
      props.onHide();
    }
  };
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="rules"
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header className="text-center border-0" closeButton>
        <Modal.Title className="ms-5 ps-5 py-3 fs-3 fw-2" id="rules">
          <i className="fas fa-pencil-ruler text-white bg-primary p-2 rounded-circle fs-5 me-2" />
          Rules
        </Modal.Title>
      </Modal.Header>
      <form>
        <Modal.Body>
          <Row>
            <Col>
              <Select
                options={options}
                onChange={(e) => {
                  let rule1 = { ...e };
                  delete rule1.value;
                  delete rule1.label;
                  setRule1(rule1);
                }}
                defaultValue={
                  props.rule
                    ? {
                        value: props.rule.rule1.name,
                        label: (
                          <div>
                            <img
                              src={props.rule.rule1.url}
                              width="30px"
                              height="30px"
                              className="rounded-3 me-1"
                              alt={props.rule.rule1.name}
                            />
                            {props.rule.rule1.name}
                          </div>
                        ),
                        url: props.rule.rule1.url,
                        collection: props.rule.rule1.collection,
                      }
                    : null
                }
              />
            </Col>
            <Col>
              <Select
                options={mixes}
                onChange={setMix}
                defaultValue={props.rule ? props.rule.mix : mix}
              ></Select>
            </Col>
            <Col>
              <Select
                options={options}
                onChange={(e) => {
                  let rule2 = { ...e };
                  delete rule2.value;
                  delete rule2.label;
                  setRule2(rule2);
                }}
                defaultValue={
                  props.rule
                    ? {
                        value: props.rule.rule2.name,
                        label: (
                          <div>
                            <img
                              src={props.rule.rule2.url}
                              width="30px"
                              height="30px"
                              className="rounded-3 me-1"
                              alt={props.rule.rule2.url}
                            />
                            {props.rule.rule2.name}
                          </div>
                        ),
                        url: props.rule.rule2.url,
                        collection: props.rule.rule2.collection,
                      }
                    : null
                }
              />
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer className="border-0">
          <Button
            className="bg-light border text-secondary"
            onClick={props.onHide}
          >
            Close
          </Button>
          <Button
            className="bg-blues text-primary border-0"
            onClick={clickSave}
          >
            Save Change
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

Rules.propTypes = {
  image: PropTypes.object,
  rule: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
  rule: state.setting.rule,
});

export default connect(mapStateToProps, { saveItem })(Rules);
