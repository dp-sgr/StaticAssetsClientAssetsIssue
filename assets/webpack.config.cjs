const entry = require('webpack-glob-entry');

module.exports = env => {
    const moduleConfig = {
        entry: entry('./src/*.ts'),
        // devtool: env && env.production ? 'none' : 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                }
            ],
        },
        experiments: {
            outputModule: true,
        },
        resolve: {
            extensions: ['.ts'],
        },
        output: {
            filename: '[name].js',
            // libraryTarget: "commonjs2",
            library: {
                type: "module"
            }
        }
    };

    return [moduleConfig];
}