import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const section = css`
  padding: 2.5em 0;
  border-width: 2px;
  border-color: #1e5774;
  border-style: solid none none;
`;

export const Section: FC<Props> = ({ children }) => {
  return <section css={section}>{children}</section>;
};
