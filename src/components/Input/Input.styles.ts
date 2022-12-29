import { convert, styled, themes } from "@storybook/theming";

const Root = styled.input(() => ({
  height: "fit-content",
  padding: convert(themes.normal).layoutMargin / 2,
  border: 0,
  backgroundColor: convert(themes.normal).appBorderColor,
  borderRadius: 4,
}));

export default {
  Root,
};
