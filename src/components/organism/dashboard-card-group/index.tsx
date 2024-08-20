import { Col, Row } from "antd";
import React from "react";
import Create, { style } from "./styles";
import Image from "next/image";
import ship from "@/assets/images/icon/ship.svg";
import folder from "@/assets/images/icon/folder.svg";
import monitorbilling from "@/assets/images/icon/monitor-billing.svg";
import { useRouter } from "next/router";

function DashboardCardGroup() {
  const router = useRouter();
  return (
    <Row gutter={[16, 16]} justify={"center"}>
      <Col xs={{ span: 24, flex: "100%" }} md={{ span: 8 }} lg={{ span: 6 }} style={style.ColumnStyle}>
        <Create.DashboardCard>
          <Image src={ship} alt="Ship Logo" />
          <Create.WrapperNavigationContainer>
            <div>
              <Create.HeaderTextCard>Order</Create.HeaderTextCard>
              <Create.SubTextCard>Search and Create Your Order</Create.SubTextCard>
            </div>
            <Create.ButtonStyleNavigation type="primary" block onClick={() => router.push("/ordering")}>
              Open
            </Create.ButtonStyleNavigation>
          </Create.WrapperNavigationContainer>
        </Create.DashboardCard>
      </Col>

      <Col xs={{ span: 24, flex: "100%" }} md={{ span: 8 }} lg={{ span: 6 }} style={style.ColumnStyle}>
        <Create.DashboardCard>
          <Image src={folder} alt="Folder Logo" />
          <Create.WrapperNavigationContainer>
            <div>
              <Create.HeaderTextCard>History Order</Create.HeaderTextCard>
              <Create.SubTextCard>View all your history order</Create.SubTextCard>
            </div>
            <Create.ButtonStyleNavigation type="primary" block>
              Open
            </Create.ButtonStyleNavigation>
          </Create.WrapperNavigationContainer>
        </Create.DashboardCard>
      </Col>

      <Col xs={{ span: 24, flex: "100%" }} md={{ span: 8 }} lg={{ span: 6 }} style={style.ColumnStyle}>
        <Create.DashboardCard>
          <Image src={monitorbilling} alt="Monitor Billing Logo" />
          <Create.WrapperNavigationContainer>
            <div>
              <Create.HeaderTextCard>Billing</Create.HeaderTextCard>
              <Create.SubTextCard>Print Your Proforma & Invoice</Create.SubTextCard>
            </div>
            <Create.ButtonStyleNavigation type="primary" block>
              Open
            </Create.ButtonStyleNavigation>
          </Create.WrapperNavigationContainer>
        </Create.DashboardCard>
      </Col>
    </Row>
  );
}

export default DashboardCardGroup;
