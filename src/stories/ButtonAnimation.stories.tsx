import React from 'react';

import { ButtonAnimation } from '../components/ButtonAnimation';

export default {
  title: 'React/ButtonAnimation',
  component: ButtonAnimation,
};

const Template = (args: any) => <ButtonAnimation {...args} />;

export const ButtonAnimation1 = Template.bind({});
ButtonAnimation1.args = {
  text: 'Welcome bugtype',
};
