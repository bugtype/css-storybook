import React from 'react';

import { WavyTextAnimation } from '../components/WavyTextAnimation';

export default {
  title: 'Example/WavyTextAnimation',
  component: WavyTextAnimation,
};

const Template = (args: any) => <WavyTextAnimation {...args} />;

export const Init = Template.bind({});
Init.args = {
  text: 'Welcome bugtype',
};
