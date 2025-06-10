/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/proofplatform',
  assetPrefix: '/proofplatform/',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
