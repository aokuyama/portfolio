import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const frame = css``;

export const Frame: FC<Props> = ({ children }) => {
  return <div css={frame}>{children}</div>;
};
