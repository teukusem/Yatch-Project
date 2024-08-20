import React from "react";
import styled from "styled-components";
import { Checkbox, CheckboxProps } from "antd";
import colorPallate from "@/utils/color";

const CheckboxStyled = styled(Checkbox)`
  .ant-checkbox-inner {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${colorPallate.primaryBlue100};
    border-color: ${colorPallate.primaryBlue100};
  }

  .ant-checkbox-checked::after {
    border-radius: 50%;
    width: 24px;
    height: 24px;
  }
`;

const RoundedCheckbox: React.FC<CheckboxProps> = (props) => {
  return <CheckboxStyled {...props} />;
};

export default RoundedCheckbox;
