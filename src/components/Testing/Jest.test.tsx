import { render, screen } from '@testing-library/react';
import Login, { validateEmail } from "../Login"
import userEvent from '@testing-library/user-event';

/*  describe(): テストグループを作成
    引数: ①テストスイートの説明 ②テストケース
*/
describe("Test Login Component", () => {
    /*  test(): 個別のテストケースを定義 
        引数: ①テストケースの説明 ②テストの実行内容
    */
    test("render from with 1button", async () => {
        // render(): テスト用にコンポーネントをレンダリング（描画）するために使用
        // DOM要素を取得するときに必要
        render(<Login />);
        // const button = screen.findAllByRole('button', { name: /submit/i });  // button要素で「Submit」という名前のボタンを探す 
        // const allButtons = await screen.findAllByRole('button', { hidden: true });
        const buttonList = await screen.findAllByRole("button")   // 指定された要素を検索
        // console.log(buttonList)
        // .toHaveLength(): 配列や文字列その他オブジェクトの長さが期待した値と一致するか判定
        expect(buttonList).toHaveLength(1);
    })

    test("should be failed on email validation", async () => {
        // DOM用を取得していないからrender()は不要
        const testEmail = "shincode.com"
        // .toBe(): 値が期待通りであるか判定. 厳密な一致(===)を判定
        // .toEqual(): 内容の一致.
        // .not.toBe(): 否定的な一致のチェック.
        expect(validateEmail(testEmail)).not.toBe(true)
    })

    test("password input should have type password", async () => {
        render(<Login />)
        // screen.getAllByPlaceholderText(): 指定したプレースホルダーテキストを持つすべての要素を取得
        const passwords = await screen.getAllByPlaceholderText("パスワード入力")
        passwords.forEach(password => {
            // .toHaveAttribute(): 指定した要素が特定の属性を持っているか判定
            expect(password).toHaveAttribute("type", "password");
        });
    })

    test("should be able to submit the form", async () => {
        render(<Login/>)
        // screen.getByTestId(): 指定した data-testid 属性を持つ DOM 要素を取得する
        const submitButton = screen.getByTestId("submit")
        const email = screen.getByPlaceholderText("メールアドレス入力")
        const password = screen.getByPlaceholderText("パスワード入力")
        const emailText = "abc@dce.com"

        // userEvent.type(): フォームの入力フィールドなどに文字を入力するシミュレーションを行う
        userEvent.type(email, emailText)
        userEvent.type(password,"ghi")

        // userEvent.click: ユーザーがボタンやリンク、その他のクリック可能な要素をクリックする動作をシミュレート
        userEvent.click(submitButton)

         // screen.getByText(): 指定されたテキストを持つ要素を DOM から取得
        const userInfo = screen.getByText(emailText)
        // .toBeInTheDocument(): 指定した要素が DOM に存在するか判定
        expect(userInfo).toBeInTheDocument()
    })
})

/*
babel.config.js:
    module.exports = {
        presets: [
          '@babel/preset-env',
          '@babel/preset-react',
        ],
    };

package.json:
    "jest": {
        "transform": {
          "^.+\\.jsx?$": "babel-jest"
        },
        "testMatch": [
          "**/src/**/*.test.js"
        ]
    }
*/
