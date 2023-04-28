// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: 'https://maps.googleapis.com',
//       changeOrigin: true,
//     })
//   );
// };

// const express = require('express');
// const { createProxyMiddleware } = require('http-proxy-middleware');

// const app = express();

// app.use('/api', createProxyMiddleware({
//   target: 'https://maps.googleapis.com',
//   changeOrigin: true,
//   pathRewrite: {
//     '^/api': '/maps/api'
//   },
//   headers: {
//     'Access-Control-Allow-Origin': '*'
//   }
// }));

// app.listen(3000, () => {
//   console.log('Proxy server listening on port 3000');
// });
