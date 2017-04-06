import { resolve as resolvePath } from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: ['babel-polyfill', resolvePath(__dirname, './src/main.js')],

  output: {
    sourcePrefix: '  ',
    path: resolvePath(__dirname, './dist'),
    filename: '[name].js',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        include: resolvePath(__dirname, './src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: false,
              babelrc: false,
              presets: [
                [
                  'env',
                  {
                    targets: {
                      browsers: ['last 2 versions', '> 5%'],
                    },
                    modules: false,
                  },
                ],
                'stage-0',
                'react',
              ],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CopyWebpackPlugin([
      {
        from: resolvePath(__dirname, './src/index.html'),
        to: resolvePath(__dirname, './dist'),
      },
    ]),
  ],

  devtool: 'inline-source-map',

  target: 'web',
};
