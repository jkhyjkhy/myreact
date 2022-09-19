const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        proxy('/api',{
            target: 'http://localhost:8080',
            changeOrigin: true,
        })
    );
};


/*
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://localhost:8080', //접속하려는 서버의 루트 URL
      changeOrigin: true,
    })
  );
};
*/