import React from "react";
import { Col } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addItem } from "../../actions/controlart";

const Art = (props) => {
  const artClick = (e) => {
    const add = props.image.add;
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
    addItem({ add: add });
  };

  return (
    <Col xs={4} className="my-2">
      <button
        className="width-95p height-95p rounded-3 bg-light p-0 border-0"
        id={props.name}
        onClick={artClick}
      >
        <img
          src={props.url}
          className="artImage width-95p height-95p"
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
