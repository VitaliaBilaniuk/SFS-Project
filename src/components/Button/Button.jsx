import React from 'react';

import { SfsButton } from './styles';

const Button = ({variant, content, icon}) => (
  <SfsButton>
    {content}
  </SfsButton>
);

export default Button;
