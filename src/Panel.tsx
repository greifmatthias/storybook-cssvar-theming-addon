import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import React from "react";

import { PanelContent } from "./components/PanelContent";
import { PARAM_KEY } from "./constants";

interface PanelProps {
  active: boolean;
}

export const Panel: React.FC<PanelProps> = (props) => {
  const vars = useParameter(PARAM_KEY, []);

  return (
    <AddonPanel {...props}>
      <PanelContent results={vars as Array<string>} />
    </AddonPanel>
  );
};
