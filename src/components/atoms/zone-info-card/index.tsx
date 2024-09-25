import React from "react";
import styled from "styled-components";
import { Card } from "antd";

const StyledCard = styled(Card)`
  border-radius: 10px;
  background-color: #e6f7ff;
  height: fit-content;
  border-color: #1890ff;
  border-width: 1px;
  .ant-card-body {
    padding: 8px 16px;
  }
`;

const Title = styled.h3`
  margin: 0;
  font-size: 18px;
  color: #1890ff;
  font-weight: 600;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 16px;
  color: #000;
  font-weight: bold;
`;

const ZoneInfoCard = () => {
  return (
    <StyledCard>
      <Title>MARINA 3</Title>
      <Subtitle>01, 02, 03</Subtitle>
    </StyledCard>
  );
};

export default ZoneInfoCard;
