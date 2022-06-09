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
      if (i.collection === e.target.alt && i.name === e.target.id) {
        for (let a = 0; a < add.length; a++) {
          if (add[a].collection === i.collection) {
            add.splice(a, 1);
          }
        }
        add.push(i);
      }
    });
    add.sort(function (a, b) {
      return (
        props.image.items.indexOf(a.collection) -
        props.image.items.indexOf(b.collection)
      );
    });
    if (!props.image.new)
      addItem({
        add: add.reverse(),
        workspace: props.image.now,
        name: "token #1",
        type: props.type,
        width: props.width,
        height: props.height,
        quality: props.quality,
      });
    else
      addItem({
        add: add.reverse(),
        workspace: props.image.now,
        name: props.image.new.name,
        type: props.type,
        width: props.width,
        height: props.height,
        quality: props.quality,
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
          alt={props.collection}
          id={props.name}
        />
      </button>
      <small className="text-muted">{props.name}</small>
    </Col>
  );
};
Art.propTypes = {
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

export default connect(mapStateToProps, {})(Art);
// export default Art;
