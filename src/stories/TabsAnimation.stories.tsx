import React from "react";

import { TabsAnimation } from "../components/TabsAnimation";
import { TabsAnimation2 } from "../components/TabsAnimation2";

export default {
  title: "React/Tabs",
  component: TabsAnimation,
};

const Template = (args: any) => <TabsAnimation {...args} />;

const Template2 = (args: any) => <TabsAnimation2 {...args} />;

export const Tabs1 = Template.bind({});
Tabs1.args = {
  text: "Welcome bugtype",
};


export const Tabs2 = Template2.bind({});
Tabs2.args = {
  text: "Welcome bugtype",
};
