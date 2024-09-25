import styled from 'styled-components';
import colorPallate from "@/utils/color";

const Create = {
  SummaryCard: styled.div`
    width: 100%; 
    max-width: 260px; /* Adjusted to be slightly smaller */
    height: 120px; /* Increased height slightly */
    border-radius: 15px; /* More rounded corners */
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center; /* Ensure vertical alignment */
    background-color: ${colorPallate.white};
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05); /* Softer shadow */
    transition: box-shadow 0.3s ease;
    
    &:hover {
      box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.1); /* Shadow on hover */
    }
  `,
  SummaryCountText: styled.p<{ fontSize?: string }>`
    font-weight: 500;
    color: ${colorPallate.blackLight100};
    font-size: ${({ fontSize }) => fontSize ?? "36px"}; /* Smaller size */
    margin: 0; /* Remove margin for cleaner layout */
  `,
  SummaryTitleText: styled.p<{ fontSize?: string }>`
    font-weight: 400;
    color: ${colorPallate.blackLight100};
    font-size: ${({ fontSize }) => fontSize ?? "14px"}; /* Smaller size */
    margin: 0;
  `,
  SpanSummaryTitleText: styled.span<{ fontSize?: string }>`
    font-weight: 400;
    color: ${colorPallate.blackLight100};
    font-size: ${({ fontSize }) => fontSize ?? "12px"}; /* Smaller for subtitles */
    margin-left: 5px; /* Add spacing between numbers and subtitles */
  `,
  WrapperSummaryDescription: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  `,
  WrapperCardVesselMovement: styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5rem;
    width: 100%;
  `,
};

export const style = {
  ColumnStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default Create;
