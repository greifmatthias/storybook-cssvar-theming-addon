import { addons, types } from "@storybook/addons";

import { Panel } from "../components";
import { ADDON_ID, PANEL_ID } from "../constants";

addons.register(ADDON_ID, () => {
  addons.add(PANEL_ID, {
    type: types.PANEL,
    title: "Css Vars",
    match: ({ viewMode }) => viewMode === "story",
    render: Panel,
  });
});
