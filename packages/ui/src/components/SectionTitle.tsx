import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  children: React.ReactNode;
};

const title = css`
  font-size: 2.5em;
  font-family: "gibson";
  font-style: italic;
  letter-spacing: 0.15em;
  display: inline;
  padding-left: 6px;
  text-shadow: -3px -3px 0 #1e5774;
  color: #0ff;
  background: -webkit-linear-gradient(0deg, #0ff, #ff0);
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const SectionTitle: FC<Props> = ({ children }) => {
  return <h2 css={title}>{children}</h2>;
};
