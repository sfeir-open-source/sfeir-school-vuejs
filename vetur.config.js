module.exports = {
  settings: {
    'vetur.useWorkspaceDependencies': true,
    'vetur.experimental.templateInterpolationService': true,
  },
  projects: [
    {
      root: './steps/apps/01-bootstraping',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/01-bootstraping-solution',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/02-vue-material-bootstraping',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/02-vue-material-bootstraping-solution',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/03-first-components',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/03-first-components-solution',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/04-binding',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
    {
      root: './steps/apps/04-binding-solution',
      package: '../../package.json',
      tsconfig: './tsconfig.json',
    },
  ],
};
