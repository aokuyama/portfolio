import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const contents = css`
  padding: 0 4em;
  background-color: #ebf3ff;
`;

export const Contents: FC<Props> = ({ children }) => {
  return <article css={contents}>{children}</article>;
};
