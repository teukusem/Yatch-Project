import React from "react";
import { Head } from "@/components";
import Content from "@/layouts/Content";
import ButtonPreviousPath from "@/components/atoms/button/button-previous-path";
import OrderingGroup from "@/components/organism/ordering-form-group";

function Ordering() {
  return (
    <>
      <Head title="Ordering" />
      <Content>
        <div className="grid-container">
          <div>
            <ButtonPreviousPath label="Ordering" />
          </div>

          <OrderingGroup />
        </div>
      </Content>
    </>
  );
}

export default Ordering;
