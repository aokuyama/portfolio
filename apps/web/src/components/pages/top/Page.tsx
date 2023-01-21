import { FC } from "react";
import { About } from "./About";
import { Catchphrase } from "./Catchphrase";
import { Contact } from "./Contact";
import { Skill } from "./Skill";
import { Works } from "./Works";

export const Page: FC = () => {
  return (
    <>
      <Catchphrase />
      <About />
      <Skill />
      <Works />
      <Contact />
    </>
  );
};
