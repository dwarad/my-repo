module.exports = {
    resources: [
        { from: 'src/resources/', to: 'dist/resources/' },
        { from: 'src/index.css', to: 'dist/index.css' }
    ],
    webpackConfig: {
        resolve: {
            fallback: { querystring: require.resolve('querystring-es3') }
        }
    }
};
