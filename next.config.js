/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/CalculadoraNextJS/michaelbeta.github.io/gh-pages/' : '',
  nextConfig
}
