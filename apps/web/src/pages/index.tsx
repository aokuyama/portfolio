import { Page } from "@/components/pages/top/Page";
import { Head } from "@/components/Head";
import { Layout } from "@/components/Layout";
import { FC } from "react";

export const Top: FC = () => {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Layout>
        <Page />
      </Layout>
    </>
  );
};

export default Top;
