/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'picsum.photos',
          pathname: '/500/500/**',
        },
      ],
    },
  };

export default nextConfig;
