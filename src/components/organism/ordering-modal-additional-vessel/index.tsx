import React from "react";
import ModalPopup from "@/components/atoms/modal";
import { Button, Form } from "antd";
import { style } from "./style";
import FormItemCustom from "@/components/atoms/form-item";
import InputCustom from "@/components/atoms/input";
import SelectCustom from "@/components/atoms/select";
import { dummyOptions } from "@/utils/getSelectOptions";

interface ModalAdditionalVessel {
  isModalAdditional: boolean;
  changeModalPermission: () => void;
}

function ModalAdditionalVessel({
  isModalAdditional,
  changeModalPermission,
}: ModalAdditionalVessel) {
  const [form] = Form.useForm();

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
      width={660}
      footer={[
        <Button key="submit" type="primary" onClick={handleOk}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <FormItemCustom label="" style={style.formItemParent}>
          <FormItemCustom
            label="Vessel Name"
            name="vessel_name"
            style={style.formItemLeftSide}
          >
            <InputCustom placeholder="Vessel Name" />
          </FormItemCustom>
          <FormItemCustom
            label="Yacht Type"
            name="yacht_type"
            style={style.formItemRightSide}
          >
            <SelectCustom
              showSearch
              placeholder="Yacht Type"
              filterOption={(input, option) =>
                String(option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={dummyOptions}
            />
          </FormItemCustom>
        </FormItemCustom>
      </Form>
    </ModalPopup>
  );
}

export default ModalAdditionalVessel;
