import { FC } from "react";
import { css } from "@emotion/react";

type Props = {
  vision: string;
  catchphrase: string;
};

const contents = css`
  padding: 0 4em;
  background-color: #fff;
`;

const section = css`
  margin: 0 0 0 3em;
  background-color: #fff;
  padding: 3em 0 8em;
`;

const h2 = css`
  font-family: "gibson";
  font-size: 2.5em;
  font-weight: bold;
  white-space: pre-wrap;
`;

const phrase = css`
  margin: 1.25em auto;
`;

export const Panorama: FC<Props> = ({ vision, catchphrase }) => {
  return (
    <article css={contents}>
      <section css={section}>
        <h2 css={h2}>{vision}</h2>
        <div css={phrase}>{catchphrase}</div>
      </section>
    </article>
  );
};
