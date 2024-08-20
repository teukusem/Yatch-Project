import React from "react";
import { Button, DatePicker, Form, Select } from "antd";
import Create from "./style";

type OrderingFormFieldType = {
  vessel_name?: string;
  loa_meter?: string;
  loa_feet?: string;
  gt_ton?: string;
  yacht_type?: string;
  start_berthing: Date;
  end_berthing: Date;
  last_port: string;
  next_port: string;
  draft_fore: string;
  draft_aft: string;
};
function FormOrdering() {
  const [form] = Form.useForm();

  const onFinish = (values: OrderingFormFieldType) => {
    console.log("Success:", values);
  };
  return (
    <>
      <Form form={form} onFinish={onFinish} layout="vertical">
        <Create.FormItemCustom label="Vessel Name" name="vessel_name">
          <Select
            style={{ height: 56 }}
            showSearch
            placeholder="Vessel Name"
            filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
            options={[
              {
                value: "1",
                label: "Jack",
              },
              {
                value: "2",
                label: "Lucy",
              },
              {
                value: "3",
                label: "Tom",
              },
            ]}
          />
        </Create.FormItemCustom>

        <Create.FormItemCustom
          label="Loa"
          style={{
            marginBottom: 0,
          }}
        >
          <Create.FormItemCustom
            name="loa_meter"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Create.InputCustom placeholder="Loa (Meter)" disabled addonAfter="M" />
          </Create.FormItemCustom>
          <Create.FormItemCustom
            name="loa_feet"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Create.InputCustom placeholder="Loa (Feet)" disabled addonAfter="Feet" />
          </Create.FormItemCustom>
        </Create.FormItemCustom>

        <Create.FormItemCustom
          label=""
          style={{
            marginBottom: 0,
          }}
        >
          <Create.FormItemCustom
            label="GT"
            name="gt_ton"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Create.InputCustom placeholder="GT" disabled addonAfter="M" />
          </Create.FormItemCustom>
          <Create.FormItemCustom
            label="Yacht Type"
            name="yacht_type"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Select
              showSearch
              placeholder="Yacht Type"
              disabled
              style={{ height: 56 }}
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
              options={[
                {
                  value: "1",
                  label: "Jack",
                },
                {
                  value: "2",
                  label: "Lucy",
                },
                {
                  value: "3",
                  label: "Tom",
                },
              ]}
            />
          </Create.FormItemCustom>
        </Create.FormItemCustom>

        <Create.FormItemCustom
          label=""
          style={{
            marginBottom: 0,
          }}
        >
          <Create.FormItemCustom
            name="start_berthing"
            label="Start Berthing"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Create.DatePickerCustom
              style={{
                width: "100%",
              }}
            />
          </Create.FormItemCustom>

          <Create.FormItemCustom
            name="end_berthing"
            label="End Berthing"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Create.DatePickerCustom
              style={{
                width: "100%",
              }}
            />
          </Create.FormItemCustom>
        </Create.FormItemCustom>

        <Create.FormItemCustom
          label=""
          style={{
            marginBottom: 0,
          }}
        >
          <Create.FormItemCustom
            label="Last Port"
            name="last_port"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Select
              style={{ height: 56 }}
              showSearch
              placeholder="Last Port"
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
              options={[
                {
                  value: "1",
                  label: "Jack",
                },
                {
                  value: "2",
                  label: "Lucy",
                },
                {
                  value: "3",
                  label: "Tom",
                },
              ]}
            />
          </Create.FormItemCustom>
          <Create.FormItemCustom
            label="Next Port"
            name="next_port"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Select
              showSearch
              style={{ height: 56 }}
              placeholder="Next Port"
              filterOption={(input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase())}
              options={[
                {
                  value: "1",
                  label: "Jack",
                },
                {
                  value: "2",
                  label: "Lucy",
                },
                {
                  value: "3",
                  label: "Tom",
                },
              ]}
            />
          </Create.FormItemCustom>
        </Create.FormItemCustom>

        <Create.FormItemCustom
          label=""
          style={{
            marginBottom: 0,
          }}
        >
          <Create.FormItemCustom
            label="Draft (Fore)"
            name="draft_fore"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
            }}
          >
            <Create.InputCustom placeholder="Draft (Fore)" />
          </Create.FormItemCustom>
          <Create.FormItemCustom
            label="Draft (Aft)"
            name="draft_aft"
            style={{
              display: "inline-block",
              width: "calc(50% - 8px)",
              margin: "0 8px",
            }}
          >
            <Create.InputCustom placeholder="Draft (Aft)" />
          </Create.FormItemCustom>
        </Create.FormItemCustom>

        <Create.FormItemCustom>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Create.FormItemCustom>
      </Form>
    </>
  );
}

export default FormOrdering;
