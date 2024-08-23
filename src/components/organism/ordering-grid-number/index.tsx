import React, { useState } from "react";
import styled from "styled-components";

const OuterContainer = styled.div`
  padding: 10px;
  border: 12px solid #d9d9d9;
  border-right: none;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  overflow: auto;
`;

const NumberButton = styled.button<{ $isSelected: boolean }>`
  width: 63px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid
    ${({ $isSelected }) => ($isSelected ? "#1890ff" : "#d9d9d9")};
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#f0f0f0" : "#ffffff"};
  color: #000;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    border-color: #1890ff;
  }
`;

const GridNumber = () => {
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);

  const handleNumberClick = (number: number) => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter((num) => num !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  return (
    <OuterContainer>
      <GridContainer>
        {Array.from({ length: 14 }, (_, index) => index + 1).map((number) => (
          <NumberButton
            key={number}
            $isSelected={selectedNumbers.includes(number)}
            onClick={() => handleNumberClick(number)}
          >
            {String(number).padStart(2, "0")}
          </NumberButton>
        ))}
      </GridContainer>
    </OuterContainer>
  );
};

export default GridNumber;
