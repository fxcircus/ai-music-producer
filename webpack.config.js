const path = require('path');

module.exports = {
  entry: './src/index.js', // Replace with your entry file
  output: {
    filename: 'bundle.js', // Replace with your desired output file name
    path: path.resolve(__dirname, 'dist'), // Replace with your output directory
  },
  resolve: {
    fallback: {
      crypto: require.resolve('crypto-browserify'),
    },
  },
  // Add other webpack configuration options as needed
};
