import React, { ReactNode } from "react";
import { AppContext, AppInitialProps, AppLayoutProps } from "next/app";
import type { NextComponentType } from "next";
import { ConfigProvider } from "antd";
import { persistor, store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import theme from "@/theme/themeConfig";
import "@/styles/globals.css";
import Layout from "@/layouts";
import { PrivateRoute } from "@/context/auth-context";

const App: NextComponentType<AppContext, AppInitialProps, AppLayoutProps> = ({
  Component,
  pageProps,
}: AppLayoutProps) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => <Layout>{page}</Layout>);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PrivateRoute>
          <ConfigProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ConfigProvider>
        </PrivateRoute>
      </PersistGate>
     </Provider>
  );
};

export default App;
