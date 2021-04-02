import React from 'react';

import { TabsAnimation } from '../components/TabsAnimation';

export default {
  title: 'React/Tabs1',
  component: TabsAnimation,
};

const Template = (args: any) => <TabsAnimation {...args} />;

export const Init = Template.bind({});
Init.args = {
  text: 'Welcome bugtype',
};
