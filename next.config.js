/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // Enable React strict mode for better performance
  reactStrictMode: true,
  // Enable page optimization
  swcMinify: true,
  // Compress images better
  compress: true,
  // Optimize fonts
  optimizeFonts: true,
  // Enable progressive web app features
  poweredByHeader: false,
}

module.exports = nextConfig 