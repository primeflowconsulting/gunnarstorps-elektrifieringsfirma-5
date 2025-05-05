/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable static generation with ISR for quick rebuilds
  output: 'export',
  
  // Configure image optimization
  images: {
    unoptimized: true, // For static export
  },
  
  // Disable React strict mode for production
  reactStrictMode: false,
};

export default nextConfig;
