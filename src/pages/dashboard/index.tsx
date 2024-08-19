import { Head } from "@/components";
import styles from "@/styles/Dashboard.module.css";
import Content from "@/layouts/Content";
import DashboardCardGroup from "@/components/organism/dashboard-card-group";
import DashboardOrderGroup from "@/components/organism/dashboard-order-group";
import DashboardSummaryGroup from "@/components/organism/dashboard-summary-group";

export default function Dashboard() {
  return (
    <>
      <Head title="Dashboard" />
      <Content>
        <div className="grid-container">
          <p className={styles.headertitle}>PHINNISI</p>
          <DashboardCardGroup />
          <DashboardOrderGroup />
          <div>
            <p className={styles.subheader}>Dashboard</p>
            <p className={styles.subchildtext}>You can view summary reports in the dashboard</p>
          </div>

          <DashboardSummaryGroup />
        </div>
      </Content>
    </>
  );
}
