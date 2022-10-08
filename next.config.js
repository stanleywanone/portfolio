/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/biography",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
