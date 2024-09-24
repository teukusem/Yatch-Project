import React, { useEffect, useState } from "react";
import ModalPopup from "@/components/atoms/modal";
import { Button, Form, Select } from "antd";
import Create, { style } from "./style";
import FormItemCustom from "@/components/atoms/form-item";
import InputCustom from "@/components/atoms/input";
import SelectCustom from "@/components/atoms/select";
import { dummyOptions } from "@/utils/getSelectOptions";
import Image from "next/image";
import FileUploadComponent from "@/components/atoms/upload";

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

  // useEffect(() => {
  //   fetchCountries();
  // }, []);

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
      <Form
        form={form}
        layout="vertical"
        initialValues={{ vessel_name: vesselName }}
      >
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

        <FormItemCustom style={style.formItemParent}>
          <Create.StyledFormItemLeftSide>
            <FormItemCustom
              label="Loa"
              name="loa_meter"
              style={style.formItemLeftSide}
            >
              <InputCustom placeholder="Loa (Meter)" addonAfter="M" />
            </FormItemCustom>
            <FormItemCustom
              label=" "
              name="width_meter"
              style={style.formItemRightSide}
            >
              <InputCustom
                disabled
                placeholder="Loa (Feet)"
                addonAfter="Feet"
              />
            </FormItemCustom>
          </Create.StyledFormItemLeftSide>

          <Create.StyledFormItemRightSide>
            <FormItemCustom
              label="GT"
              name="gt_ton"
              style={style.formItemLeftSide}
            >
              <InputCustom placeholder="GT (Meter)" addonAfter="Ton" />
            </FormItemCustom>
            <FormItemCustom
              label="Width"
              name="width_meter"
              style={style.formItemRightSide}
            >
              <InputCustom placeholder="Width (Feet)" addonAfter="M" />
            </FormItemCustom>
          </Create.StyledFormItemRightSide>
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

        <FormItemCustom label="" style={style.formItemParent}>
          <FormItemCustom
            rules={[
              {
                required: true,
              },
            ]}
            label="Upload VD"
            name="upload_vd"
            style={style.formItemLeftSide}
          >
            <FileUploadComponent title="Upload VD" />
          </FormItemCustom>

          <FormItemCustom
            rules={[
              {
                required: true,
              },
            ]}
            label="Upload Ship Particular"
            name="upload_ship_particular"
            style={style.formItemRightSide}
          >
            <FileUploadComponent title="Upload Ship Particular" />
          </FormItemCustom>
        </FormItemCustom>
      </Form>
    </ModalPopup>
  );
}

export default ModalAdditionalVessel;
