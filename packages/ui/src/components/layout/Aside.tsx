import { FC } from "react";
import { css } from "@emotion/react";

type Props = {};

const aside = css`
  background-color: #1e5774;
`;

export const Aside: FC<Props> = ({}) => {
  return (
    <aside css={aside}>
      <ul>
        <li></li>
      </ul>
    </aside>
  );
};
