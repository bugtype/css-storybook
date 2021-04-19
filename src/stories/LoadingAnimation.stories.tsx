import React from 'react';

import { LoadingAnimation } from '../components/LoadingAnimation';
import { LoadingAnimation2 } from '../components/LoadingAnimation2';
import { LoadingAnimation3 } from '../components/LoadingAnimation3';

export default {
  title: 'React/LoadingAnimation',
  component: LoadingAnimation,
};

const Template = (args: any) => <LoadingAnimation {...args} />;
const LoadingAnimation2Template = (args: any) => <LoadingAnimation2 {...args} />;
const LoadingAnimation3Template = (args: any) => <LoadingAnimation3 {...args} />;

export const LoadingAnimation_1 = Template.bind({});
LoadingAnimation_1.args = {
  text: 'Welcome bugtype',
};


export const LoadingAnimation_2 = LoadingAnimation2Template.bind({});
LoadingAnimation_2.args = {
  text: 'Welcome bugtype',
};

export const LoadingAnimation_3 = LoadingAnimation3Template.bind({});
LoadingAnimation_3.args = {
  url: 'https://webdesign.tutsplus.com/ko/tutorials/a-beginners-introduction-to-css-animation--cms-21068',
  custom_url: 'https://matthewlein.com/tools/ceaser',
};

