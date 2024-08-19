import { Head } from "@/components";
import Content from "@/layouts/Content";
import { Button } from "antd";
import { useRouter } from "next/router";
import BlankLayout from "@/layouts/index-no-navbar";
import { ReactNode } from "react";

export default function Unknown() {
  const router = useRouter();
  return (
    <>
      <Head title="Unknown" />
      <Content>
        <Button
          color="primary"
          onClick={() => {
            router.push("/dashboard");
          }}
          block
        >
          Back to Dashboard
        </Button>
      </Content>
    </>
  );
}
Unknown.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
