const Magento = require('magento2-client');

module.exports = (env) => {
  const api = require('./router')();

  const magento = new Magento(
    env.MAGENTO_URL,
    env.MAGENTO_USERNAME,
    env.MAGENTO_PASSWORD,
    {}
  );

  let url = magento.getBaseUrl();

  // router
  const router1 = initClientlessRouter(env, [
    './v1/barcode',
  ]);
  const router2 = initClientRouter(env, magento, [
    './v1/product',
  ]);
  //
  // Mount
  api.use('/api', router1);
  api.use('/api', router2);

  return api;
};

// Helper to init routers
function initClientlessRouter(env, modules) {
  const router = require('./router')();
  modules.forEach(module => {
    require(module).init(env, router);
  });
  return router;
}
function initClientRouter(env, client, modules) {
  const router = require('./router')();
  modules.forEach(module => {
    require(module).init(env, router, client);
  });
  return router;
}
