import React from "react";
import { Modal, ModalProps } from "antd";
import styled from "styled-components";
import colorPallate from "@/utils/color";

const ModalStyled = styled(Modal)`
  .ant-modal-header {
    border-bottom: 1px solid #cfd1d4;
    padding-bottom: 16px;
  }

  .ant-modal-title {
    font-size: 18px;
    font-weight: 600;
    color: ${colorPallate.black};
  }

  .ant-modal-close {
    color: ${colorPallate.black};
  }
  .ant-modal-close-x {
    font-size: 24px;
  }

  .ant-modal-footer {
    border-top: 1px solid #cfd1d4;
    padding-top: 16px;
  }
`;

const ModalPopup: React.FC<ModalProps> = (props) => {
  return <ModalStyled {...props} />;
};

export default ModalPopup;
