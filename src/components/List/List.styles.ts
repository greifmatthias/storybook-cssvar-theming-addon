import { Icons, IconsProps } from "@storybook/components";
import { convert, styled, themes } from "@storybook/theming";

type StyledWithValue = {
  value: any;
};

const ListWrapper = styled.ul({
  listStyle: "none",
  fontSize: 14,
  padding: 0,
  margin: 0,
});

const Row = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  paddingLeft: convert(themes.normal).layoutMargin,
  paddingRight: convert(themes.normal).layoutMargin,
  borderBottom: `1px solid ${convert(themes.normal).appBorderColor}`,
});

const LabelText = styled.p({
  flex: 1,
});

const InputContainer = styled("div")(() => ({
  display: "flex",
  alignItems: "center",
  gap: convert(themes.normal).layoutMargin,
}));

const ColorIndicator = styled("div")<StyledWithValue>(({ value }) => ({
  width: 20,
  height: 20,
  borderRadius: 10,
  backgroundColor: value,
  border: `1px solid ${convert(themes.normal).appBorderColor}`,
}));

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
  background: "none",
  color: "inherit",
  textAlign: "left",
  cursor: "pointer",
  width: "100%",
});

export default {
  ListWrapper,

  Row,
  LabelText,
  InputContainer,
  ColorIndicator,

  Icon,
  HeaderBar,
};
