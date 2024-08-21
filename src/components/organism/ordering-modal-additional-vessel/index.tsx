import React from "react";
import ModalPopup from "@/components/atoms/modal";
import { Button } from "antd";

interface ModalAdditionalVessel {
  isModalAdditional: boolean;
  changeModalPermission: () => void;
}

function ModalAdditionalVessel({
  isModalAdditional,
  changeModalPermission,
}: ModalAdditionalVessel) {
  const handleCancel = () => {
    changeModalPermission();
  };

  const handleOk = async () => {
    try {
      await alert("Thanksis");
    } catch (error) {
      console.error(error);
    } finally {
      changeModalPermission();
    }
  };
  return (
    <ModalPopup
      title="Add New Vessel"
      open={isModalAdditional}
      onCancel={handleCancel}
      footer={[
        <Button
          key="submit"
          type="primary"
          //   loading={loading}
          onClick={handleOk}
        >
          Save
        </Button>,
      ]}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </ModalPopup>
  );
}

export default ModalAdditionalVessel;
