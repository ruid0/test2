module.exports = {
    basePath: "/blog",
    trailingSlash: false,
    async redirects() {
        return [
            {
                source: "/",
                destination: "/blog",
                permanent: true,
                basePath: false,
            },
        ];
    },
};
