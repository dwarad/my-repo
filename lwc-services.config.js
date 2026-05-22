module.exports = {
    resources: [{ from: 'src/resources/', to: 'dist/resources/' }],
    webpackConfig: {
        resolve: {
            fallback: { querystring: require.resolve('querystring-es3') }
        }
    }
};
