import colorPallate from "@/utils/color";
import styled, { keyframes } from "styled-components";

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const Create = {
    ContainerCard: styled.div`
        height: 250px;
        border: 2px solid ${colorPallate?.greyLight};
        border-radius: 12px;
        background: ${colorPallate?.white};
        padding: 24px
    `,
    TitleVessel: styled.p`
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 6px;
     `,
    WrapperHeader: styled.div`
        display: flex;
        justify-content: space-between;

        & > div {
        font-weight: 500;

        & > span {
            color: ${colorPallate.grey};
            margin-right: 6px;
        }
        }
    `,
    WrapperHasSpace: styled.div`
        display: flex;
        gap: 1rem;
    `,
};

export const style = {
    DividerStyle: {
        borderColor: colorPallate.greyLight100,
        margin: "16px 0px",
    },
};

export default Create;
