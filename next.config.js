// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };
//
// // module.exports = nextConfig;
// // next.config.js
// module.exports = {
//   basePath: '/letters',
//   assetPrefix: '/letters/',
// };
//

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/letters' : '',
  assetPrefix: isProd ? '/letters/' : '', // Add trailing slash here
  trailingSlash: true, // Ensure trailing slashes for all paths
  images: {
    unoptimized: true, // Disable image optimization for static export
  },
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
