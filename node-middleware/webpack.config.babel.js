import Path from 'path'

export default {
  entry: 'main.ts',
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
