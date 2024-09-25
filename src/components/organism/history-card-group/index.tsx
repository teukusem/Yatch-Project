import React, { useEffect, useState } from "react";
import Badge from "@/components/atoms/badge";
import colorPallate from "@/utils/color";
import Create, { style } from "./style";
import { Button, Divider } from "antd";
import Image from "next/image";
import roundedship from "@/assets/images/icon/rounded-ship.svg";
import TimeComponent from "@/components/atoms/time-component";
import ZoneInfoCard from "@/components/atoms/zone-info-card";
import berthing from "@/assets/images/icon/berthing.svg";
import electric from "@/assets/images/icon/electric.svg";
import satination from "@/assets/images/icon/satination.svg";

// Utility function to detect mobile screen size
const isMobileScreen = () => window.innerWidth <= 768;

const HistoryCardGroup: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(isMobileScreen());

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileScreen());
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Create.ContainerCard>
      <Create.WrapperHeader>
        <div>
          <span>Request Number :</span>
          1111124841408214
        </div>
        <Badge
          title="Waiting Approval"
          color={colorPallate.yellow}
          backgroundColor={colorPallate.yellowLight100}
        />
      </Create.WrapperHeader>
      <Divider style={style.DividerStyle} />
      <Create.WrapperBodyCard>
        <Create.WrapperHasSpacePadding>
          <Image src={roundedship} alt="Ship Logo" />
          <div>
            <Create.TitleVessel>Seaborn Oddysey</Create.TitleVessel>
            <Create.WrapperBodyCard>
              <Badge
                title="Mono Hault"
                color={colorPallate.grey}
                backgroundColor={colorPallate.whiteLight200}
              />
              <Badge
                title={`LOA: ${43.92}`}
                color={colorPallate.grey}
                backgroundColor={colorPallate.whiteLight200}
              />
            </Create.WrapperBodyCard>
          </div>
        </Create.WrapperHasSpacePadding>
        <TimeComponent />
        <ZoneInfoCard />
      </Create.WrapperBodyCard>
      <Divider style={style.DividerStyle} />
      <Create.WrapperBetween>
        <Create.WrapperHasSpace>
          <Create.FooterItem>
            <Image src={berthing} alt="Berthing Icon" />
            Berthing
          </Create.FooterItem>
          <Create.FooterItem>
            <Image src={electric} alt="Electricity Icon" />
            Electricity
          </Create.FooterItem>
          <Create.FooterItem>
            <Image src={satination} alt="Satination Icon" />
            Satination
          </Create.FooterItem>
        </Create.WrapperHasSpace>
        <Button type="primary">Request Service</Button>
      </Create.WrapperBetween>
    </Create.ContainerCard>
  );
};

export default HistoryCardGroup;
