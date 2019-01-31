module.exports = {
  mode: process.env.NODE_ENV || "production",
  module: {
    rules: [{ test: /\.(js|jsx)$/, use: "babel-loader" }]
  },
  watch: true
};
