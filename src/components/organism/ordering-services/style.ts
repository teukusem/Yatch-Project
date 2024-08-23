import colorPallate from "@/utils/color";
import { Row } from "antd";
import styled from "styled-components";

const Create = {
  TitleHeader: styled.p`
    font-size: 16px;
    marginbottom: 16px;
    font-weight: 600;
  `,
  WrapperRowItem: styled(Row)`
    margin-top: 16px;
  `,
  CardServices: styled.div<{ $isSelected?: boolean }>`
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    padding: 16px;
    cursor: pointer;
    border-radius: 10px;
    border: ${({ $isSelected }) =>
      $isSelected
        ? `2px solid ${colorPallate.primaryBlue100}`
        : `1px solid ${colorPallate.greyLight200}`};
  `,
  LabelIconServices: styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
  `,
};

export default Create;
