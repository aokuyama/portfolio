import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const header = css`
  padding: 0.5em;
  background-color: #fff;
`;

const title = css`
  font-size: 1.75em;
  color: #1e5774;
  letter-spacing: 0.15em;
  font-weight: bold;
`;

export const Header: FC<Props> = ({ children }) => {
  return (
    <header css={header}>
      <h1 css={title}>{children}</h1>
    </header>
  );
};
