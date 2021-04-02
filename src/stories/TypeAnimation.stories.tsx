import React from 'react';

import { TypeAnimation } from '../components/TypeAnimation';

export default {
  title: 'Example/TypeAnimation',
  component: TypeAnimation,
};

const Template = (args: any) => <TypeAnimation {...args} />;

export const Init = Template.bind({});
Init.args = {
  text: 'Welcome bugtype',
};
