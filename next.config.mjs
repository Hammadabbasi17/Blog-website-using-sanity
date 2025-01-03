/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'cdn.sanity.io',
                pathname:'/**',
            }
        ]
    },
    output: "standalone", // Optional but ensures compatibility with Vercel
    experimental: {
    appDir: true, // Ensure app directory is enabled
  },
};

export default nextConfig;
