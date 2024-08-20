import Image from "next/image";
import React, { useState } from "react";
import berthing from "@/assets/images/icon/berthing.svg";
import satination from "@/assets/images/icon/satination.svg";
import electric from "@/assets/images/icon/electric.svg";
import pilot from "@/assets/images/icon/pilot-profile.svg";
import water from "@/assets/images/icon/water.svg";
import yachtclub from "@/assets/images/icon/yacht-club.svg";
import colorPallate from "@/utils/color";
import RoundedCheckbox from "@/components/atoms/checkbox/rounded-checkbox";
import { Col, Row } from "antd";

interface OrderingServicesProps {
  selectedServices: number[];
  setSelectedServices: React.Dispatch<React.SetStateAction<number[]>>;
}

const services = [
  { id: 1, name: "Berthing", icon: berthing },
  { id: 2, name: "Pilot", icon: pilot },
  { id: 3, name: "Water", icon: water },
  { id: 4, name: "Electricity", icon: electric },
  { id: 5, name: "Satanation", icon: satination },
  { id: 6, name: "Yacht Club", icon: yachtclub },
];

function OrderingServices({
  selectedServices,
  setSelectedServices,
}: OrderingServicesProps) {
  const handleSelect = (id: number) => {
    if (id === 1) {
      return;
    }
    setSelectedServices((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((serviceId) => serviceId !== id)
        : [...prevSelected, id]
    );
  };

  return (
    <>
      <p style={{ fontWeight: 600, fontSize: 16, marginBottom: 16 }}>
        Select Service
      </p>
      <Row gutter={[16, 16]} style={{ marginTop: "16px" }}>
        {services?.map((service, index) => (
          <Col
            xs={{ span: 24, flex: "100%" }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            key={service.id}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 14,
                border: selectedServices.includes(service.id)
                  ? `2px solid ${colorPallate.primaryBlue100}`
                  : `1px solid ${colorPallate.greyLight200}`,
                padding: 16,
                borderRadius: 10,
              }}
              onClick={() => handleSelect(service.id)}
              key={service.id}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <Image src={service.icon} alt={`${service.name} Icon`} />
                {service.name}
              </div>
              <RoundedCheckbox
                checked={selectedServices.includes(service.id)}
              />
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default OrderingServices;
