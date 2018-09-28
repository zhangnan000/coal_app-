module.exports = {
    baseUrl: './',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://10.162.1.191:8002',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        }
    },
    chainWebpack: config => {
        config.resolve
            .symlinks(true)
        return config
    },
    configureWebpack: config => {
        require('vux-loader').merge(config, {
            options: {},
            plugins: [{
                name: 'vux-ui'
            }, {
                name: 'less-theme',
                path: 'src/assets/css/theme.less'
            }]
        })
    }

}