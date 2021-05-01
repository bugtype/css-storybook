import React from 'react';

import { HoverAnimation } from '../components/HoverAnimation';

export default {
  title: 'React/HoverAnimation',
  component: HoverAnimation,
};

const Template = (args: any) => <HoverAnimation {...args} />;

export const hoverAnimation1 = Template.bind({});
hoverAnimation1.args = {};
