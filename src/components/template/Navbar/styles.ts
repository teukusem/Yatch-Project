import colorPallate from "@/utils/color";
import { MenuOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import styled from "styled-components";

const Create = {
  NavigationIcon: styled(MenuOutlined)`
    font-size: 30px;
  `,

  NavigationMenu: styled(Menu)`
    background: ${colorPallate.primaryDarkBlue};
    border: none;
    width: 100%;
    justify-content: center;

    .ant-menu-overflow-item > .ant-menu-item .ant-menu-item-only-child {
      color: #fff !important;
    }

    .ant-menu-submenu-title,
    .ant-menu-overflow-item-rest,
    .ant-menu-item {
      color: #fff !important;
      align-content: center;
    }

    &.ant-menu-inline {
      .ant-menu-submenu-selected,
      .ant-menu-item-selected {
        color: #000 !important;
      }
    }

    .ant-menu-item:hover::after,
    .ant-menu-item::after {
      border-bottom: none !important;
    }
  `,
  BorderRight: styled.div`
    height: 24px;
    width: 1px;
    background-color: white;
    margin-left: 20px;
    margin-right: 20px;
  `,
  ContainerActionNavbar: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  `,
  WrapperResponsiveIcon: styled.div`
    display: flex;
    gap: 1rem;
  `,
  HeaderSidebarResponsive: styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
  `,
};

export const styles = {
  drawerBodyStyles: {
    background: colorPallate.primaryDarkBlue,
  },
  headerStyles: {
    display: "flex",
    alignItems: "center",
    height: 72,
    justifyContent: "space-between",
    background: colorPallate.primaryDarkBlue,
  },
};

export default Create;
