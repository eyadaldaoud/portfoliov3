/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: 'loose',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io'
        }
        ]
    
    }
}

module.exports = nextConfig
