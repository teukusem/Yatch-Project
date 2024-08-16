import colorPallate from "@/utils/color";
import Image from "next/image";
import React from "react";
import arrowupright from "@/assets/images/icon/arrow-up-right.svg";
import Create from "./styles";
import { Col, Row } from "antd";

function DashboardOrderGroup() {
  return (
    <div className="grid-container">
      <Create.ContainerHeader>
        <p>Order</p>
        <Create.SubContainerAction>
          See all
          <Image src={arrowupright} alt="Arrow-Up-Right Icon" />
        </Create.SubContainerAction>
      </Create.ContainerHeader>

      <Row>
        <Create.ContainerCardOrder>
          <Col>
            <Create.CardOrder>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <span style={{ color: colorPallate.grey, marginRight: 6 }}> Request Number :</span>
                  1111124841408214
                </div>
                <div>Waiting Approval</div>
              </div>
            </Create.CardOrder>
          </Col>
          <Col>
            <Create.CardOrder></Create.CardOrder>
          </Col>
          <Col>
            <Create.CardOrder></Create.CardOrder>
          </Col>
        </Create.ContainerCardOrder>
      </Row>
    </div>
  );
}

export default DashboardOrderGroup;
