import React from "react";
import Create from "./style";

function FormOrdering() {
  return (
    <>
      <Create.FormItemCustom label="Vessel Name" name="vessel_name">
        <Create.SelectCustom
          showSearch
          placeholder="Vessel Name"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
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
          <Create.InputCustom
            placeholder="Loa (Meter)"
            disabled
            addonAfter="M"
          />
        </Create.FormItemCustom>
        <Create.FormItemCustom
          name="loa_feet"
          style={{
            display: "inline-block",
            width: "calc(50% - 8px)",
            margin: "0 8px",
          }}
        >
          <Create.InputCustom
            placeholder="Loa (Feet)"
            disabled
            addonAfter="Feet"
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
          <Create.SelectCustom
            showSearch
            placeholder="Yacht Type"
            disabled
            style={{ height: 56 }}
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
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
          <Create.SelectCustom
            style={{ height: 56 }}
            showSearch
            placeholder="Last Port"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
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
          <Create.SelectCustom
            showSearch
            style={{ height: 56 }}
            placeholder="Next Port"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
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
    </>
  );
}

export default FormOrdering;
