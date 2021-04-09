import React from 'react';

import { LoadingAnimation } from '../components/LoadingAnimation';

export default {
  title: 'React/LoadingAnimation',
  component: LoadingAnimation,
};

const Template = (args: any) => <LoadingAnimation {...args} />;

export const LoadingAnimation1 = Template.bind({});
LoadingAnimation1.args = {
  text: 'Welcome bugtype',
};
