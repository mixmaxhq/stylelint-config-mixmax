'use strict';

module.exports = {
  processors: [
    [
      'stylelint-processor-styled-components',
      {
        parserPlugins: ['jsx', 'classProperties', 'exportDefaultFrom'],
      },
    ],
  ],
  extends: ['../strict/index.js', 'stylelint-config-styled-components'],
  rules: {
    'declaration-empty-line-before': null,
    'value-keyword-case': null,
  },
};
