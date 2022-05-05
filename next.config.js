/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/michaelbeta/CalculadoraNextJS/gh-pages/' : '',
  
}
module.exports=nextConfig
