/*
Error Boundaries: コンポーネントのエラーをキャッチして、アプリケーションがクラッシュするのを防ぐための仕組み

*/

import React, { Component, ErrorInfo, ReactNode } from 'react';

// childrenプロパティの型を指定
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any): State {
    // エラーが発生した場合、状態を更新する
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: ErrorInfo): void {
    // エラーをロギングする
    console.error("エラーが発生しました: ", error);
    console.error("エラー情報: ", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // エラー発生時に表示するUI
      return <h1>問題が発生しました。後ほど再度お試しください。</h1>;
    }

    // childrenプロパティをレンダリング
    return this.props.children;
  }
}

export default ErrorBoundary;

