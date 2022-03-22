module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          _src: "./src",
          _components: "./src/components",
          _constants: "./src/constants",
          _assets: "./assets",
          _utils: "./src/utils"
        }
      }
    ]
  ]
};
