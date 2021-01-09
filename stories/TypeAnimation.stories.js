import React from 'react';

import { TypeAnimation } from './TypeAnimation';

export default {
  title: 'Example/TypeAnimation',
  component: TypeAnimation,
};

const Template = (args) => <TypeAnimation {...args} />;

export const Init = Template.bind({});
Init.args = {
  text: 'Welcome bugtype',
};
