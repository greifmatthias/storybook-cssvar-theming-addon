import React, { Fragment, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { IconButton, Icons, IconsProps } from "@storybook/components";
import { useChannel, useGlobals } from "@storybook/api";

import { EVENTS, PARAM_KEY } from "../constants";

const ListWrapper = styled.ul({
  listStyle: "none",
  fontSize: 14,
  padding: 0,
  margin: 0,
});

const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  borderBottom: `1px solid ${convert(themes.normal).appBorderColor}`,
});

const HeaderBar = styled.div({
  padding: convert(themes.normal).layoutMargin,
  paddingLeft: convert(themes.normal).layoutMargin - 3,
  background: "none",
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  borderLeft: "3px solid transparent",
  width: "100%",

  "&:focus": {
    outline: "0 none",
    borderLeft: `3px solid ${convert(themes.normal).color.secondary}`,
  },
});

export type ListItemProps = {
  name: string;
};

export const ListItem: React.FC<ListItemProps> = ({ name }) => {
  const [globals, updateGlobals] = useGlobals();

  const [value, setValue] = useState<string>(() => "");

  const emit = useChannel({
    [EVENTS.RESULT]: (newValue) => {
      if (newValue[name]) setValue(newValue[name]);
    },
  });

  const doEmit = () => emit(EVENTS.REQUEST, { name });

  const onChange = (newValue: string) => {
    updateGlobals({
      [PARAM_KEY]: {
        ...globals[PARAM_KEY],
        [name]: newValue,
      },
    });
  };

  return (
    <Fragment>
      <Wrapper>
        <HeaderBar>{name}</HeaderBar>

        <IconButton onClick={doEmit} style={{ marginRight: 12 }}>
          <Icons icon="sync" />
        </IconButton>

        <input
          type="text"
          defaultValue={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </Wrapper>
    </Fragment>
  );
};

export type ListProps = {
  items: Array<string>;
};

export const List: React.FC<ListProps> = ({ items }) => (
  <ListWrapper>
    {items.map((item) => (
      <ListItem key={`listitem-${item}`} name={item}></ListItem>
    ))}
  </ListWrapper>
);
