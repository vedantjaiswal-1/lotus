/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
};

module.exports = nextConfig;

module.exports = {
  env: {
    MONGO_URL: "mongodb+srv://lotus:FhrBHvTXrFj3EeYb@cluster0.2d99u.mongodb.net/?retryWrites=true&w=majority",
    TOKEN_SECRET: "lotusinn"
  }
};
