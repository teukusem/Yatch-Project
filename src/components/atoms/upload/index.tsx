import React, { useState } from "react";
import { Upload, Typography, message } from "antd";
import styled from "styled-components";

const { Text } = Typography;

const UploadContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  padding: 8px;
  max-width: 400px;
  height: 56px;
  justify-content: space-between;
`;

const UploadText = styled(Text)`
  color: #c7c7c7;
  font-size: 14px;
  flex-grow: 1;
  text-align: left;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CustomUploadButton = styled.label`
  color: #1890ff;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    color: #40a9ff;
    text-decoration: underline;
  }
`;

interface FileUploadComponentProps {
  title: string;
}
const FileUploadComponent = ({ title }: FileUploadComponentProps) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleUploadChange = (info: any) => {
    if (info.file.status === "done") {
      setFileName(info.file.name);
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <>
      <UploadContainer>
        <Upload
          id="hidden-upload-input"
          name="file"
          showUploadList={false}
          onChange={handleUploadChange}
          beforeUpload={(file) => {
            const isPDFOrXLSX =
              file.type === "application/pdf" ||
              file.type ===
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
            if (!isPDFOrXLSX) {
              message.error("You can only upload PDF or XLSX files!");
              return Upload.LIST_IGNORE;
            }
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isLt2M) {
              message.error("File must be smaller than 2MB!");
              return Upload.LIST_IGNORE;
            }
            return true;
          }}
          style={{ display: "none" }}
        >
          <span></span>
        </Upload>
        <UploadText>{fileName ? fileName : title}</UploadText>
        <CustomUploadButton htmlFor="hidden-upload-input">
          Upload
        </CustomUploadButton>
      </UploadContainer>
      <Text
        type="secondary"
        style={{ fontWeight: 500, fontSize: 10, color: "#797A7C" }}
      >
        Format: xlsx, pdf (max 2Mb)
      </Text>
    </>
  );
};

export default FileUploadComponent;
