import React from 'react';
import PropTypes from 'prop-types';

import './typing-animation.css';

export const TypeAnimation = ({ text }) => (
  <div class="text-typing">
    <p>{text}</p>
  </div>
);
