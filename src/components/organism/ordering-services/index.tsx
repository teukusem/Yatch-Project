import Image from "next/image";
import React, { useState } from "react";
import berthing from "@/assets/images/icon/berthing.svg";
import satination from "@/assets/images/icon/satination.svg";
import electric from "@/assets/images/icon/electric.svg";
import pilot from "@/assets/images/icon/pilot-profile.svg";
import water from "@/assets/images/icon/water.svg";
import yachtclub from "@/assets/images/icon/yacht-club.svg";
import RoundedCheckbox from "@/components/atoms/checkbox/rounded-checkbox";
import { Col, Row } from "antd";
import Create from "./style";

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
      <Create.TitleHeader>Select Service</Create.TitleHeader>
      <Create.WrapperRowItem gutter={[16, 16]}>
        {services?.map((service, index) => (
          <Col
            xs={{ span: 24, flex: "100%" }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            key={service.id}
          >
            <Create.CardServices
              border={selectedServices.includes(service.id)}
              onClick={() => handleSelect(service.id)}
              key={service.id}
            >
              <Create.LabelIconServices>
                <Image src={service.icon} alt={`${service.name} Icon`} />
                {service.name}
              </Create.LabelIconServices>
              <RoundedCheckbox
                checked={selectedServices.includes(service.id)}
              />
            </Create.CardServices>
          </Col>
        ))}
      </Create.WrapperRowItem>
    </>
  );
}

export default OrderingServices;
