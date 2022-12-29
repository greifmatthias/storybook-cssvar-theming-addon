import { useChannel, useGlobals } from "@storybook/api";
import { convert, themes } from "@storybook/theming";
import React, { FC, useEffect, useState } from "react";

import { EVENTS, PARAM_KEY } from "../../constants";
import { isColor } from "../../helpers";
import { Input } from "../Input";

import S from "./List.styles";
import { ListItemProps, ListProps } from "./List.types";

export const ListItem: FC<ListItemProps> = ({ name }) => {
  const [globals, updateGlobals] = useGlobals();

  const [value, setValue] = useState<string>(() => "");

  const emit = useChannel({
    [EVENTS.RESULT]: (newValue) => {
      if (newValue[name]) setValue(newValue[name]);
    },
  });

  useEffect(() => emit(EVENTS.REQUEST, { name }), []);

  const onChange = (newValue: string) => {
    setValue(newValue);

    updateGlobals({
      [PARAM_KEY]: {
        ...globals[PARAM_KEY],
        [name]: newValue,
      },
    });
  };

  return (
    <S.Row>
      <S.LabelText>{name}</S.LabelText>

      <S.InputContainer>
        {isColor(value) ? <S.ColorIndicator value={value} /> : null}

        <Input value={value} onChange={(e) => onChange(e.target.value)} />
      </S.InputContainer>
    </S.Row>
  );
};

export const List: FC<ListProps> = ({ items }) => {
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
    <S.ListWrapper>
      {Object.keys(itemsBySection).map((x) => (
        <S.ListWrapper key={`list-section-${x}`}>
          <S.HeaderBar onClick={() => onToggleClick(x)} role="button">
            <S.Icon
              icon="chevrondown"
              color={convert(themes.normal).appBorderColor}
              style={{
                transform: `rotate(${open ? 0 : -90}deg)`,
              }}
            />
            {x}
          </S.HeaderBar>

          {openedSection === x
            ? itemsBySection[x].map((y) => (
                <ListItem key={`listitem-${y}`} name={y}></ListItem>
              ))
            : null}
        </S.ListWrapper>
      ))}
    </S.ListWrapper>
  );
};
