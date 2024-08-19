import colorPallate from "@/utils/color";
import { Button } from "antd";
import styled from "styled-components";

const Create = {
  DashboardCard: styled.div`
    height: 278px;
    width: 230px;
    background-color: ${colorPallate.white};
    border-radius: 16px;
    padding: 24px;
    border: 1px solid ${colorPallate.greyLight};
    text-align: center;
    display: grid;
    justify-items: center;
    box-shadow: 8px 5px 5px ${colorPallate.grey};

    @media (max-width: 700px) {
      height: 300px;
      width: 250px;
    }
  `,
  HeaderTextCard: styled.p`
    font-size: 18px;
    font-weight: 600;
  `,
  SubTextCard: styled.span`
    font-size: 12px;
    color: ${colorPallate.grey};
  `,
  WrapperNavigationContainer: styled.div`
    gap: 16px;
    display: grid;
  `,
  ButtonStyleNavigation: styled(Button)`
    font-size: 14px;
    font-weight: 500;
    line-height: 21;
    height: 45px;
    background: ${colorPallate.navalNight};
  `,
};

export const style = {
  ColumnStyle: {
    display: "flex",
    justifyContent: "center",
  },
};

export default Create;
