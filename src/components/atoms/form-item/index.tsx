import React from "react";
import { Form, FormItemProps } from "antd";
import styled from "styled-components";

const FormItemStyled = styled(Form.Item)`
  .ant-form-item-label > label {
    font-size: 12px;
    font-weight: 500;
  }
`;

const FormItemCustom: React.FC<FormItemProps> = ({ children, ...props }) => {
  return <FormItemStyled {...props}>{children}</FormItemStyled>;
};

export default FormItemCustom;