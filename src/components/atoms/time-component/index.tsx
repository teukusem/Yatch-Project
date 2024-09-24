import styled from "styled-components";
import { Row, Col } from "antd";
import colorPallate from "@/utils/color"; // Assuming you have a color palette utility
import { CalendarOutlined } from "@ant-design/icons";

const Create = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px; /* Optional: Add padding to the container */
  `,
  TimeBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
  `,
  TimeLabel: styled.div`
    font-size: 12px;
    color: ${colorPallate.grey};
    margin-top: 5px;
    font-weight: 500;
  `,
  Duration: styled.div`
    font-size: 12px;
    color: ${colorPallate.grey};
    font-weight: 600;
    text-align: center; /* Ensure the duration is centered */
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px; /* Add space between the icon and text */
    font-size: 20px; /* Adjust icon size if needed */
  `,
  Divider: styled.div`
    border-top: 1px solid ${colorPallate.greyLight};
    margin: 0 20px;
    width: 100%;
  `,
};

const TimeComponent = () => {
  return (
    <Create.Container>
      <Row gutter={16}> {/* Adding gutter to add spacing between columns */}
        {/* Start Berthing */}
        <Col span={9}>
          <Create.TimeBox>
            <div>
              <div>27 Mar 2024 18:00</div> {/* The date and time */}
              <Create.TimeLabel>Start Berthing</Create.TimeLabel> {/* The label */}
            </div>
            <Create.IconWrapper>
              <CalendarOutlined /> {/* Ant Design Calendar Icon */}
            </Create.IconWrapper>
          </Create.TimeBox>
        </Col>

        {/* Duration */}
        <Col span={6}>
          <Create.Duration>Duration: 6h 12m</Create.Duration>
        </Col>

        {/* End Berthing */}
        <Col span={9}>
          <Create.TimeBox>
            <Create.IconWrapper>
              <CalendarOutlined /> {/* Ant Design Calendar Icon */}
            </Create.IconWrapper>
            <div>
              <div>27 Mar 2024 24:12</div> {/* The date and time */}
              <Create.TimeLabel>End Berthing</Create.TimeLabel> {/* The label */}
            </div>
          </Create.TimeBox>
        </Col>
      </Row>
    </Create.Container>
  );
};

export default TimeComponent;
