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
  ContainerHeader: styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 24px;
    font-weight: 500;
  `,
  SubContainerAction: styled.div`
    display: flex;
    font-size: 18px;
    color: ${colorPallate.primaryBlue};
    align-items: center;
    gap: 0.8rem;
    font-weight: 500;
  `,
  ContainerCardOrder: styled.div`
    display: flex;
    gap: 2rem;
    overflow: auto;
    cursor: grab;
    scrollbar-width: none;
    padding: 10px;

    & > div {
      display: flex;
      gap: 2rem;
      animation: ${scroll} 15s linear infinite;
    }

    &:hover > div {
      animation-play-state: paused; /* Pause on hover */
    }

    @media (max-width: 500px) {
      gap: 10rem;
    }

    @media (max-width: 400px) {
      gap: 13rem;
    }
  `,
  CardOrder: styled.div`
    background: ${colorPallate.white};
    width: 471px;
    height: 220px;
    border-radius: 12px;
    border: 1px solid ${colorPallate.greyLight};
    padding: 24px;
    box-shadow: 4px 6px 6px ${colorPallate.grey};
    flex-shrink: 0;
  `,
};

export default Create;
