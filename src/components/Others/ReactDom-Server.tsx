/*
react-dom/server API: サーバーサイドレンダリング（SSR）を行うために使用されるReactの一部で、クライアントではなくサーバーでReactコンポーネントをレンダリングするためのAPI
*/

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

const MyComponent = () => <div>Hello, Server Side Rendering!</div>;

const htmlString = ReactDOMServer.renderToString(<MyComponent />);
console.log(htmlString);  // <div data-reactroot="">Hello, Server Side Rendering!</div>

const MyComponent2 = () => <div>Hello, Static HTML!</div>;

const htmlString2 = ReactDOMServer.renderToStaticMarkup(<MyComponent2 />);
console.log(htmlString2);  // <div>Hello, Static HTML!</div>

const App = () => <div>Hello, Hydration!</div>;

// React 18以降の hydrateRoot の使用
// const root = ReactDOM.hydrateRoot(
//   document.getElementById('root')!,
//   <App />
// );