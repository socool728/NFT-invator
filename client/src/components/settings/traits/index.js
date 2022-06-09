import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { saveTraits, changeState } from "../../../actions/settings";

import Item from "./Item";
import Count from "./Count";
import { saveItems } from "../../../actions/controlart";

const Traits = (props) => {
  const [collections, setCollections] = useState([]);
  const [counts, setCounts] = useState([]);
  const [traits, setTraits] = useState([]);

  useEffect(() => {
    if (props.image.image) {
      setCollections(props.image.items);

      const count = [];
      props.image.items.map((c) => {
        let i = 0;
        props.image.image.map((img) => {
          if (c === img.collection) i++;
        });
        count.push(i);
      });
      const demoCount = [];
      let demo = 0;
      for (let i = 0; i < count.length; i++) {
        demo += count[i];
        demoCount.push(demo);
      }
      setCounts(demoCount);

      if (props.image.state === true) {
        let trait = [];
        for (let c = 0; c < props.image.items.length; c++) {
          let index = 0;
          for (let i = 0; i < props.image.image.length; i++) {
            if (props.image.items[c] === props.image.image[i].collection) {
              const img =
                props.image.image[i].url.split(")_(")[
                  props.image.image[i].url.split(")_(").length - 1
                ];
              const num = 100;
              let rarity = Math.floor(num / count[c]);
              if (index < num % count[c]) rarity++;
              index++;
              trait.push({
                id: i,
                url: props.image.image[i].url,
                collection: props.image.image[i].collection,
                name: props.image.image[i].name,
                image: img,
                counts: num,
                rarity: rarity,
                state: "auto",
              });
            }
          }
        }
        setTraits(trait);
        saveTraits(trait);
        changeState();
      } else {
        setTraits(props.image.image);
      }
    }
  }, []);

  const changeName = (e) => {
    let change = traits;
    for (let i = 0; i < change.length; i++) {
      if (JSON.stringify(change[i]) === e.target.id)
        change[i].name = e.target.value;
    }
    saveTraits(change);
    setTraits(change);
  };

  const changeCollection = (e) => {
    // console.log(e.target.id);
    let change = traits;
    let collection = props.image.items;
    for (let i = 0; i < collection.length; i++) {
      if (collection[i] === e.target.id) {
        collection[i] = e.target.value;
      }
    }
    for (let i = 0; i < change.length; i++) {
      if (change[i].collection === e.target.id)
        change[i].collection = e.target.value;
    }

    saveTraits(change);
    saveItems(collection);
    // setCollections(collection);
    setTraits(change);
  };

  const changeRarity = (e) => {
    let change = traits;
    let average = parseInt(JSON.parse(e.target.id).counts);
    let num = 0;
    if (props.image.image) {
      for (let i = 0; i < change.length; i++) {
        if (JSON.stringify(change[i]) === e.target.id) {
          change[i].rarity = e.target.value;
          change[i].state = "hand";
        }
        if (
          change[i].collection === JSON.parse(e.target.id).collection &&
          change[i].state === "hand"
        ) {
          average = average - parseInt(change[i].rarity);
        }
        if (
          change[i].collection === JSON.parse(e.target.id).collection &&
          change[i].state === "auto"
        )
          num++;
      }
      for (let i = 0; i < change.length; i++) {
        if (
          change[i].collection === JSON.parse(e.target.id).collection &&
          change[i].state === "auto"
        ) {
          change[i].rarity = Math.floor(average / num);
        }
      }
      let j = 0;
      let i = 0;
      while (j < average % num) {
        if (
          change[i].state === "auto" &&
          change[i].collection === JSON.parse(e.target.id).collection
        ) {
          change[i].rarity++;
          j++;
        }
        i++;
        if (i === change.length - 1) i = 0;
      }
      saveTraits(change);
      setTraits(change);
    }
  };

  const changeCount = (e) => {
    let change = traits;
    let average = e.target.value;
    let num = 0;
    for (let i = 0; i < change.length; i++) {
      if (change[i].collection === e.target.id) {
        change[i].counts = e.target.value;
      }
      if (change[i].collection === e.target.id && change[i].state === "hand") {
        average = average - parseInt(change[i].rarity);
      }
      if (change[i].collection === e.target.id && change[i].state === "auto")
        num++;
    }
    for (let i = 0; i < change.length; i++) {
      if (change[i].collection === e.target.id && change[i].state === "auto") {
        change[i].rarity = Math.floor(average / num);
      }
    }
    let j = 0;
    let i = 0;
    while (j < average % num) {
      if (change[i].state === "auto" && change[i].collection === e.target.id) {
        change[i].rarity++;
        j++;
      }
      i++;
      if (i === change.length - 1) i = 0;
    }
    saveTraits(change);
    setTraits(change);
  };

  return (
    <Container className="width-800p">
      <h3 className="fw-bolder my-5">Traits</h3>

      {collections &&
        collections.map((c, i) => {
          return (
            <Card className="shadow-sm rounded-3 mb-5" key={i}>
              <Row>
                <Col sm={3} className="p-3">
                  <Item
                    Id={c}
                    title={c}
                    className="d-inline-flex flex-row"
                    name={c}
                    type="text"
                    changeI={changeCollection}
                  />
                </Col>
                <Col sm={7} />
                <Col sm={2} className="ps-0">
                  {console.log()}
                  <Count
                    text="Count"
                    Id={c}
                    count={traits[counts[i] - 1].counts}
                    className="mt-3"
                    changeC={changeCount}
                  />
                </Col>
              </Row>
              <Card.Header>
                <Row>
                  <Col sm={2}>VARIATION</Col>
                  <Col sm={6} />
                  <Col sm={2}>RARITY</Col>
                  <Col sm={2} className="ps-0">
                    COUNT
                  </Col>
                </Row>
              </Card.Header>
              {traits &&
                traits.map((t, index) => {
                  if (t.collection === c)
                    return (
                      <ListGroup variant="flush" key={index}>
                        <ListGroup.Item>
                          <Row>
                            <Col sm={1}>
                              <div className="rounded-3 bg-light m-1 width-60p height-60p">
                                <img
                                  src={t.url}
                                  className="width-100 height-100 rounded-3"
                                  alt={t.collection}
                                />
                              </div>
                            </Col>
                            <Col sm={7}>
                              <Item
                                Id={JSON.stringify(t)}
                                title={
                                  t.url.split(")_(")[
                                    t.url.split(")_(").length - 1
                                  ]
                                }
                                name={t.name}
                                className="d-inline-flex flex-row"
                                value={t.name}
                                changeI={changeName}
                              />
                            </Col>
                            <Col sm={2} className="pt-4 ">
                              {(t.rarity * 100) % t.counts === 0
                                ? Math.floor((t.rarity / t.counts) * 100) + "%"
                                : ((t.rarity / t.counts) * 100).toFixed(3) +
                                  "%"}
                            </Col>
                            <Col sm={2} className="ps-0">
                              <Count
                                Id={JSON.stringify(t)}
                                count={parseInt(t.rarity)}
                                demoClass="mt-2"
                                changeC={changeRarity}
                              />
                            </Col>
                          </Row>
                        </ListGroup.Item>
                      </ListGroup>
                    );
                })}
            </Card>
          );
        })}
    </Container>
  );
};

Traits.propTypes = {
  image: PropTypes.object,
  setting: PropTypes.object,
};

const mapStateToProps = (state) => ({
  image: state.image,
  setting: state.setting,
});

export default connect(mapStateToProps, { saveTraits })(Traits);
