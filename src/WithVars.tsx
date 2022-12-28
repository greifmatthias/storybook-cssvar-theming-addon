import { useChannel } from "@storybook/addons";
import type { DecoratorFunction } from "@storybook/addons";
import React from "react";

import { EVENTS, PARAM_KEY } from "./constants";

export const WithVars: DecoratorFunction = (StoryFn, context) => {
  const { globals } = context;

  const vars = globals[PARAM_KEY] || [];
  const styling = `:root { ${Object.keys(vars)
    .map((x) => `${x}: ${vars[x]}`)
    .join(";")} }`;

  const emit = useChannel({
    [EVENTS.REQUEST]: ({ name }) => {
      emit(EVENTS.RESULT, {
        [name]: getComputedStyle(document.documentElement).getPropertyValue(
          name
        ),
      });
    },
  });

  return (
    <div>
      <style>{styling}</style>

      {StoryFn()}
    </div>
  );
};
