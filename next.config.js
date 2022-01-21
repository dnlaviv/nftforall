/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = {
  reactStrictMode: true,
  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
    // NOTE: This is a temporary fix to skip typescript build errors due to typescript errors in ethers.js library files.
    // Before deploying, make sure to run typescript checks on the project's files.
    // See: https://github.com/ethers-io/ethers.js/issues/2202
    // Once fixed, I'll go ahead and remove this flag.
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
