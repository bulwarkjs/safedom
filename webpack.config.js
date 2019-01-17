var path = require('path')

module.exports = {
  mode: 'none',
  entry: './build/index.js',
  output: {
    filename: 'safedom.js',
    path: path.resolve(__dirname, 'build', 'dist'),
    library: 'safedom',
    globalObject: 'this',
    libraryTarget: 'umd'
  }
}
