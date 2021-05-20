module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './steps/apps/01-bootstraping',
      package: '../../package.json',
      tsconfig: './tscondig.json',
    },
    {
      root: './steps/apps/01-bootstraping-solution',
      package: '../../package.json',
      tsconfig: './tscondig.json',
    },
  ],
};
