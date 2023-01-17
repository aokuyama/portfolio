import { Button } from "ui";
import { Global } from "@emotion/react";
import { global } from "ui/styles/global";

const globalStyles = <Global styles={global} />;

export default function Web() {
  return (
    <div>
      {globalStyles}
      <h1>Web</h1>
      <Button />
    </div>
  );
}
