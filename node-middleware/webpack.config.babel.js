export default {
  entry: 'main.ts',
  output: {
    path: './dist',
    filename: 'main.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.ts/,
        use:'awesome-ts-loader'
      },
    ]
  }
}
