const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
    async rewrites() {
        return [
            {
                source: "/blogs",
                destination: "https://blog.lucifer0x17.dev",
            },
            {
                source: "/blogs/:path*",
                destination: "https://blog.lucifer0x17.dev/:path*",
            },
        ];
    },
})
