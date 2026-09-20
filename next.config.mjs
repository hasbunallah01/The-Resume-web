/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{ source: "/resumes", destination: "/services", permanent: true }];
  },
};

export default nextConfig;
