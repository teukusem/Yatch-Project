import React from "react";
import { Col, Row } from "antd";
import Create from "./style";
import FormOrdering from "../ordering-form";

function OrderingGroup() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col xs={{ span: 24, flex: "100%" }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <Create.FormCardContainer>
            <FormOrdering />
          </Create.FormCardContainer>
        </Col>

        <Col xs={{ span: 24, flex: "100%" }} md={{ span: 12 }} lg={{ span: 12 }} xl={{ span: 12 }}>
          <h1>Text</h1>
        </Col>
      </Row>
    </>
  );
}

export default OrderingGroup;
