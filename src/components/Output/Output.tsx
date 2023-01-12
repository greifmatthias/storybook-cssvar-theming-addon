import { useGlobals } from "@storybook/api";
import { Code } from "@storybook/components";
import React, { FC } from "react";

import { PARAM_KEY } from "../../constants";
import { OutputProps } from "./Output.types";

export const Output: FC<OutputProps> = () => {
  const [globals] = useGlobals();

  const vars = globals[PARAM_KEY] || [];
  const styling = `:root { ${Object.keys(vars)
    .map((x) => `${x}: ${vars[x]}`)
    .join(";")}; }`.replace("{ ; }", "{ }");

  return <Code>{styling}</Code>;
};
