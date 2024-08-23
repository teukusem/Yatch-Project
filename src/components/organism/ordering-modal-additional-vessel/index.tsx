import React, { useEffect, useState } from "react";
import ModalPopup from "@/components/atoms/modal";
import { Button, Form, Select } from "antd";
import { style } from "./style";
import FormItemCustom from "@/components/atoms/form-item";
import InputCustom from "@/components/atoms/input";
import SelectCustom from "@/components/atoms/select";
import { dummyOptions } from "@/utils/getSelectOptions";
import Image from "next/image";

interface ModalAdditionalVessel {
  isModalAdditional: boolean;
  changeModalPermission: () => void;
  vesselName: string;
}

const { Option } = Select;

function ModalAdditionalVessel({
  isModalAdditional,
  changeModalPermission,
  vesselName,
}: ModalAdditionalVessel) {
  const [form] = Form.useForm();
  const [countries, setCountries] = useState<any[]>([]);

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

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
      const data = await response.json();
      setCountries(data);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  console.log(vesselName);
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
            <InputCustom defaultValue={vesselName} placeholder="Vessel Name" />
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

        <FormItemCustom label="" style={style.formItemParent}>
          <FormItemCustom
            label="Call Sign"
            name="call_sign"
            style={style.formItemLeftSide}
          >
            <InputCustom placeholder="Call Sign" />
          </FormItemCustom>
          <FormItemCustom
            label="National"
            name="national"
            style={style.formItemRightSide}
          >
            <SelectCustom
              showSearch
              placeholder="National"
              filterOption={(input, option) =>
                String(option?.value ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              allowClear
            >
              {countries.map((country, index) => (
                <Option key={index} value={country.name.common}>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 16 }}
                  >
                    <Image
                      width={16}
                      height={16}
                      style={{ borderRadius: "50%" }}
                      src={country.flags.svg}
                      alt={country.name.common}
                    />
                    {country.name.common}
                  </div>
                </Option>
              ))}
            </SelectCustom>
          </FormItemCustom>
        </FormItemCustom>
      </Form>
    </ModalPopup>
  );
}

export default ModalAdditionalVessel;
