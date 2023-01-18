module.exports = {
    root: true,

    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    env: {
      "node": true
    },
    extends: [
      "eslint:recommended",
      'plugin:vue/vue3-essential',
      "plugin:vue/vue3-recommended",
      "prettier"
    ],
    rules: {
      "vue/multi-word-component-names": "off",
      "no-unused-vars": "warn"
    }

}