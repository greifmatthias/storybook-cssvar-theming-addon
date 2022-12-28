module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-typescript",
    "@babel/preset-react",
  ],
  plugins: [
    ["@babel/plugin-proposal-decorators", { version: "legacy" }],
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true,
      },
    ],
  ],
  env: {
    esm: {
      presets: [
        [
          "@babel/preset-env",
          {
            loose: true,
            modules: false,
          },
        ],
      ],
    },
  },
};
