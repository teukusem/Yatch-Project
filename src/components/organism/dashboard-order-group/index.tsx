import colorPallate from "@/utils/color";
import Image from "next/image";
import React from "react";
import Create, { style } from "./styles";
import { Col, Divider, Row } from "antd";
import arrowupright from "@/assets/images/icon/arrow-up-right.svg";
import roundedship from "@/assets/images/icon/rounded-ship.svg";
import berthing from "@/assets/images/icon/berthing.svg";
import electric from "@/assets/images/icon/electric.svg";
import satination from "@/assets/images/icon/satination.svg";
import Badge from "@/components/atoms/badge";

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
          {[...Array(10)].map((_, index) => (
            <Col>
              <Create.CardOrder>
                <Create.WrapperHeader>
                  <div>
                    <span>Request Number :</span>
                    1111124841408214
                  </div>

                  <Badge
                    title="Waiting Approval"
                    color={colorPallate.yellow}
                    backgroundColor={colorPallate.yellowLight100}
                  />
                </Create.WrapperHeader>
                <Divider style={style.DividerStyle} />
                <Create.WrapperHasSpace>
                  <Image src={roundedship} alt="Ship Logo" />
                  <div>
                    <Create.TitleVessel>Seaborn Oddysey</Create.TitleVessel>
                    <Create.WrapperHasSpace>
                      <Badge
                        title="Mono Hault"
                        color={colorPallate.grey}
                        backgroundColor={colorPallate.whiteLight200}
                      />
                      <Badge
                        title={`LOA: ${43.92}`}
                        color={colorPallate.grey}
                        backgroundColor={colorPallate.whiteLight200}
                      />
                    </Create.WrapperHasSpace>
                  </div>
                </Create.WrapperHasSpace>
                <Divider style={style.DividerStyle} />
                <Create.WrapperHasSpace>
                  <Create.FooterItem>
                    <Image src={berthing} alt="Berthing Icon" />
                    Berthing
                  </Create.FooterItem>
                  <Create.FooterItem>
                    <Image src={electric} alt="Electricity Icon" />
                    Electricity
                  </Create.FooterItem>
                  <Create.FooterItem>
                    <Image src={satination} alt="Satination Icon" />
                    Satination
                  </Create.FooterItem>
                </Create.WrapperHasSpace>
              </Create.CardOrder>
            </Col>
          ))}
        </Create.ContainerCardOrder>
      </Row>
    </div>
  );
}

export default DashboardOrderGroup;
