/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // sharp ships native binaries per-platform; bundling it breaks those
  // binaries at runtime on Vercel, so it must stay an external package.
  serverExternalPackages: ["sharp"],
  async redirects() {
    return [{ source: "/resumes", destination: "/services", permanent: true }];
  },
};

export default nextConfig;
