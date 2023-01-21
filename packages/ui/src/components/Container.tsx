import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const container = css`
  margin: 0 3em;
`;

export const Container: FC<Props> = ({ children }) => {
  return <div css={container}>{children}</div>;
};
