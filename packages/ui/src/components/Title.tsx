import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const title = css`
  font-size: 1.75em;
  color: #1e5774;
  letter-spacing: 0.15em;
  margin: 0.5em;
`;

export const Title: FC<Props> = ({ children }) => {
  return <h1 css={title}>{children}</h1>;
};
