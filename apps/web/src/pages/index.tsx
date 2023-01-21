import { Global } from "@emotion/react";
import { global } from "ui/styles/global";
import { Page } from "@/components/pages/top/Page";
import { Head } from "@/components/Head";
import { Layout } from "@/components/Layout";
import { FC } from "react";

const globalStyles = <Global styles={global} />;

export const Top: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        {globalStyles}
      </Head>
      <Layout>
        <Page />
      </Layout>
    </>
  );
};

export default Top;
