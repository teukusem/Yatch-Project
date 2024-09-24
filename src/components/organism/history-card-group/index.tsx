import React from "react";
import Badge from "@/components/atoms/badge";
import colorPallate from "@/utils/color";
import Create, { style } from "./style";
import { Divider } from "antd";
import Image from "next/image";
import roundedship from "@/assets/images/icon/rounded-ship.svg";
import TimeComponent from "@/components/atoms/time-component";

const HistoryCardGroup: React.FC = () => {
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
                <Create.WrapperHasSpace>
                    <Create.WrapperHasSpace>
                        <Image src={roundedship} alt="Ship Logo" />
                        <div>
                            <Create.TitleVessel>Seaborn Oddysey</Create.TitleVessel>
                            <Create.WrapperHasSpace>
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
                            </Create.WrapperHasSpace>
                        </div>
                    </Create.WrapperHasSpace>


                    <TimeComponent/>
                </Create.WrapperHasSpace>
            <Divider style={style.DividerStyle} />

        </Create.ContainerCard>
    )
}

export default HistoryCardGroup