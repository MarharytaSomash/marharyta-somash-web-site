/** @type {import('next').NextConfig} */
// const compose = require('next-compose');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  }


// module.exports = nextConfig
// module.exports = compose([
//   [nextConfig],
//   {
//     webpack(config, options) {
//       config.module.rules.push({
//         test: /\.mp3$/,
//         use: {
//           loader: 'file-loader',
//         },
//       });
//       return config;
//     },
//   },
// ]);

module.exports = {
  module: {
    nextConfig,
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};