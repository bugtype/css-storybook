import React from 'react';

import { Story} from '@storybook/react'
import {   Image    } from './Image';

export default {
  title: 'Templates/React/ButtonAnimation',
  component: Image,
};

const Template : Story = (args: any) => <Image {...args} />;

export const ReactImage = Template.bind({});
ReactImage.args = {
  src: 'https://www.google.co.kr/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  alt: '이미지',
};
