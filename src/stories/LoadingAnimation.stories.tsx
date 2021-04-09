import React from 'react';

import { LoadingAnimation } from '../components/LoadingAnimation';
import { LoadingAnimation2 } from '../components/LoadingAnimation2';

export default {
  title: 'React/LoadingAnimation',
  component: LoadingAnimation,
};

const Template = (args: any) => <LoadingAnimation {...args} />;
const LoadingAnimation2Template = (args: any) => <LoadingAnimation2 {...args} />;

export const LoadingAnimation_1 = Template.bind({});
LoadingAnimation_1.args = {
  text: 'Welcome bugtype',
};


export const LoadingAnimation_2 = LoadingAnimation2Template.bind({});
LoadingAnimation_2.args = {
  text: 'Welcome bugtype',
};
