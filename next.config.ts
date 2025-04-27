import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: 'vaqybtnqyonvlwtskzmv.supabase.co',
      },
    ],
  },
};

export default nextConfig;
