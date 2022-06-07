import React, { useEffect, useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Shuffle from "./Shuffle";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Save from "./Save";
import New from "./New";
import Duplicate from "./Duplicate";
import Export from "./Export";
import { addName } from "../../../actions/controlart";
import Rules from "./Rules";

const ArtGenerator = (props) => {
  const [modalShow, setModalShow] = useState(false);
  const [name, setName] = useState(
    props.image.new ? props.image.new.name : "token #1"
  );
  useEffect(() => {
    let news = { ...props.image.new };
    if (props.image.new && name === "") {
      setName(props.image.new.name);
      news.name = props.image.new.name;
      addName(news);
    }
  }, []);

  const image = () => {
    if (props.image.new !== null) {
      if (props.image.new.url.length !== 0) {
        return (
          <img
            src={props.image.new.url}
            className="mt-3 border shadow-sm width-500p height-500p bg-white"
            alt=""
          />
        );
      } else {
        return (
          <div className="mt-3 border shadow-sm width-500p height-500p text-center p-5 bg-white">
            <i className="far fa-image fs-2 mt-130p text-muted" />
            <p className="mt-2 text-muted">
              Select a trait in the sidebar to get started
            </p>
          </div>
        );
      }
    } else {
      return (
        <div className="mt-3 border shadow-sm width-500p height-500p text-center p-5 bg-white">
          <i className="far fa-image fs-2 mt-130p text-muted" />
          <p className="mt-2 text-muted">
            Select a trait in the sidebar to get started
          </p>
        </div>
      );
    }
  };

  return (
    <>
      <Row
        className="ps-4 border-bottom position-fixed border-start"
        id="artnav"
      >
        <Col xs={1}>
          <Link to="ss" className="navs">
            <p className="py-4 navsActive">Design</p>
          </Link>
        </Col>
        <Col xs={1}>
          <Link to="/settings" className="navs">
            <p className="py-4">Metadata</p>
          </Link>
        </Col>
        <Col xs={1} className="navs">
          <Link to="generate" className="navs">
            <p className="py-4">Generate</p>
          </Link>
        </Col>
        <Col xs={1} className="navs" onClick={() => setModalShow(true)}>
          <p className="py-4 navs cursor-p">Rules</p>
        </Col>
        <Rules show={modalShow} onHide={() => setModalShow(false)} />
        <Col xs={5} />
        <Col>
          <div className="py-4">
            <New />
            <Duplicate />
            <Save name={name} />
            <Shuffle key="shuffle" placement="end" name="end" />

            <Export url={props.image.new ? props.image.new.url : ""} />
          </div>
        </Col>
      </Row>
      <Row className="border-bottom position-fixed p-1 border-end bg-white controlgen"></Row>
      <Container className="width-500p mt-130p ">
        <div className="d-flex justify-content-between width-500p">
          <input
            type="text"
            placeholder={props.image.new ? props.image.new.name : "token #1"}
            className="d-inline-flex flex-row p-0 border-bottom border-primary border-2 bg-light"
            id="imgname"
            onChange={(e) => {
              setName(e.target.value);
              if (props.image.new) {
                let news = { ...props.image.new };
                news.name = e.target.value;
                addName(news);
              }
            }}
            value={name}
          />
          <Link
            to="/settings/output"
            className="btn btn-light d-inline-flex mt-3"
          >
            <i className="far fa-image"> Quality</i>
          </Link>
        </div>
        {image()}
      </Container>
      <Row className="py-1 border-top position-fixed bottom-0 bg-white width-58"></Row>
    </>
  );
};

ArtGenerator.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(ArtGenerator);
