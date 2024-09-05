import { Tabs } from "antd";
import React, { useState } from "react";
import Create, { WrapperLabel } from "./styles";

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

  const onChange = (key: string) => {
    setKeyActive(key);
  };

  const items = [
    {
      key: "1",
      label: (
        <WrapperLabel>
          <Create.TabsHeaderLabel>Marina 1</Create.TabsHeaderLabel>
          <Create.AvailableLabel $active={keyActive === "1"}>
            Available: 14 Slot
          </Create.AvailableLabel>
        </WrapperLabel>
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
        <WrapperLabel>
          <Create.TabsHeaderLabel>Marina 2</Create.TabsHeaderLabel>
          <Create.AvailableLabel $active={keyActive === "2"}>
            Available: 14 Slot
          </Create.AvailableLabel>
        </WrapperLabel>
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
        <WrapperLabel>
          <Create.TabsHeaderLabel>Marina 3</Create.TabsHeaderLabel>
          <Create.AvailableLabel $active={keyActive === "3"}>
            Available: 3 Slot
          </Create.AvailableLabel>
        </WrapperLabel>
      ),
      children: (
        <Create.OuterContainer
          $showBefore={false}
          $borderTop="none"
          $borderleft="none"
        >
          <Create.GridContainer $gridColumn="repeat(3, 1fr)">
            {Array.from({ length: 3 }, (_, index) => index + 1).map(
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

  return (
    <>
      <Create.TitleHeader>Pelabuhan Marina</Create.TitleHeader>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </>
  );
};

export default GridNumber;
