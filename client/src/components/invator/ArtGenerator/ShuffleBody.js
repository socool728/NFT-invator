import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { shuffleItem } from "../../../actions/controlart";

const ShuffleBody = (props) => {
  const [collections, setCollections] = useState([]);
  const [checkCollection, setCheckCollection] = useState(null);
  useEffect(() => {
    let collection = [];
    if (!checkCollection && props.image.items) {
      for (let i = 0; i < props.image.items.length; i++) {
        collection.push({
          name: props.image.items[i],
          checked: true,
        });
      }
      setCollections(collection);
      setCheckCollection(collection);
    }
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    let check = false;
    collections.map((e) => {
      if (e.checked === true) check = true;
    });
    if (check) {
      const shuffleCollection = [];
      collections
        .filter((e) => {
          return e.checked === true;
        })
        .map((c) => {
          let shuffle = props.image.image.filter((e) => {
            return e.collection === c.name;
          });
          shuffleCollection.push(
            shuffle[Math.floor(Math.random() * (shuffle.length - 1))]
          );
        });
      shuffleCollection.sort(function (a, b) {
        return (
          props.image.items.indexOf(a.collection) -
          props.image.items.indexOf(b.collection)
        );
      });
      shuffleItem({
        add: shuffleCollection.reverse(),
        workspace: props.image.now,
        name: props.image.new ? props.image.new.name : "token #1",
        type: props.type,
        width: props.width,
        height: props.height,
        quality: props.quality,
      });
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
            <Row
              className="mt-2 p-1 border rounded-3 shadow-sm mx-0"
              key={index}
            >
              <Col sm={10}>{c.name}</Col>
              <Col sm={2}>
                <Form.Check
                  type="switch"
                  id={c.name}
                  checked={c.checked}
                  onChange={() => {
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
  type: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  quality: PropTypes.number,
};

const mapStateToProps = (state) => ({
  image: state.image,
  type: state.setting.type,
  width: state.setting.width,
  height: state.setting.height,
  quality: state.setting.quality,
});

export default connect(mapStateToProps, { shuffleItem })(ShuffleBody);
