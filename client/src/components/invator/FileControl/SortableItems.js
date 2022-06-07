import React, { useState } from "react";
import {
  sortableContainer,
  sortableElement,
  sortableHandle,
} from "react-sortable-hoc";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.css";
import arrayMove from "./ArrayMove";

//Drag handler
const DragHandle = sortableHandle(() => (
  <span className={styles.dragHandler}>
    <i className="fas fa-bars" />
  </span>
));

//Draggable elements
const SortableItem = sortableElement(({ value }) => (
  <div className={styles.dragElement}>
    {value}
    <DragHandle />
  </div>
));

//Drag area
const SortableContainer = sortableContainer(({ children }) => {
  return <div className={styles.dragContainer}>{children}</div>;
});

const SortableItems = () => {
  const [items, setItems] = useState({
    items: ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"],
  });

  let onSortEnd = ({ oldIndex, newIndex }) => {
    setItems({
      items: arrayMove(items.items, oldIndex, newIndex),
    });
  };

  return (
    <React.StrictMode>
      <SortableContainer onSortEnd={onSortEnd} useDragHandle>
        {items.items.map((value, index) => (
          <SortableItem key={`item-${index}`} index={index} value={value} />
        ))}
      </SortableContainer>
    </React.StrictMode>
  );
};

export default SortableItems;
