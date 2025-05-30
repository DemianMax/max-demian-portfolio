/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remova o basePath para simplificar
  // basePath: process.env.NODE_ENV === 'production' ? '/max-demian-portfolio' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/max-demian-portfolio/' : '',
}

export default nextConfig
