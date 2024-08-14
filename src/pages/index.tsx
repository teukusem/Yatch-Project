import { Button } from "antd";
import { Head } from "@/components";
import styles from "@/styles/Dashboard.module.css";
import Content from "@/layouts/Content";

export default function Home() {
  return (
    <>
      <Head title="Dashboard" />
      <Content>
        <p className={styles.headertitle}>PHINNISI</p>
      </Content>
    </>
  );
}
