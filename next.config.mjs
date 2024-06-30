/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    experimental: {
    instrumentationHook: true,
    
  },
  images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'gic-gtu.s3.ap-south-1.amazonaws.com',
        port: '',
        }
    ],
}
};

export default nextConfig;
