/*
Suspense: 非同期な操作を管理するための機能
*/

// src/Other/Suspense.tsx
import React, { Suspense } from 'react';

// LazyComponentを遅延読み込み
const LazyComponent = React.lazy(() => import('./LazyComponent'));

const SuspenseComponent: React.FC = () => (
  <div>
    <h2>SuspenseComponent</h2>
    <Suspense fallback={<div>Loading LazyComponent...</div>}>
      <LazyComponent />
    </Suspense>
  </div>
);

export default SuspenseComponent;
