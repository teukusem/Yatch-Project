import { Form } from "antd";
import styled from "styled-components";

export const style = {
  formItemLeftSide: {
    display: "inline-block",
    width: "calc(50% - 8px)",
    "@media (max-width: 768px)": {
      display: "block",
      width: "calc(100% - 8px)",
      marginBottom: "16px",
    },
  },
  formItemRightSide: {
    display: "inline-block",
    width: "calc(50% - 8px)",
    margin: "0 8px",
    "@media (max-width: 768px)": {
      display: "block",
      width: "calc(100% - 8px)",
      margin: 0,
    },
  },
  formItemParent: {
    marginBottom: 0,
  },
};

const Create = {
  StyledFormItemLeftSide: styled(Form.Item)`
    display: inline-block;
    width: calc(50% - 8px);

    @media (max-width: 500px) {
      width: calc(100% - 8px);
    }
  `,
  StyledFormItemRightSide: styled(Form.Item)`
    display: inline-block;
    width: calc(50% - 8px);
    margin: 0 8px;

    @media (max-width: 500px) {
      width: calc(100% - 8px);
      margin: 0 0px;
    }
  `,
};

export default Create;
