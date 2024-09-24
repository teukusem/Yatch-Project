import React from "react";
import Image from "next/image";
import { Col, Row } from "antd";
import Create, { style } from "./style";
import vesselcontainer from "@/assets/images/icon/vessel-container.svg";
import vesseltanker from "@/assets/images/icon/vessel-tanker.svg";
import invoicesfile from "@/assets/images/icon/file-invoices.svg";
import invoicescorrection from "@/assets/images/icon/invoices-correction.svg";

function DashboardSummaryGroup() {
  return (
    <>
      <Row gutter={[16, 16]}>
        <Col
          xs={{ span: 24, flex: "100%" }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={style.ColumnStyle}
        >
          <Create.SummaryCard>
            <Create.WrapperSummaryDescription>
              <Create.SummaryCountText>77</Create.SummaryCountText>
              <Create.SummaryTitleText>Vessel Call</Create.SummaryTitleText>
            </Create.WrapperSummaryDescription>
            <Image src={vesselcontainer} alt="Vessel Container" />
          </Create.SummaryCard>
        </Col>

        <Col
          xs={{ span: 24, flex: "100%" }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={style.ColumnStyle}
        >
          <Create.SummaryCard>
            <Create.WrapperSummaryDescription>
              <Create.WrapperCardVesselMovement>
                <Create.SummaryCountText fontSize="26px">
                  77
                  <Create.SpanSummaryTitleText fontSize="10px">Active</Create.SpanSummaryTitleText>
                </Create.SummaryCountText>
                <Create.SummaryCountText fontSize="26px">
                  77
                  <Create.SpanSummaryTitleText fontSize="10px">departed</Create.SpanSummaryTitleText>
                </Create.SummaryCountText>
              </Create.WrapperCardVesselMovement>
              <Create.SummaryTitleText>Vessel Movement</Create.SummaryTitleText>
            </Create.WrapperSummaryDescription>
            <Image src={vesseltanker} alt="Vessel Tanker" />
          </Create.SummaryCard>
        </Col>

        <Col
          xs={{ span: 24, flex: "100%" }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={style.ColumnStyle}
        >
          <Create.SummaryCard>
            <Create.WrapperSummaryDescription>
              <Create.SummaryCountText>77</Create.SummaryCountText>
              <Create.SummaryTitleText>Total Invoice</Create.SummaryTitleText>
            </Create.WrapperSummaryDescription>
            <Image src={invoicesfile} alt="Invoices File" />
          </Create.SummaryCard>
        </Col>

        <Col
          xs={{ span: 24, flex: "100%" }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
          xl={{ span: 6 }}
          style={style.ColumnStyle}
        >
          <Create.SummaryCard>
            <Create.WrapperSummaryDescription>
              <Create.SummaryCountText>77</Create.SummaryCountText>
              <Create.SummaryTitleText>Invoice Correction</Create.SummaryTitleText>
            </Create.WrapperSummaryDescription>
            <Image src={invoicescorrection} alt="Invoices Correction" />
          </Create.SummaryCard>
        </Col>
      </Row>
    </>
  );
}

export default DashboardSummaryGroup;
