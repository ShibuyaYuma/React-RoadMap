/*
Portals: Reactコンポーネントのツリーの外部にあるDOMノードにコンポーネントをレンダリングする機能

Portalsの主な用途:
・モーダル、ツールチップ、ドロップダウンなどのUI要素を、通常のコンポーネントツリーの外にレンダリング
・親コンポーネントから外れた位置にあるDOM要素と連携
*/

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Modal: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', padding: '20px', borderRadius: '8px' }}>
      <h2>モーダルウィンドウ</h2>
      <p>ここはモーダルです。</p>
    </div>
  );
};

const PortalsComponent: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <button onClick={toggleModal}>モーダルを開く</button>

      {showModal && ReactDOM.createPortal(
        <Modal />,
        document.getElementById('modal-root')! // モーダルをレンダリングするターゲットDOMノード
      )}
    </div>
  );
};

export default PortalsComponent;
