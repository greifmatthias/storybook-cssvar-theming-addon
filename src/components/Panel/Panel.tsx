import { useParameter } from "@storybook/api";
import { AddonPanel } from "@storybook/components";
import React, { FC } from "react";

import { PARAM_KEY } from "../../constants";
import { List } from "../List";
import { Output } from "../Output";
import S from "./Panel.styles";
import { PanelProps } from "./Panel.types";

export const Panel: FC<PanelProps> = (props) => {
  const vars = useParameter<Array<string>>(PARAM_KEY, []);

  return (
    <AddonPanel {...props}>
      <S.Root>
        <List items={vars} />

        <Output />
      </S.Root>
    </AddonPanel>
  );
};
