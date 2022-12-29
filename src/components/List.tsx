import React, { Fragment, useEffect, useState } from "react";
import { styled, themes, convert } from "@storybook/theming";
import { Icons, IconsProps } from "@storybook/components";
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

const Icon = styled(Icons)<IconsProps>({
  height: 10,
  width: 10,
  minWidth: 10,
  color: convert(themes.normal).color.mediumdark,
  marginRight: 10,
  transition: "transform 0.1s ease-in-out",
  alignSelf: "center",
  display: "inline-flex",
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

  useEffect(() => emit(EVENTS.REQUEST, { name }), []);

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

export const List: React.FC<ListProps> = ({ items }) => {
  const itemsBySection: Record<string, Array<string>> = {};
  items.forEach((x) => {
    const sectionName = x.replace("--", "").split("-")[0];

    if (!itemsBySection[sectionName]) itemsBySection[sectionName] = [];

    itemsBySection[sectionName].push(x);
  });

  const [openedSection, openSection] = useState<string>(() => "");

  const onToggleClick = (newSection: string) => {
    openSection((x) => (x === newSection ? "" : newSection));
  };

  return (
    <ListWrapper>
      {Object.keys(itemsBySection).map((x) => (
        <ListWrapper key={`list-section-${x}`}>
          <HeaderBar onClick={() => onToggleClick(x)} role="button">
            <Icon
              icon="chevrondown"
              color={convert(themes.normal).appBorderColor}
              style={{
                transform: `rotate(${open ? 0 : -90}deg)`,
              }}
            />
            {x}
          </HeaderBar>

          {openedSection === x
            ? itemsBySection[x].map((y) => (
                <ListItem key={`listitem-${y}`} name={y}></ListItem>
              ))
            : null}
        </ListWrapper>
      ))}
    </ListWrapper>
  );
};
