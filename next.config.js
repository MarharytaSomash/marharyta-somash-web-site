/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = nextConfig;
const withFonts = require("next-fonts");

module.exports = withFonts({
    webpack(config, options) {
        return config;
    },
});
