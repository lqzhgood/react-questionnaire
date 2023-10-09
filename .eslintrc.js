module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        'prettier/prettier': [
            'warn',
            {
                // 箭头函数只有一个参数的时候可以忽略括号
                arrowParens: 'avoid',
                // 行结束符使用 Unix 格式
                endOfLine: 'lf',
                // html 空格
                htmlWhitespaceSensitivity: 'ignore',
                // 单引号
                jsxSingleQuote: true,
                singleQuote: true,
                // 变量 key 是否需要引号
                //   quoteProps: "consistent",
                useTabs: false,
                tabWidth: 4,
                // other
                printWidth: 120,
            },
        ],
    },
};
