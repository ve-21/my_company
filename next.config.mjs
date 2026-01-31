/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.vercel.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  env: {
    MONGODB_URI: "mongodb+srv://vithuve21_db_user:TSkExI9UprebWLsR@company.1o6pkdj.mongodb.net/?appName=company",
    SITE_PASSWORD: "ve_client_2026",
    ADMIN_USERNAME: "admin",
    ADMIN_PASSWORD: "ve_admin_pass_2026",
  }
};

export default nextConfig;
