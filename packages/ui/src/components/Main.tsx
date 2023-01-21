import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const main = css`
  padding: 0 4em;
  background-color: #ebf3ff;
`;

export const Main: FC<Props> = ({ children }) => {
  return <main css={main}>{children}</main>;
};
