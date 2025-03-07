/*
Zod: TypeScript 向けのスキーマベースのバリデーションライブラリ. バリデーションと型定義を一緒にできる
インストール: npm install zod
*/

import { z } from "zod";

// スキーマの定義
const userSchema = z.object({
  name: z.string().min(2, "名前は2文字以上で入力してください"),
  age: z.number().min(18, "18歳以上である必要があります"),
  email: z.string().email("正しいメールアドレスを入力してください"),
});

// ✅ 正しいデータ
const validData = { name: "Taro", age: 20, email: "taro@example.com" };
console.log(userSchema.safeParse(validData)); // 成功する

// ❌ 間違ったデータ
const invalidData = { name: "T", age: 15, email: "wrong-email" };
console.log(userSchema.safeParse(invalidData)); // 失敗（エラーメッセージ付き）
