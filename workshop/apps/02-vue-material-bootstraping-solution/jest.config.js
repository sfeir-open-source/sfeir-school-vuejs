module.exports = {
  displayName: '02-vue-material-bootstraping-solution',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.vue$': 'vue3-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'vue', 'js', 'json'],
  coverageDirectory:
    '../../coverage/apps/02-vue-material-bootstraping-solution',

  globals: {
    'ts-jest': { tsconfig: '<rootDir>/tsconfig.spec.json' },
    'vue-jest': {
      tsConfig: `apps/02-vue-material-bootstraping-solution/tsconfig.spec.json`,
    },
  },
  snapshotSerializers: ['jest-serializer-vue'],
};
