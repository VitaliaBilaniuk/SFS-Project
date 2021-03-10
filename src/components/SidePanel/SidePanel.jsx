import React from 'react';
import Form from './Form.jsx';
import ImageUpload from './ImageUpload.jsx';
import '../../index.scss';

import { SfsAside, SfsAsideContent, SfsAsideTitle } from './styles';

const SidePanel = () => (
  <SfsAside>
    <SfsAsideContent>
      <SfsAsideTitle>Employee Details</SfsAsideTitle>
      <ImageUpload />
      <Form />
    </SfsAsideContent>
  </SfsAside>
);

export default SidePanel;
