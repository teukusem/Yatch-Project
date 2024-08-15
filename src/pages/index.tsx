import { Button, Col, Row } from "antd";
import { Head } from "@/components";
import styles from "@/styles/Dashboard.module.css";
import Content from "@/layouts/Content";
import DashboardCardGroup from "@/components/organism/dashboard-card-group";

export default function Home() {
  return (
    <>
      <Head title="Dashboard" />
      <Content>
        <p className={styles.headertitle}>PHINNISI</p>
        <DashboardCardGroup />
      </Content>
    </>
  );
}
