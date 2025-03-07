import { render, screen } from '@testing-library/react';
import App from '../../App';

/*  describe(): テストグループを作成
    引数: ①テストスイートの説明 ②テストケース
*/
describe("Test App Component", () => {
    /*  test(): 個別のテストケースを定義 
        引数: ①テストケースの説明 ②テストの実行内容
    */
    test("render from with 1button", async () => {
        render(<App />);
        // const button = screen.findAllByRole('button', { name: /submit/i });  // button要素で「Submit」という名前のボタンを探す 
        // const allButtons = await screen.findAllByRole('button', { hidden: true });
        const button = await screen.findAllByRole("button")   // 指定された要素を検索
    })
})
