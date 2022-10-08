/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/portfolio/biography",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
