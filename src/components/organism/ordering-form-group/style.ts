import colorPallate from "@/utils/color";
import styled from "styled-components";

const Create = {
  FormCardContainer: styled.div`
    background-color: ${colorPallate.white};
    border: 1px solid ${colorPallate.greyLight};
    height: fit-content;
    border-radius: 12px;
    padding: 24px;
  `,
};

export default Create;
