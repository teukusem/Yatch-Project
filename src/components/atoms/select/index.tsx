import React from "react";
import styled from "styled-components";
import { Select, SelectProps } from "antd";

const SelectStyled = styled(Select)`
  height: 56px;
`;

const SelectCustom: React.FC<SelectProps> = (props) => {
  return <SelectStyled {...props} />;
};

export default SelectCustom;