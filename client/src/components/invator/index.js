import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Artbar from "./Artbar";
import ArtGenerator from "./ArtGenerator";
import Traits from "./Traits";
import FileModal from "./FileModal";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";

const Invator = (props) => {
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
          collection.push(props.image.image[i].collection);
      }
    }
    setCollections(collection);
  }, [props]);

  function fileModal() {
    if (!props.image.image) return <FileModal />;
  }

  // if(props.image.now != "0") {
  //     const state = false;
  //     let save = props.image.save;
  //     const edit = {
  //       workspace: props.image.now,
  //       name: props.name,
  //       url: props.image.new.url,
  //       info: props.image.new.info,
  //     };
  //     console.log(save);
  //     save = save.map((u) => {
  //       if (u.workspace === edit.workspace) {
  //         state = true;
  //         return edit;
  //       } else return u;
  //     });
  //     if (!state) {
  //       edit.workspace = save[save.length - 1]
  //         ? parseInt(save[save.length - 1].workspace) + 1
  //         : 1;
  //       edit.name = save.name ? edit.name : "token #" + edit.workspace;
  //       save.push(edit);
  //     }
  //     saveItem(save);
  // }

  return (
    <Container fluid>
      {fileModal()}
      <Row>
        <Sidebar collections={collections} />
        <Col sm={2} className="border-end p-0" id="artbar">
          <Artbar collections={collections} image={props.image.image} />
        </Col>
        <Col sm={7} className="over bg-light" id="artgenerate">
          <ArtGenerator />
        </Col>
        <Col className="border-start" id="traits">
          <Traits />
        </Col>
      </Row>
    </Container>
  );
};

Invator.propTypes = {
  image: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
});

export default connect(mapStateToProps, {})(Invator);
