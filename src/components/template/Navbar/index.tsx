import { Avatar, Drawer, Layout, Select } from "antd";
import { useState } from "react";
import Create, { styles } from "./styles";
import Logo from "../Logo";
import colorPallate from "@/utils/color";
import { UserOutlined } from "@ant-design/icons";
import notification from "@/assets/images/icon/notification.svg";
import Image from "next/image";

const { Header, Content, Footer } = Layout;

function NavigationBar() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <div className="menuIcon">
        <Create.NavigationIcon onClick={() => setOpenMenu(true)} />
      </div>
      <Layout className="headerMenu">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            height: 72,
            justifyContent: "space-between",
            background: colorPallate.primaryDarkBlue,
          }}
        >
          <Logo />
          <AppMenu />
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", alignItems: "center" }}>
            <Select
              defaultValue="eng"
              style={{
                width: 110,
              }}
              onChange={(value) => console.log(value)}
              options={[
                {
                  value: "eng",
                  label: "English",
                },
                {
                  value: "ina",
                  label: "Indonesia",
                },
              ]}
            />
            <Image src={notification} width={20} height={21} alt="Notification Logo" />
            <Create.BorderRight />
            <Avatar size="large" icon={<UserOutlined />} />
          </div>
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
      >
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
