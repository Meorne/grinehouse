const commonTsConfig = (oRules = {}) => ({
  extends: [
    `airbnb`,
    `airbnb-typescript`,
    `plugin:@typescript-eslint/recommended`,
  ],
  parser: `@typescript-eslint/parser`,
  parserOptions: {
    project: `tsconfig.json`,
  },
  rules: {
    quotes: `off`,
    indent: `off`,
    'react/react-in-jsx-scope': `off`,
    '@typescript-eslint/quotes': [`error`, `backtick`],
    '@typescript-eslint/no-empty-function': `off`,
    '@typescript-eslint/indent': `off`,
    '@typescript-eslint/comma-dangle': `off`,
    'import/no-named-as-default': `off`,
    'import/no-extraneous-dependencies': `off`,
    'object-curly-newline': `off`,
    'jsx-a11y/label-has-associated-control': `off`,
    'react/jsx-wrap-multilines': `off`,
    'react/function-component-definition': `off`,
    'implicit-arrow-linebreak': `off`,
    'function-paren-newline': `off`,
    'react/require-default-props': `off`,
    'no-confusing-arrow': `off`,
    'react-hooks/exhaustive-deps': 0,
    '@typescript-eslint/no-unused-vars': `error`,
    'react/jsx-closing-tag-location': `off`,
    'operator-linebreak': `off`,
    'import/prefer-default-export': `off`,
    'no-multi-spaces': `off`,
    'react/jsx-indent': `off`,
    'react/jsx-props-no-spreading': `off`,
    'react/jsx-curly-newline': `off`,
    'jsx-a11y/aria-role': `off`,
    'jsx-a11y/click-events-have-key-events': `off`,
    ...oRules,
  },
});

module.exports = {
  extends: [`plugin:prettier/recommended`],
  ignorePatterns: [`*.html`, `!.*.[jt]s`],
  parserOptions: {
    ecmaVersion: `latest`,
  },
  rules: { quotes: [`error`, `backtick`], 'react/react-in-jsx-scope': `off` },
  overrides: [
    {
      files: [`*.tsx`, `*.ts`],
      ...commonTsConfig(),
    },
    {
      files: [`*.d.ts`],
      ...commonTsConfig({
        quotes: [`error`, `single`],
      }),
    },
    {
      files: `*.json`,
      parser: `jsonc-eslint-parser`,
      rules: {},
    },
  ],
};
