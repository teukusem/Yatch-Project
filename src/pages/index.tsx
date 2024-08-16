import { Button, Col, Row } from "antd";
import { Head } from "@/components";
import styles from "@/styles/Dashboard.module.css";
import Content from "@/layouts/Content";
import DashboardCardGroup from "@/components/organism/dashboard-card-group";
import DashboardOrderGroup from "@/components/organism/dashboard-order-group";

export default function Home() {
  return (
    <>
      <Head title="Dashboard" />
      <Content>
        <div className="grid-container">
          <p className={styles.headertitle}>PHINNISI</p>
          <DashboardCardGroup />
          <DashboardOrderGroup />
        </div>
      </Content>
    </>
  );
}
