import { Tabs } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import Create from "./styles";

const GridNumber = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [keyActive, setKeyActive] = useState<string>("1");

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const items = [
    {
      key: "1",
      label: (
        <div>
          <p style={{ fontWeight: 500, fontSize: 16 }}>Marina 1</p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 10,
              color: keyActive !== "1" ? "#A6A6A7" : "#66A7F1",
            }}
          >
            Available: 14 Slot
          </p>
        </div>
      ),
      children: (
        <Create.OuterContainer $showBefore={false}>
          <Create.GridContainer $gridColumn="repeat(7, 1fr)">
            {Array.from({ length: 14 }, (_, index) => index + 1).map(
              (number) => (
                <Create.NumberButton
                  key={number}
                  $isSelected={selectedNumbers.includes(number)}
                  onClick={() => handleNumberClick(number)}
                >
                  {String(number).padStart(2, "0")}
                </Create.NumberButton>
              )
            )}
          </Create.GridContainer>
        </Create.OuterContainer>
      ),
    },
    {
      key: "2",
      label: (
        <div>
          <p style={{ fontWeight: 500, fontSize: 16 }}>Marina 2</p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 10,
              color: keyActive !== "2" ? "#A6A6A7" : "#66A7F1",
            }}
          >
            Available: 14 Slot
          </p>
        </div>
      ),
      children: (
        <Create.OuterContainer $showBefore={true}>
          <Create.GridContainer $gridColumn="repeat(6, 1fr)">
            {Array.from({ length: 14 }, (_, index) => index + 1).map(
              (number) => (
                <Create.NumberButton
                  key={number}
                  $isSelected={selectedNumbers.includes(number)}
                  onClick={() => handleNumberClick(number)}
                >
                  {String(number).padStart(2, "0")}
                </Create.NumberButton>
              )
            )}
          </Create.GridContainer>
        </Create.OuterContainer>
      ),
    },
    {
      key: "3",
      label: (
        <div>
          <p style={{ fontWeight: 500, fontSize: 16 }}>Marina 3</p>
          <p
            style={{
              fontWeight: 500,
              fontSize: 10,
              color: keyActive !== "3" ? "#A6A6A7" : "#66A7F1",
            }}
          >
            Available: 14 Slot
          </p>
        </div>
      ),
      children: (
        <Create.OuterContainer $showBefore={false}>
          <Create.GridContainer $gridColumn="repeat(7, 1fr)">
            {Array.from({ length: 14 }, (_, index) => index + 1).map(
              (number) => (
                <Create.NumberButton
                  key={number}
                  $isSelected={selectedNumbers.includes(number)}
                  onClick={() => handleNumberClick(number)}
                >
                  {String(number).padStart(2, "0")}
                </Create.NumberButton>
              )
            )}
          </Create.GridContainer>
        </Create.OuterContainer>
      ),
    },
  ];

  const onChange = (key: string) => {
    setKeyActive(key);
  };

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default GridNumber;
