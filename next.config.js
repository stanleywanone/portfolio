/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // basePath: "/swp",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/core/Biography",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

// module.exports = {
//   distDir: "build",
// }
