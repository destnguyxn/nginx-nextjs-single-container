module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'refactor', 'test', 'build', 'ci', 'revert'],
    ],

    'subject-case': [
      'lower-case',
      'upper-case',
      'camel-case',
      'kebab-case',
      'pascal-case',
      'sentence-case',
      'snake-case',
      'start-case',
    ],
  },
};
