import colorPallate from "@/utils/color";
import { DatePicker, Form, Input, Select } from "antd";
import styled from "styled-components";

const Create = {
  InputCustom: styled(Input)`
    height: 56px;
    .ant-input {
      height: 56px;
    }
  `,
  DatePickerCustom: styled(DatePicker)`
    .ant-picker-input > input {
      height: 56px;
    }
    .ant-picker {
      height: 56px;
      padding: 10px 15px;
      font-size: 16px;
    }
  `,
  FormItemCustom: styled(Form.Item)`
    .ant-form-item-label > label {
      font-size: 12px;
      font-weight: 500;
    }
  `,
  SelectCustom: styled(Select)`
    height: 56px;
  `,
};

export default Create;
