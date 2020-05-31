import React from 'react';
import Form from './Forms.jsx';
import ImageUpload from './ImageUpload.jsx';
import '../../atomic/atomic.scss';

const SidePannel = () => (
  <aside className="W(395) Ovy(a) H(100vh-55) Fxs(0)">
    <div className="P(20) Pt(0)">
      <h1 className="Fz(32) Fw(300) Lh(1)">Employee Details</h1>
      <ImageUpload />
      <Form />
    </div>
  </aside>
);

export default SidePannel;