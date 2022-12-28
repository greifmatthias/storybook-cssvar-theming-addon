import { useChannel } from "@storybook/addons";
import type { DecoratorFunction } from "@storybook/addons";

import { EVENTS, PARAM_KEY } from "./constants";

export const WithVars: DecoratorFunction = (StoryFn, context) => {
  const { globals } = context;

  console.log(StoryFn());

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

  const style = document.createElement("style");
  style.nodeValue = styling;
  window.document.body.prepend(style);

  return StoryFn();
};
