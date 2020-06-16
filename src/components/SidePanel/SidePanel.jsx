import React from 'react';
import Form from './Forms.jsx';
import ImageUpload from './ImageUpload.jsx';
import '../../atomic/atomic.scss';

const sfsAsidePanelStyle = 'W(400) Ovy(a) H(100vh-55) Fxs(0)';

const SidePanel = () => (
  <aside className={sfsAsidePanelStyle}>
    <div className="P(20) Pt(0)">
      <h1 className="Fz(32) Fw(300) Lh(1)">Employee Details</h1>
      <ImageUpload />
      <Form />
    </div>
  </aside>
);

export default SidePanel;
