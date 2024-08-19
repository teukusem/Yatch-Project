import colorPallate from "@/utils/color";
import styled from "styled-components";

const Create = {
  SummaryCard: styled.div`
    width: 284px;
    height: 110px;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    background-color: ${colorPallate.white};
    box-shadow: 2px 4px 4px ${colorPallate.grey};
  `,
  SummaryCountText: styled.p<{ fontSize?: string }>`
    font-weight: 500;
    color: ${colorPallate.blackLight100};
    font-size: ${({ fontSize }) => fontSize ?? "40px"};
  `,
  SummaryTitleText: styled.p<{ fontSize?: string }>`
    font-weight: 400;
    color: ${colorPallate.blackLight100};
    font-size: ${({ fontSize }) => fontSize ?? "16px"};
  `,
  WrapperSummaryDescription: styled.div`
    align-items: center;
  `,
  WrapperCardVesselMovement: styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  `,
};

export const style = {
  ColumnStyle: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Create;
