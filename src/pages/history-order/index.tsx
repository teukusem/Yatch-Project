import React from "react";
import { Head } from "@/components";
import Content from "@/layouts/Content";
import ButtonPreviousPath from "@/components/atoms/button/button-previous-path";
import HistoryCardGroup from "@/components/organism/history-card-group";

const HistoryOrder: React.FC = () => {
    return (
        <>
            <Head title="History Order" />
            <Content>
                <div>
                    <ButtonPreviousPath label="History Order" />
                </div>
                <HistoryCardGroup/>
            </Content>
        </>
    )
}

export default HistoryOrder