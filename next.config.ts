/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/remote-products',
        destination: 'https://lotus-api-rpoz.vercel.app/api/products',
      },
    ];
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lotus-botique.vercel.app',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;