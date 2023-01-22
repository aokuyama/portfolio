import { FC } from "react";
import { About } from "./About";
import { Panorama } from "./Panorama";
import { Contact } from "./Contact";
import { Skill } from "./Skill";
import { Contents } from "ui/src/components/Contents";
import { Works } from "./Works";

export const Page: FC = () => {
  return (
    <>
      <Panorama />
      <Contents>
        <About />
        <Skill />
        <Works />
        <Contact />
      </Contents>
    </>
  );
};
