import { FC } from "react";
import { Panorama as PanoramaBase } from "ui/src/components/Panorama";

export const Panorama: FC = () => {
  return (
    <>
      <PanoramaBase
        vision={`Create\nBusiness\nOptimize`}
        catchphrase="技術で未来を切り開く"
      />
    </>
  );
};
