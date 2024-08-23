import React, { useState } from "react";
import { Button, Col, Divider, Form, Row } from "antd";
import Create from "./style";
import FormOrdering from "../ordering-form";
import type { OrderingFormFieldType } from "@/utils/type/ordering";
import OrderingServices from "../ordering-services";
import GridNumber from "../ordering-grid-number";

function OrderingGroup() {
  const [form] = Form.useForm();

  const [selectedServices, setSelectedServices] = useState<number[]>([1]);

  const onFinish = (values: OrderingFormFieldType) => {
    console.log("Success:", values);
  };

  return (
    <>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Row gutter={[16, 16]}>
          <Col
            xs={{ span: 24, flex: "100%" }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <Create.FormCardContainer>
              <FormOrdering />
            </Create.FormCardContainer>
          </Col>

          <Col
            xs={{ span: 24, flex: "100%" }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
            xl={{ span: 12 }}
          >
            <Row gutter={[16, 16]}>
              <Col
                xs={{ span: 24, flex: "100%" }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
              >
                <Create.FormCardContainer>
                  <OrderingServices
                    selectedServices={selectedServices}
                    setSelectedServices={setSelectedServices}
                  />
                </Create.FormCardContainer>
              </Col>
              <Col
                xs={{ span: 24, flex: "100%" }}
                md={{ span: 24 }}
                lg={{ span: 24 }}
                xl={{ span: 24 }}
              >
                <Create.FormCardContainer>
                  <GridNumber />
                </Create.FormCardContainer>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider />
        <div style={{ display: "flex", justifyContent: "end" }}>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: 124, fontSize: 16, fontWeight: 500, height: 48 }}
          >
            Order
          </Button>
        </div>
      </Form>
    </>
  );
}

export default OrderingGroup;
