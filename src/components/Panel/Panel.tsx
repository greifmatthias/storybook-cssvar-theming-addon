import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import React, { FC } from "react";

import { List } from "components/List";
import { PARAM_KEY } from "consts";

import { PanelProps } from "./Panel.types";

export const Panel: FC<PanelProps> = (props) => {
  const vars = useParameter<Array<string>>(PARAM_KEY, []);

  return (
    <AddonPanel {...props}>
      <List items={vars} />
    </AddonPanel>
  );
};
