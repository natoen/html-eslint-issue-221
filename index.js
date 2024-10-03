const { ESLint } = require("eslint");
const html = require("eslint-plugin-html");
const htmlEslint = require('@html-eslint/eslint-plugin');
const PARSER_HTML = require('@html-eslint/parser');

(async function() {
  const eslint = new ESLint({
    baseConfig: {
      languageOptions: {
        parser: PARSER_HTML
      },
    },
    plugins: {
      html,
      "@html-eslint": htmlEslint,
    },
  });

  const lintResult = (await eslint.lintText(sourceCode, {
    // this is needed to work but this file does not exist
    // https://github.com/BenoitZugmeyer/eslint-plugin-html/issues/294
    filePath: "placeholder.html"
  }))[0];
  console.log(results);
})().catch((error) => {
  process.exitCode = 1;
  console.error(error);
});
