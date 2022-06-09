import React, { useState, useEffect } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
import { Container, Button, Row, Col } from "react-bootstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import arrayMove from "./ArrayMove";
import { saveItems } from "../../../actions/controlart";

//Drag handler
const DragHandle = sortableHandle(() => (
  <span className=" text-secondary move">
    <i className="fas fa-bars" />
  </span>
));

//Draggable elements
const SortableItem = sortableElement(({ value }) => (
  <Row className="border p-2 my-1 border rounded-3 shadow-sm z-index-9999">
    <Col sm={11} className="text-start">
      {value}
    </Col>
    <Col>
      <DragHandle />
    </Col>
  </Row>
));

//Drag area
const SortableContainer = sortableContainer(({ children }) => {
  return <div>{children}</div>;
});

const SortableItems = (props) => {
  const [items, setItems] = useState({ items: ["ss", "ss"] });
  useEffect(() => {
    let collection = [];
    for (let i = 1; i < props.image.length; i++) {
      if (props.image[i - 1].collection !== props.image[i].collection)
        collection.push(props.image[i - 1].collection);
      if (
        i === props.image.length - 1 &&
        props.image[i].collection !== collection[collection.length - 1]
      )
        collection.push(props.image[i].collection);
    }

    setItems({ items: collection });
    saveItems(collection);
  }, []);

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setItems({
      items: arrayMove(items.items, oldIndex, newIndex),
    });
    saveItems(arrayMove(items.items, oldIndex, newIndex));
  };

  return (
    <Container className="pt-5">
      <React.StrictMode>
        <SortableContainer onSortEnd={onSortEnd} useDragHandle>
          {items.items.map((value, index) => (
            <SortableItem key={`item-${index}`} index={index} value={value} />
          ))}
        </SortableContainer>
      </React.StrictMode>
      <div className="py-3">
        <small className="text-muted">
          Order the traits according to their position in the final image
        </small>
        <Button className="width-100 rounded-3 mt-2" onClick={props.onHide}>
          Start designing →
        </Button>
      </div>
    </Container>
  );
};

SortableItems.propTypes = {
  image: PropTypes.array,
};

const mapStateToProps = (state) => ({
  image: state.image.image,
});

export default connect(mapStateToProps, {})(SortableItems);
