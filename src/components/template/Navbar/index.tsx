import { Avatar, Badge, Drawer, Layout, Select } from "antd";
import { useState } from "react";
import Create, { styles } from "./styles";
import Logo from "../Logo";
import { UserOutlined } from "@ant-design/icons";
import notification from "@/assets/images/icon/notification.svg";
import Image from "next/image";
import { getSelectOptionsLanguange } from "@/utils/getSelectOptions";

const { Header } = Layout;

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleSelectOptionsLanguange = (value: string) => {
    console.log(value);
  };

  return (
    <>
      <div className="menuIcon">
        <Create.WrapperResponsiveIcon>
          <Logo width={60} height={50} />
          <Create.NavigationIcon onClick={() => setOpenMenu(true)} />
        </Create.WrapperResponsiveIcon>

        <Create.ContainerActionNavbar>
          <Select
            defaultValue="eng"
            style={{
              width: 100,
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
        onClose={() => setOpenMenu(false)}
        closable={false}
        styles={{
          body: { ...styles.drawerBodyStyles },
        }}
        width={250}
      >
        <Create.HeaderSidebarResponsive>
          <Logo />
        </Create.HeaderSidebarResponsive>
        <AppMenu isInline />
      </Drawer>
    </>
  );
}

interface AppMenuProps {
  isInline?: boolean;
}

const AppMenu = ({ isInline }: AppMenuProps) => {
  const items = [
    {
      label: "Home",
      key: "mail1",
    },
    {
      label: "Ordering",
      key: "mail2",
    },
    {
      label: "History Order",
      key: "mail3",
    },
    {
      label: "Billing",
      key: "mail4",
    },
  ];
  return <Create.NavigationMenu items={items} mode={isInline ? "inline" : "horizontal"} />;
};

export default NavigationBar;
