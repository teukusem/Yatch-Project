import styled from "styled-components";
import { Row, Col } from "antd";
import colorPallate from "@/utils/color"; // Assuming you have a color palette utility
import { CalendarOutlined } from "@ant-design/icons";

const Create = {
  Container: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,
  TimeBox: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    gap: 1rem;
  `,
  TimeLabel: styled.div`
    font-size: 12px;
    color: ${colorPallate.grey};
    margin-top: 5px;
    font-weight: 500;
  `,
  TimeWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    white-space: nowrap; /* Prevent line breaks */
  `,
  Duration: styled.div`
    font-size: 12px;
    color: ${colorPallate.grey};
    font-weight: 600;
    text-align: center;
  `,
  DurationWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  `,
  DashedLine: styled.div`
    position: relative;
    width: 100%;
    margin-top: 5px;
    border-top: 1px dashed ${colorPallate.grey};
    display: flex;
    justify-content: center;
    align-items: center;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: -4px;
      width: 8px;
      height: 8px;
      background-color: ${colorPallate.grey};
      border-radius: 50%;
    }

    &:before {
      left: 0;
    }

    &:after {
      right: 0;
    }
  `,
  IconWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    font-size: 20px;
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
      <Row gutter={16}>
        {/* Start Berthing */}
        <Col span={9}>
          <Create.TimeBox>
            <Create.TimeWrapper>
              <div>27 Mar 2024 18:00</div> {/* Prevent line break */}
              <Create.TimeLabel>Start Berthing</Create.TimeLabel>
            </Create.TimeWrapper>
            <Create.IconWrapper>
              <CalendarOutlined />
            </Create.IconWrapper>
          </Create.TimeBox>
        </Col>

        {/* Duration */}
        <Col span={6}>
          <Create.DurationWrapper>
            <Create.Duration>Duration: 6h 12m</Create.Duration>
            <Create.DashedLine />
          </Create.DurationWrapper>
        </Col>

        {/* End Berthing */}
        <Col span={9}>
          <Create.TimeBox>
            <Create.IconWrapper>
              <CalendarOutlined />
            </Create.IconWrapper>
            <Create.TimeWrapper>
              <div>27 Mar 2024 24:12</div> {/* Prevent line break */}
              <Create.TimeLabel>End Berthing</Create.TimeLabel>
            </Create.TimeWrapper>
          </Create.TimeBox>
        </Col>
      </Row>
    </Create.Container>
  );
};

export default TimeComponent;
