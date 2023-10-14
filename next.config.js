/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => {
    return [
      {
        source: "/",
        destination: "/giris",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
