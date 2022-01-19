module.exports = {
    basePath: "/blog",
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
