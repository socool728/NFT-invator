import React from "react";
import { Row, Col } from "react-bootstrap";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { removeItem } from "../../actions/controlart";

const ArtHistory = (props) => {
  const clickRemove = () => {
    const remove = props.image.add;
    for (let a = 0; a < remove.length; a++) {
      if (remove[a] === props.img) {
        remove.splice(a, 1);
      }
    }
    removeItem({ add: remove });
  };

  return (
    <Row className="border-bottom m-0 py-3">
      <Col xs={2}>
        <div className="artImageHistory bg-light rounded-3">
          <img
            src={props.img.url}
            className="artImage width-100 height-100"
            alt=""
          />
        </div>
      </Col>
      <Col xs={7}>
        <small className="m-0 pt-2 ps-2">{props.img.name}</small>
        <small className="m-0 ps-2 text-muted">{props.img.collection}</small>
      </Col>
      <Col>
        <button
          className="mt-3 rounded-pill delete border-0 p-2 d-flex"
          onClick={clickRemove}
        >
          <i className="fas fa-trash-alt " />
        </button>
      </Col>
    </Row>
  );
};

ArtHistory.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(ArtHistory);
