/*
React hook form: React のフォーム管理を効率化するライブラリ

インストール: npm install react-hook-form

パフォーマンス: ref を活用し 高速
状態管理: register で 入力要素ごとに管理
バリデーション: Yup や Zod との相性が良い
フォームの記述量: register を使うだけでOK
大規模フォーム向き: 小規模～中規模フォーム向き
*/

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
};

const App = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log("送信データ:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="名前を入力" />
      <button type="submit">送信</button>
    </form>
  );
};

export default App;