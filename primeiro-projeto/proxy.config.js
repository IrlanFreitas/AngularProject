const proxy = [
    {
      context: '/api',
      target: 'https://swapi.co/',
      secure: false,
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }
  ];
  module.exports = proxy;