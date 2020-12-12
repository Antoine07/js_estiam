const path = require("path");

module.exports = (env) => {
    
  return {
    mode: env.NODE_ENV ?? "development",
    // watch : true,
    entry: "./src/app.js", // Point d'entrée
    // Sortie
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
    },
    devtool : 'source-map',
    // Configuration de webpack-dev-server minimale
    devServer: {
      contentBase: path.join(__dirname, "dist"),
      port: 9000,
      open: true,
      hot: true,
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        },
      ],
    },
  };
};