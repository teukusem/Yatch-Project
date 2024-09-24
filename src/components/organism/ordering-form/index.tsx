import React, { useRef, useState } from "react";
import Create, { style } from "./style";
import { RiAddLine } from "@remixicon/react";
import ModalAdditionalVessel from "../ordering-modal-additional-vessel";
import FormItemCustom from "@/components/atoms/form-item";
import InputCustom from "@/components/atoms/input";
import SelectCustom from "@/components/atoms/select";
import { dummyOptions } from "@/utils/getSelectOptions";

function FormOrdering() {
  const [searchValueVessel, setSearchValueVessel] = useState<string>("");
  const [temporaryDataVessel, setTemporaryDataVessel] = useState<string>("");
  const [isModalAdditionalVessel, setIsModalAdditionalVessel] =
    useState<boolean>(false);

  const handleChangeModalPermission = () => {
    setIsModalAdditionalVessel((prev) => !prev);
  };

  const handleSearchValue = (value: string) => {
    if (Boolean(value)) {
      setTemporaryDataVessel(value);
    }
    setSearchValueVessel(value);
  };

  return (
    <>
      <FormItemCustom label="Vessel Name" name="vessel_name">
        <SelectCustom
          showSearch
          placeholder="Vessel Name"
          filterOption={(input: string, option) =>
            String(option?.label ?? "")
              .toLowerCase()
              .includes(input.toLowerCase())
          }
          options={dummyOptions}
          onSearch={(value: string) => handleSearchValue(value)}
          searchValue={searchValueVessel}
          autoClearSearchValue={false}
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
      </FormItemCustom>

      <FormItemCustom label="Loa" style={style.formItemParent}>
        <FormItemCustom name="loa_meter" style={style.formItemLeftSide}>
          <InputCustom placeholder="Loa (Meter)" disabled addonAfter="M" />
        </FormItemCustom>
        <FormItemCustom name="loa_feet" style={style.formItemRightSide}>
          <InputCustom placeholder="Loa (Feet)" disabled addonAfter="Feet" />
        </FormItemCustom>
      </FormItemCustom>

      <FormItemCustom label="" style={style.formItemParent}>
        <FormItemCustom label="GT" name="gt_ton" style={style.formItemLeftSide}>
          <InputCustom placeholder="GT" disabled addonAfter="M" />
        </FormItemCustom>
        <FormItemCustom
          label="Yacht Type"
          name="yacht_type"
          style={style.formItemRightSide}
        >
          <SelectCustom
            showSearch
            placeholder="Yacht Type"
            disabled
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
          name="start_berthing"
          label="Start Berthing"
          style={style.formItemLeftSide}
        >
          <Create.DatePickerCustom
            style={{
              width: "100%",
              borderRadius: 10,
            }}
          />
        </FormItemCustom>

        <FormItemCustom
          name="end_berthing"
          label="End Berthing"
          style={style.formItemRightSide}
        >
          <Create.DatePickerCustom
            style={{
              width: "100%",
              borderRadius: 10,
            }}
          />
        </FormItemCustom>
      </FormItemCustom>

      <FormItemCustom label="" style={style.formItemParent}>
        <FormItemCustom
          label="Last Port"
          name="last_port"
          style={style.formItemLeftSide}
        >
          <SelectCustom
            showSearch
            placeholder="Last Port"
            filterOption={(input, option) =>
              String(option?.label ?? "")
                .toLowerCase()
                .includes(input.toLowerCase())
            }
            options={dummyOptions}
          />
        </FormItemCustom>
        <FormItemCustom
          label="Next Port"
          name="next_port"
          style={style.formItemRightSide}
        >
          <SelectCustom
            showSearch
            placeholder="Next Port"
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
          label="Draft (Fore)"
          name="draft_fore"
          style={style.formItemLeftSide}
        >
          <InputCustom placeholder="Draft (Fore)" />
        </FormItemCustom>
        <FormItemCustom
          label="Draft (Aft)"
          name="draft_aft"
          style={style.formItemRightSide}
        >
          <InputCustom placeholder="Draft (Aft)" />
        </FormItemCustom>
      </FormItemCustom>

      <ModalAdditionalVessel
        isModalAdditional={isModalAdditionalVessel}
        changeModalPermission={() => {
          handleChangeModalPermission();
          setTemporaryDataVessel("");
        }}
        vesselName={temporaryDataVessel}
        key={"modal-additional-vessel"}
      />
    </>
  );
}

export default FormOrdering;
