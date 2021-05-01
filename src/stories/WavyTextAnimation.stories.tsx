import React from 'react';

import { WavyTextAnimation } from '../components/WavyTextAnimation';

export default {
  title: 'React/Text/WavyTextAnimation',
  component: WavyTextAnimation,
};

const Template = (args: any) => <WavyTextAnimation {...args} />;

export const Init = Template.bind({});
Init.args = {
  text: 'Welcome bugtype',
};
