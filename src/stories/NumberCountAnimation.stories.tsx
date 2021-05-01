import React from 'react';

import { NumberCountingAnimation } from '../components/NumberCountingAnimation';

export default {
  title: 'React/Text/CountingAnimation',
  component: NumberCountingAnimation,
};

const Template = (args: any) => <NumberCountingAnimation {...args} />;

export const NumberCountAnimation1 = Template.bind({});
NumberCountAnimation1.args = {
  text: 'Welcome bugtype',
};
