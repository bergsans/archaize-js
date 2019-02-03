const path = require("path");

module.exports = {
  mode: "development",
  context: path.join(__dirname, "src"),
  entry: ["./main.js"],
  output: {
    path: path.join(__dirname, "www"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
    ]
  }
};
