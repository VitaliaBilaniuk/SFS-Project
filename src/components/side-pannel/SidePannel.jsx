import React from 'react';
import './sidePannel.scss';
import Form from './Forms.jsx';
import ImageUpload from './ImageUpload.jsx';

const SidePannel = () => (
  <aside className="sfs-sidebar">
    <div className="sfs-sidebar__container">
      <h1 className="sfs-sidebar__title">Employee Details</h1>
      <ImageUpload />
      <Form />
    </div>
  </aside>
);

export default SidePannel;

