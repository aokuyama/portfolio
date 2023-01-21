import { FC } from "react";
import { About } from "./About";
import { Panorama } from "./Panorama";
import { Contact } from "./Contact";
import { Skill } from "./Skill";
import { Main } from "ui/src/components/Main";
import { Title } from "ui/src/components/Title";
import { Works } from "./Works";

export const Page: FC = () => {
  return (
    <>
      <Title>aokuyama</Title>
      <Panorama />
      <Main>
        <About />
        <Skill />
        <Works />
        <Contact />
      </Main>
    </>
  );
};
