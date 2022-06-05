import React from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/controlart";

const Art = (props) => {
  const artClick = (e) => {
    const add = [];
    if (props.image.new !== null) add.push(...props.image.new.info);
    props.image.image.map((i) => {
      if (i.name === e.target.alt) {
        for (let a = 0; a < add.length; a++) {
          if (add[a].collection === i.collection) {
            add.splice(a, 1);
          }
        }
        add.push(i);
      }
    });
    if (!props.image.new)
      addItem({
        add: add,
        workspace: props.image.now,
        name: "token #1",
      });
    else
      addItem({
        add: add,
        workspace: props.image.now,
        name: props.image.new.name,
      });
  };

  return (
    <Col xs={4} className="text-center p-3">
      <button
        className="width-95p height-66p rounded-3 bg-light p-0 border-0"
        id={props.name}
        onClick={artClick}
      >
        <img
          src={props.url}
          className="artImage width-100 height-100 rounded-3"
          alt={props.name}
        />
      </button>
      <small className="text-muted">{props.name}</small>
    </Col>
  );
};
Art.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(Art);
// export default Art;
