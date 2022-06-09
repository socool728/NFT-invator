import React, { useEffect } from "react";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import StepItem from "./StepItem";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import SavedItem from "./SavedItem";
import { saveChange } from "../../../actions/controlart";
import { saveAs } from "file-saver";

const Traits = (props) => {
  useEffect(() => {
    if (props.image.new) {
      let save = props.image.save;
      for (let i = 0; i < save.length; i++) {
        if (save[i].workspace === props.image.now) {
          save[i] = props.image.new;
        }
      }
      saveChange(save);
    }
  }, [props.image.new]);
  return (
    <>
      <div className="overflow-scroll height-50">
        <Row className="border-bottom shadow-sm border-start bg-white position-fixed width-100 height-70p">
          <b className="m-0 py-4 text-muted">Traits</b>
        </Row>
        <div className="pt-5 pb-3"></div>
        {props.image.new &&
          props.image.new.info
            .slice(0)
            .reverse()
            .map((a, index) => {
              return <StepItem img={a} key={index} />;
            })}
      </div>
      <div className="overflow-scroll height-50">
        <Row className="border-bottom border-top shadow-sm bg-white position-fixed width-100 height-70p">
          <Col sm={1} className="m-0 py-4 text-muted">
            <p>
              <b>Saved</b>
            </p>
          </Col>
          <Col sm={1} className="d-flex flex-row-reverse">
            <OverlayTrigger
              key="exoprtAll"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Export All</Tooltip>}
            >
              <i
                className="fas fa-cloud-download-alt text-muted my-4 ms-2 fs-4 cursor-p"
                onClick={() => {
                  if (props.image.save)
                    props.image.save.map((s) => {
                      const image =
                        s.url.split("/")[s.url.split("/").length - 1] +
                        "." +
                        props.type;
                      saveAs(s.url, image);
                    });
                }}
              />
            </OverlayTrigger>
            {/* <OverlayTrigger
              key="createVideo"
              placement="top"
              overlay={<Tooltip id="tooltip-top">Create Promo Video</Tooltip>}
            >
              <i className="fas fa-video text-muted my-4 mx-2 fs-4" />
            </OverlayTrigger> */}
          </Col>
          <Col sm={10} />
        </Row>

        <div className="pt-5 pb-3"></div>
        <Row className="m-0">
          {props.image.save &&
            props.image.save.map((s, index) => {
              return <SavedItem save={s} key={index} />;
            })}
        </Row>
      </div>
    </>
  );
};

Traits.propTypes = {
  image: PropTypes.object,
  type: PropTypes.string,
};

const mapStateToProps = (state) => ({
  image: state.image,
  type: state.setting.type,
});

export default connect(mapStateToProps, {})(Traits);
