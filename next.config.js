/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: " https://portfolio-p3vvlny9z-stanleywanone.vercel.app/swp",
  basePath: "/swp",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/swp/core/Biography",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

// module.exports = {
//   distDir: "build",
// }
