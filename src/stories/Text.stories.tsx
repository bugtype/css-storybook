import React from 'react';

import { NeonText } from '../components/NeonText';

export default {
  title: 'Example/NeonText',
  component: NeonText,
};

const Template = (args: any) => <NeonText {...args} />;

export const Text1 = Template.bind({});
Text1.args = {};
