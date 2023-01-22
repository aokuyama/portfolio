import { FC } from "react";
import { Aside } from "ui/src/components/layout/Aside";
import { Frame } from "ui/src/components/layout/Frame";
import { Header } from "ui/src/components/layout/Header";
import { Footer } from "ui/src/components/layout/Footer";
import { Main } from "ui/src/components/layout/Main";

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <Frame>
      <Header>aokuyama</Header>
      <Aside />
      <Main>{children}</Main>
      <Footer />
    </Frame>
  );
};
