import { Avatar, Badge, Drawer, Layout, Select } from "antd";
import { useState } from "react";
import Create, { styles } from "./styles";
import Logo from "../Logo";
import { UserOutlined } from "@ant-design/icons";
import notification from "@/assets/images/icon/notification.svg";
import Image from "next/image";
import { getSelectOptionsLanguange } from "@/utils/getSelectOptions";
import { useRouter } from "next/router";
import { Url } from "next/dist/shared/lib/router/router";

const { Header } = Layout;

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelectOptionsLanguange = (value: string) => {
    console.log(value);
  };

  const handleCloseSidebar = () => setOpenMenu(false);

  return (
    <>
      <div className="menuIcon">
        <Create.WrapperResponsiveIcon>
          <Create.NavigationIcon onClick={() => setOpenMenu(true)} />
        </Create.WrapperResponsiveIcon>

        <Create.ContainerActionNavbar>
          <Select
            defaultValue="eng"
            style={{
              width: 80,
            }}
            onChange={handleSelectOptionsLanguange}
            options={getSelectOptionsLanguange}
          />
          <Badge count={5}>
            <Image src={notification} width={20} height={21} alt="Notification Logo" />
          </Badge>
          <Create.BorderRight />
          <Avatar size="large" icon={<UserOutlined />} />
        </Create.ContainerActionNavbar>
      </div>

      <Layout className="headerMenu">
        <Header style={styles.headerStyles}>
          <Logo />
          <AppMenu />
          <Create.ContainerActionNavbar>
            <Select
              defaultValue="eng"
              style={{
                width: 110,
              }}
              onChange={handleSelectOptionsLanguange}
              options={getSelectOptionsLanguange}
            />
            <Badge count={5}>
              <Image src={notification} width={20} height={21} alt="Notification Logo" />
            </Badge>
            <Create.BorderRight />
            <Avatar size="large" icon={<UserOutlined />} />
          </Create.ContainerActionNavbar>
        </Header>
      </Layout>

      <Drawer
        placement="left"
        open={openMenu}
        onClose={handleCloseSidebar}
        closable={false}
        styles={{
          body: { ...styles.drawerBodyStyles },
        }}
        width={250}
      >
        <Create.HeaderSidebarResponsive>
          <Logo />
        </Create.HeaderSidebarResponsive>
        <AppMenu isInline handleCloseSidebar={handleCloseSidebar} />
      </Drawer>
    </>
  );
}

interface AppMenuProps {
  isInline?: boolean;
  handleCloseSidebar?: () => void | undefined;
}

const AppMenu = ({ isInline, handleCloseSidebar }: AppMenuProps) => {
  const router = useRouter();

  const handleChangeRoutePath = ({ key }: { key: string }) => {
    router.push(key);
    if (isInline && handleCloseSidebar) {
      handleCloseSidebar();
    }
  };
  const items = [
    {
      label: "Home",
      key: "/dashboard",
    },
    {
      label: "Ordering",
      key: "/ordering",
    },
    {
      label: "History Order",
      key: "/history-order",
    },
    {
      label: "Billing",
      key: "/billing",
    },
  ];
  return (
    <Create.NavigationMenu onSelect={handleChangeRoutePath} items={items} mode={isInline ? "inline" : "horizontal"} />
  );
};

export default NavigationBar;
