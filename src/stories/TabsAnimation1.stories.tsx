import React from "react";

import { TabsAnimation } from "../components/TabsAnimation";

export default {
  title: "React/Tabs",
  component: TabsAnimation,
};

const Template = (args: any) => <TabsAnimation {...args} />;

export const Tabs1 = Template.bind({});
Tabs1.args = {
  text: "Welcome bugtype",
};
