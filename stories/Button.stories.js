import React from "react";

import "./Button.element";
// import { Button } from "./Button";

export default {
  title: "Button",
  //   component: Button,
};

// const Template = (args) => <Button {...args} />;
const WCTemplate = (args) => <vrti-button {...args}>button text</vrti-button>;

export const WCPrimary = WCTemplate.bind({});
WCPrimary.args = {
  variant: "primary",
};

// export const Primary = Template.bind({});
// Primary.args = {
//   variant: "primary",
//   label: "Button",
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   variant: "secondary",
//   label: "Button",
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   variant: "tertiary",
//   label: "Button",
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: "large",
//   label: "Button",
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: "small",
//   label: "Button",
// };
