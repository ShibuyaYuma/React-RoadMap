// npm install @tanstack/react-query
// React アプリケーションでの データの取得（fetching）、キャッシュ、同期（synchronization） を効率化するライブラリ

import React from 'react';
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import axios from 'axios';

// QueryClient の作成（React Query の設定用）
const queryClient = new QueryClient();

// データ取得用の関数
const fetchUsers = async () => {
//   const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//   return response.data;
};

// データ表示コンポーネント
// const Users: React.FC = () => {
//   const { data, isLoading, error } = useQuery(['users'], fetchUsers);

//   if (isLoading) return <p>Loading...</p>;
//   if (error instanceof Error) return <p>Error: {error.message}</p>;

//   return (
//     <ul>
//       {data.map((user: { id: number; name: string }) => (
//         <li key={user.id}>{user.name}</li>
//       ))}
//     </ul>
//   );
// };

// App.tsx
const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    {/* <Users /> */}
  </QueryClientProvider>
);

export default App;
