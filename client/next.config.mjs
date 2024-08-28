/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "s3-inventorymanagement-rh.s3.eu-west-2.amazonaws.com",
                port: "",
                pathname: "/**",
            }
        ],
    },
};

export default nextConfig;
