module.exports = {
    staticFileGlobs: [
        '/**.html',
        '/**.js',
        '/**.css',
        '/assets/images/*',
        '/assets/icons/*'
    ],
    runtimeCaching: [{
        urlPattern: '/api',
        handler: 'networkFirst'
    }],
    root: '',
    stripPrefix: '/',
    navigateFallback: '/index.html'
};
