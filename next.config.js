/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_BACKEND_URL: process.env.BACKEND_LEPISA,
    CLOUDINARY_LINK: process.env.CLOUDINARY_LINK,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
}

module.exports = nextConfig
