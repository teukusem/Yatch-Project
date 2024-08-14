import React, { ReactNode } from "react";
import styled from "styled-components";

interface ContentProps {
  children: ReactNode;
}

function Content({ children }: ContentProps) {
  return <Create.WrapperSection>{children}</Create.WrapperSection>;
}

const Create = {
  WrapperSection: styled.section`
    padding: 72px 102px;
  `,
};

export default Content;