import { FC } from "react";
import { css } from "@emotion/react";

type Props = {};

const footer = css`
  background-color: #187aa0;
  height: 100px;
`;

export const Footer: FC<Props> = ({}) => {
  return <footer css={footer}></footer>;
};
