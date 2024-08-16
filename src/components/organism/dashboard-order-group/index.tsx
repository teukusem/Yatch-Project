import colorPallate from "@/utils/color";
import Image from "next/image";
import React from "react";
import Create from "./styles";
import { Col, Divider, Row } from "antd";
import arrowupright from "@/assets/images/icon/arrow-up-right.svg";
import roundedship from "@/assets/images/icon/rounded-ship.svg";
import berthing from "@/assets/images/icon/berthing.svg";
import electric from "@/assets/images/icon/electric.svg";
import satination from "@/assets/images/icon/satination.svg";

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
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <div style={{ fontWeight: 500 }}>
                    <span style={{ color: colorPallate.grey, marginRight: 6 }}> Request Number :</span>
                    1111124841408214
                  </div>
                  <div
                    style={{
                      padding: "4px 8px",
                      borderRadius: 4,
                      background: "#FEF9E8",
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#F6C01D",
                    }}
                  >
                    Waiting Approval
                  </div>
                </div>
                <Divider style={{ borderColor: "#D5D7D9", margin: "16px 0px" }} />
                <div style={{ display: "flex", gap: "1rem" }}>
                  <Image src={roundedship} alt="Ship Logo" />
                  <div>
                    <p style={{ fontSize: 18, fontWeight: 600, marginBottom: 6 }}>Seaborn Oddysey</p>
                    <div style={{ display: "flex", gap: "1rem" }}>
                      <div
                        style={{
                          padding: "4px 8px",
                          borderRadius: 4,
                          background: "#F3F3F3",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#797A7C",
                          width: "fit-content",
                        }}
                      >
                        Mono Hault
                      </div>
                      <div
                        style={{
                          padding: "4px 8px",
                          borderRadius: 4,
                          background: "#F3F3F3",
                          fontSize: 12,
                          fontWeight: 600,
                          color: "#797A7C",
                          width: "fit-content",
                        }}
                      >
                        LOA: 43.92
                      </div>
                    </div>
                  </div>
                </div>
                <Divider style={{ borderColor: "#D5D7D9", margin: "16px 0px" }} />

                <div style={{ display: "flex", gap: "1rem" }}>
                  <div
                    style={{
                      width: "fit-content",
                      fontSize: 14,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Image src={berthing} alt="Berthing Icon" />
                    Berthing
                  </div>
                  <div
                    style={{
                      width: "fit-content",
                      fontSize: 14,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Image src={electric} alt="Electricity Icon" />
                    Electricity
                  </div>
                  <div
                    style={{
                      width: "fit-content",
                      fontSize: 14,
                      fontWeight: 500,
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <Image src={satination} alt="Satination Icon" />
                    Satination
                  </div>
                </div>
              </Create.CardOrder>
            </Col>
          ))}
        </Create.ContainerCardOrder>
      </Row>
    </div>
  );
}

export default DashboardOrderGroup;
