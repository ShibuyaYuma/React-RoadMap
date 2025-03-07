/*
Formik: Formik は、React でフォームを簡単に管理するためのライブラリ

インストール: npm install formik

パフォーマンス: useState を多用するため やや遅い
状態管理: formik.values で全ての状態を管理
バリデーション: Yup との組み合わせが主流
フォームの記述量: onChange や handleSubmit が必要
大規模フォーム向き: 大規模フォームに向いている
*/

import { useFormik } from "formik";

type FormValues = {
  name: string;
  email: string;
};

const App = () => {
  const formik = useFormik<FormValues>({
    initialValues: { name: "", email: "" },
    onSubmit: (values) => {
      console.log("送信データ:", values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="name"
        onChange={formik.handleChange}
        value={formik.values.name}
        placeholder="名前"
      />
      <input
        type="email"
        name="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        placeholder="メールアドレス"
      />
      <button type="submit">送信</button>
    </form>
  );
};

export default App;
