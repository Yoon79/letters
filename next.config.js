// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
//
// // module.exports = nextConfig;
// // next.config.js
// module.exports = {
//   basePath: '/Yoon79/letters',
//   assetPrefix: '/Yoon79/letters',
// };

// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/letters' : '',
  assetPrefix: isProd ? '/letters' : '',
};



// module.exports = {
//   async rewrites() {
//     if (process.env.NODE_ENV !== "production") {
//       return [
//         {
//           destination: process.env.DESTINATION_URL,
//           source: process.env.SOURCE_PATH,
//         },
//       ];
//     }
//   },
// };
