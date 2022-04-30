module.exports = {
  preset: 'react-native',
  transform: {},
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  transformIgnorePatterns: [
    "node_modules/(?!(@react-native|react-native|react-native-normalize|react-native-value-picker|react-native-vector-icons)/)"
  ]
};