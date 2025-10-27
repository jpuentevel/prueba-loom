// src/routes/api/hello/hello.routes.js
module.exports = {
  hello: [
    {
      httpRoute: '/hello',
      route: '/routes/api/hello/hello.route', // con slash inicial
      handler: 'get',
      method: 'GET',
      protected: false,
    },
  ],
};
