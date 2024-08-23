import styled from "styled-components";

const Create = {
  OuterContainer: styled.div<{ $showBefore?: boolean }>`
    padding: 10px;
    border: 12px solid #d9d9d9;
    border-right: none;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -10px;
      width: 60px;
      height: 60px;
      background-color: #d9d9d9;
      clip-path: polygon(0 0, 100% 0, 100% 100%);
      transform: rotate(-180deg);
      display: ${({ $showBefore }) => ($showBefore ? "block" : "none")};
    }
  `,
  GridContainer: styled.div<{ $gridColumn: string }>`
    display: grid;
    grid-template-columns: ${({ $gridColumn }) => $gridColumn};
    gap: 10px;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 8px;
    overflow: auto;
  `,
  NumberButton: styled.button<{ $isSelected: boolean }>`
    width: 63px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    border: 1px solid
      ${({ $isSelected }) => ($isSelected ? "#1890ff" : "#d9d9d9")};
    background-color: ${({ $isSelected }) =>
      $isSelected ? "#1890ff" : "#ffffff"};
    color: ${({ $isSelected }) => ($isSelected ? "#d9d9d9" : "#000")};
    cursor: pointer;
    font-size: 16px;

    &:hover {
      border-color: #1890ff;
    }
  `,
};

export default Create;
