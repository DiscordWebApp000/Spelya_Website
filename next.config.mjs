import createNextIntlPlugin from 'next-intl/plugin';
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'www.ntc.edu',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'nhtagent.com',
        port: '',
      },
      {
        protocol: 'https',      // Add the protocol
        hostname: 'img.daisyui.com', // Add the domain name
        port: '',               // Port is optional (leave empty for default)
      },
      {
        protocol: 'https',      // Add the protocol
        hostname: 'techslang.com', // Add the domain name
        port: '',               // Port is optional (leave empty for default)
      }
    ],
  },
};

export default withNextIntl(nextConfig);
