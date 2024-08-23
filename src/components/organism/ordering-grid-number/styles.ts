import colorPallate from "@/utils/color";
import styled from "styled-components";

export const WrapperLabel = styled.div`
  &:hover {
    color: ${colorPallate.royalBlue};
  }
`;

const Create = {
  OuterContainer: styled.div<{
    $showBefore?: boolean;
    $borderleft?: string;
    $borderTop?: string;
  }>`
    padding: 10px;
    border: 12px solid ${colorPallate.greyLight};
    border-right: none;
    border-left: ${({ $borderleft }) => $borderleft};
    border-top: ${({ $borderTop }) => $borderTop};
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0px;
      bottom: -10px;
      width: 60px;
      height: 60px;
      background-color: ${colorPallate.greyLight};
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
    background-color: ${colorPallate.white};
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
      ${({ $isSelected }) =>
        $isSelected ? colorPallate.primaryBlue100 : colorPallate.greyLight100};
    background-color: ${({ $isSelected }) =>
      $isSelected ? colorPallate.primaryBlue100 : colorPallate.white};
    color: ${({ $isSelected }) =>
      $isSelected ? colorPallate.white : colorPallate.grey};
    cursor: pointer;
    font-size: 16px;

    &:hover {
      border-color: ${colorPallate.primaryBlue100};
    }
  `,
  TitleHeader: styled.p`
    font-size: 16px;
    marginbottom: 16px;
    font-weight: 600;
  `,
  TabsHeaderLabel: styled.p`
    font-weight: 500;
    font-size: 16px;

    ${WrapperLabel}:hover & {
      color: ${colorPallate.primaryBlue100};
    }
  `,
  AvailableLabel: styled.p<{ $active?: boolean }>`
    font-weight: 500;
    font-size: 10px;
    color: ${({ $active }) =>
      $active ? colorPallate.royalBlue : colorPallate.greyLight300};

    ${WrapperLabel}:hover & {
      color: ${colorPallate.royalBlue};
    }
  `,
};

export default Create;
