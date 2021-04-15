import React from 'react';

import { Card } from '../components/Card';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = (args: any) => <Card {...args} />;

export const card1 = Template.bind({});
card1.args = {};
