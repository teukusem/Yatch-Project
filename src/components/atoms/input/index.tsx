import React from "react";
import { Input, InputProps } from "antd";
import styled from "styled-components";

const InputStyled = styled(Input)`
  height: 56px;
  border-radius: 10px;
  .ant-input {
    height: 56px;
    border-radius: 10px;
  }
`;

const InputCustom: React.FC<InputProps> = (props) => {
  return <InputStyled {...props} />;
};

export default InputCustom;
