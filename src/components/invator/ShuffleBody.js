import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const ShuffleBody = (props) => {
  const [collections, setCollections] = useState([]);
  useEffect(() => {
    let collection = [];
    if (props.image.image) {
      for (let i = 0; i < props.image.image.length - 1; i++) {
        if (
          props.image.image[i + 1].collection &&
          props.image.image[i + 1].collection !==
            props.image.image[i].collection
        )
          collection.push({
            name: props.image.image[i].collection,
            checked: true,
          });
      }
    }
    setCollections(collection);
  }, [props]);

  const onSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < collections.length; i++) {
      console.log(collections[i].name + ":" + collections[i].checked);
    }
  };
  return (
    <Container>
      <Row>
        <Col sm={4}>
          <small className="text-muted">Slect traits</small>
        </Col>
        <Col sm={3} />
        <Col className="ps-4 ms-3">
          <button
            className="me-1 btn-sm bg-white text-primary border-0 fw-bold"
            onClick={() => {
              const tCollections = [...collections];
              tCollections.map((t) => {
                t.checked = true;
              });
              setCollections(tCollections);
            }}
          >
            All
          </button>
          <span className="text-muted">|</span>
          <Button
            className="ms-1 btn-sm bg-white text-primary border-0 fw-bold"
            onClick={() => {
              const tCollections = [...collections];
              tCollections.map((t) => {
                t.checked = false;
              });
              setCollections(tCollections);
            }}
          >
            None
          </Button>
        </Col>
      </Row>

      {collections &&
        collections.map((c, index) => {
          return (
            <Row className="mt-2 p-1 border rounded-3 shadow-sm mx-0">
              <Col sm={10}>{c.name}</Col>
              <Col sm={2}>
                <Form.Check
                  type="switch"
                  id={c.name}
                  checked={c.checked}
                  onClick={() => {
                    const tCollections = [...collections];
                    tCollections[index].checked = !tCollections[index].checked;
                    setCollections(tCollections);
                  }}
                />
              </Col>
            </Row>
          );
        })}
      <div className="text-muted mt-3 text-center">
        <small>Random variations will be picked for selected traits</small>
      </div>
      <Button type="submit" className="mt-2 width-100" onClick={onSubmit}>
        Shuffle →
      </Button>
    </Container>
  );
};

ShuffleBody.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(ShuffleBody);
