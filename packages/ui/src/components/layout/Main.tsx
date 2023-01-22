import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const main = css``;

export const Main: FC<Props> = ({ children }) => {
  return <main css={main}>{children}</main>;
};
