/*
Cypress: E2E（エンドツーエンド）テスト に特化

インストール: npm install --save-dev cypress

Cypress を起動: npx cypress open

cypress/e2e/sample.cy.ts を作成: 
    describe('ホームページの表示', () => {
        it('正しくタイトルが表示される', () => {
            cy.visit('http://localhost:5173'); // 開発サーバーのURL
            cy.contains('Welcome to React').should('be.visible');
        });
    });

テストの実行: 
    GUI: npx cypress open
    CLI: npx cypress run
*/

export {};