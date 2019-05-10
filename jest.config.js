module.exports = {
  preset: 'jest-expo',
  transform: {
    '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!react-native|react-navigation|react-navigation-redux-helpers|expo|react-redux|native-base|aws-amplify)/',
  ],
  "setupFiles": [
    "<rootDir>/tests.setup.js"
  ],
  "setupFilesAfterEnv": ["./node_modules/jest-enzyme/lib/index.js"],
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ]
};
