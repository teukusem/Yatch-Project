import colorPallate from "@/utils/color";
import { RiArrowLeftLine } from "@remixicon/react";
import { Button } from "antd";
import { useRouter } from "next/router";
import React from "react";

interface ButtonPreviousPathProps {
  label: string;
}

function ButtonPreviousPath({ label }: ButtonPreviousPathProps) {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => router.back()}
        type="text"
        style={style.buttonBackStyles}
      >
        <RiArrowLeftLine size={24} />
        {label}
      </Button>
    </>
  );
}

const style = {
  buttonBackStyles: {
    fontSize: 22,
    color: colorPallate.darkblueLight,
    fontWeight: 600,
    background: "transparent",
    marginBottom: "2rem",
  },
};

export default ButtonPreviousPath;
