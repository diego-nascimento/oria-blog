import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('http://localhost:1337/**'),
      new URL('https://active-dream-265aa95c2a.strapiapp.com/**'),
    ],
  },
};

export default nextConfig;
