import colorPallate from "@/utils/color";
import React from "react";

function DashboardOrderGroup() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, fontWeight: 500 }}>
        <p>Order</p>
        <p style={{ fontSize: 18, color: colorPallate.primaryBlue }}>See all</p>
      </div>
    </>
  );
}

export default DashboardOrderGroup;
