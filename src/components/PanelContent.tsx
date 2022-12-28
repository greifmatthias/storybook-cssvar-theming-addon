import React from "react";

import { List } from "./List";

interface PanelContentProps {
  results: Array<string>;
}

export const PanelContent: React.FC<PanelContentProps> = ({ results }) => {
  return <List items={results} />;
};
