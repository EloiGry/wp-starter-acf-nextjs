/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  async redirects() {
    return [
      {
        source: '/accueil',
        destination: '/',
        permanent: true, // 301 Redirection
      },
    ];
  },
  images: {
      domains: ['localhost'],
    }
};

export default nextConfig;
