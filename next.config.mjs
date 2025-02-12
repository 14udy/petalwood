/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media-public.canva.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media-private.canva.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.canva.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "zyshftkrnnoqxxdnviwq.supabase.co",
        pathname: "**",
      },
    ],
  },
}

export default nextConfig
