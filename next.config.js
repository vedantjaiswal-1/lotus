/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};
const isProd = process.env.NODE_ENV === 'production'
module.exports = nextConfig;

module.exports = {
  env: {
    MONGO_URL: "mongodb+srv://lotus:FhrBHvTXrFj3EeYb@cluster0.2d99u.mongodb.net/?retryWrites=true&w=majority",
    TOKEN_SECRET: "lotusinn"
  }
};

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/6.7.96/fonts/materialdesignicons-webfont.woff2' : '',
}
