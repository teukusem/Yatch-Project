import React, { useState } from "react";
import Create, { style } from "./style";
import { RiAddLine } from "@remixicon/react";
import ModalAdditionalVessel from "../ordering-modal-additional-vessel";

function FormOrdering() {
  const [searchValueVessel, setSearchValueVessel] = useState<string | null>(
    null
  );
  const [isModalAdditionalVessel, setIsModalAdditionalVessel] =
    useState<boolean>(true);

  const handleChangeModalPermission = () =>
    setIsModalAdditionalVessel((prev) => !prev);

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
          onSearch={(value) => setSearchValueVessel(value)}
          notFoundContent={
            <Create.WrapperNotFoundContent
              onClick={handleChangeModalPermission}
            >
              <RiAddLine size={24} />
              <div>
                Add New Vessel
                <Create.VesselNameValue>
                  {searchValueVessel}
                </Create.VesselNameValue>
              </div>
            </Create.WrapperNotFoundContent>
          }
        />
      </Create.FormItemCustom>

      <Create.FormItemCustom label="Loa" style={style.formItemParent}>
        <Create.FormItemCustom name="loa_meter" style={style.formItemLeftSide}>
          <Create.InputCustom
            placeholder="Loa (Meter)"
            disabled
            addonAfter="M"
          />
        </Create.FormItemCustom>
        <Create.FormItemCustom name="loa_feet" style={style.formItemRightSide}>
          <Create.InputCustom
            placeholder="Loa (Feet)"
            disabled
            addonAfter="Feet"
          />
        </Create.FormItemCustom>
      </Create.FormItemCustom>

      <Create.FormItemCustom label="" style={style.formItemParent}>
        <Create.FormItemCustom
          label="GT"
          name="gt_ton"
          style={style.formItemLeftSide}
        >
          <Create.InputCustom placeholder="GT" disabled addonAfter="M" />
        </Create.FormItemCustom>
        <Create.FormItemCustom
          label="Yacht Type"
          name="yacht_type"
          style={style.formItemRightSide}
        >
          <Create.SelectCustom
            showSearch
            placeholder="Yacht Type"
            disabled
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

      <Create.FormItemCustom label="" style={style.formItemParent}>
        <Create.FormItemCustom
          name="start_berthing"
          label="Start Berthing"
          style={style.formItemLeftSide}
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
          style={style.formItemRightSide}
        >
          <Create.DatePickerCustom
            style={{
              width: "100%",
            }}
          />
        </Create.FormItemCustom>
      </Create.FormItemCustom>

      <Create.FormItemCustom label="" style={style.formItemParent}>
        <Create.FormItemCustom
          label="Last Port"
          name="last_port"
          style={style.formItemLeftSide}
        >
          <Create.SelectCustom
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
          style={style.formItemRightSide}
        >
          <Create.SelectCustom
            showSearch
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

      <Create.FormItemCustom label="" style={style.formItemParent}>
        <Create.FormItemCustom
          label="Draft (Fore)"
          name="draft_fore"
          style={style.formItemLeftSide}
        >
          <Create.InputCustom placeholder="Draft (Fore)" />
        </Create.FormItemCustom>
        <Create.FormItemCustom
          label="Draft (Aft)"
          name="draft_aft"
          style={style.formItemRightSide}
        >
          <Create.InputCustom placeholder="Draft (Aft)" />
        </Create.FormItemCustom>
      </Create.FormItemCustom>

      <ModalAdditionalVessel
        isModalAdditional={isModalAdditionalVessel}
        changeModalPermission={handleChangeModalPermission}
        key={"modal-additional-vessel"}
      />
    </>
  );
}

export default FormOrdering;
