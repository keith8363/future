module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser", // 指定ESLint解析器
    sourceType: "module", // 允许使用导入
  },
  extends: [
    "plugin:@typescript-eslint/recommended", // 使用@ typescript-eslint / eslint-plugin中的推荐规则
    "prettier", // 使用eslint-config-prettier禁用一些与Prettier冲突的ESLint规则
    "plugin:prettier/recommended", // 启用eslint-plugin-prettier和eslint-config-prettier // 使编辑器显示错误提示，确保这项是扩展数组中的最后一个配置
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    // 放置ESLint规则的位置。可用于覆盖从扩展配置中指定的规则
    // 例如 "@typescript-eslint/explicit-function-return-type": "off",
    // "vue/multi-word-component-names": 0, //关闭组件的驼峰命名规则
    // "no-multiple-empty-lines": 1, // 不允许有连续多行空格
    "no-console": process.env.VITE_ENV === "production" ? 2 : 0,
    "no-debugger": process.env.VITE_ENV === "production" ? 2 : 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/no-explicit-any": 0,
  },
};
