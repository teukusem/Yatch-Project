import React from "react";
import { Form, FormItemProps } from "antd";
import styled from "styled-components";

const FormItemStyled = styled(Form.Item)`
  .ant-form-item-label > label {
    font-size: 12px;
    font-weight: 500;
  }
  .ant-form-item-required {
    flex-direction: row-reverse;
  }

  .ant-form-item-required:after {
    display: none;
  }
`;

const FormItemCustom: React.FC<FormItemProps> = ({ children, ...props }) => {
  return <FormItemStyled {...props}>{children}</FormItemStyled>;
};

export default FormItemCustom;
