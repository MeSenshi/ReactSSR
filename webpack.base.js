module.exports = {

    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        '@babel/react',
                        ['@babel/preset-env', {targets: {browsers: ['last 2 versions']}}]
                    ],
                    plugins:['@babel/plugin-proposal-function-bind']
                }
            }
        ]
    }
};