/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.incomenfiling.com" }],
        destination: "https://incomenfiling.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
