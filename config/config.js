// console.log()
module.exports = {
  'development': {
    'mongoUrl': 'mongodb://admin:admin123@ds227664.mlab.com:27664/portfolios',
    // 'mongoUrl': 'mongodb://test:test1234@ds161833.mlab.com:61833/test-db',
    'env': 'development',
  },
  'test': {
    'mongoUrl': 'mongodb://test:test1234@ds161833.mlab.com:61833/test-db',
    'env': 'test',
  },
  'production': {
    'mongoUrl': 'mongodb://admin:admin123@ds227664.mlab.com:27664/portfolios',
    'env': 'production',
  },
}
