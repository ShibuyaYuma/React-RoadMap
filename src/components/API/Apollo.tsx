// npm install @apollo/client graphql
// Apollo は、GraphQL を利用したフロントエンドとバックエンド間の通信を効率化するためのライブラリ

import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery } from '@apollo/client';
import { ApolloServer } from 'apollo-server';

// const typeDefs = gql`
//   type Query {
//     hello: String
//   }
// `;

// // リゾルバ（データの取得ロジック）
// const resolvers = {
//   Query: {
//     hello: () => 'Hello, world!',
//   },
// };

// // サーバーの設定
// const server = new ApolloServer({ typeDefs, resolvers });

// // サーバーの起動
// server.listen().then(({ url }) => {
//   console.log(`🚀 Server ready at ${url}`);
// });

// Apollo Client の設定
const client = new ApolloClient({
  uri: 'https://example.com/graphql', // GraphQL サーバーのエンドポイント
  cache: new InMemoryCache(),
});

// GraphQL クエリ
const GET_USER = gql`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
    }
  }
`;

// コンポーネント
const User: React.FC<{ id: string }> = ({ id }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <p>{data.user.email}</p>
    </div>
  );
};

const Apollo: React.FC = () => (
  <ApolloProvider client={client}>
    <User id="1" />
  </ApolloProvider>
);

export default Apollo;
