import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "./Sidebar";
import SettingNav from "./SettingNav";
import Setting from "./Setting";
import Traits from "./traits";
import Render from "./render";

const Settings = (props) => {
  const show = (p) => {
    switch (p) {
      case "render":
        return <Render />;
      case "traits":
        return <Traits />;

      default:
        return <Setting />;
    }
  };
  return (
    <Container fluid>
      <Row>
        <Sidebar />
        <Col sm={2} className="border-end">
          <SettingNav />
        </Col>
        <Col className="over bg-whites">{show(props.show)}</Col>
      </Row>
    </Container>
  );
};

export default Settings;
