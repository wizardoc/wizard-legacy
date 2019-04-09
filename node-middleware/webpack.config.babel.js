import Path from 'path'

export default {
  entry: './src/main.ts',
  mode:'development',
  output: {
    path: Path.resolve('./dist'),
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use:'awesome-ts-loader'
      },
      {
        test: /\.js/,
        use: 'babel-loader'
      }
    ]
  }
}
