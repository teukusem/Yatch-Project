import React, { ReactNode, Suspense } from "react";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ConfigProvider } from "antd";
import theme from "@/theme/themeConfig";
import "@/styles/globals.css";
import "antd/dist/reset.css"; 
import dynamic from 'next/dynamic'
import { PrivateRoute } from "@/context/auth-context";
const LazyLayout = dynamic(() => import("@/layouts"), { ssr: false });

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout =
    Component.getLayout || ((page: ReactNode) => <LazyLayout>{page}</LazyLayout>);

  return (
    <PrivateRoute>
      <ConfigProvider theme={theme}>
        <Suspense fallback={<div>Loading...</div>}>
          {getLayout(<Component {...pageProps} />)}
        </Suspense>
      </ConfigProvider>
    </PrivateRoute>
  );
};

export default App;
