var path = require('path');

module.exports = {
  //entry: ['./src/a.js','./src/b.js'],
  entry: {
  	a:'./src/a.js',
  	b:'./src/b.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist')
  },
};