const transform       = require('../transform');

const product = module.exports;

// productFromUPC
//   Input:  upc
//   Output: promise that resolves to product 
function productFromUPC (magento, upc) {
  return magento.request('GET',            //method
                  '/V1/products',   //url
                  {                 //urlParams
                    'searchCriteria[filter_groups][0][filters][0][field]':'upc',
                    'searchCriteria[filter_groups][0][filters][0][value]':upc,
                  }, 
                  {                 //data
                  })
  .then((data) => {
//    console.log('data = ' + JSON.stringify(data, null, 2));
    return new Promise((resolve, reject) => {
      if (data.items.length !== 1) {
        reject('Did not fetch a unique product. Got ' + data.items.length + ' items.');
      }
      if ([2,3,4].indexOf(data.items[0].visibility) === -1) {
        reject('Visibility must be Search, Catalog or both.  Visibility = ' + data.items[0].visibility);
      }
      resolve(data.items[0]);
    });
  })
  .catch(function(err) {
    return err;
  });
};

// Init routes
product.init = (env, router, magento) => {
  router.get('/product/:upc', product.fromUPC.bind(this, magento));
  router.get('/product/url/:upc', product.URLFromUPC.bind(this, magento));
};

// From product, get UPC
product.fromUPC = (magento, req) => {
  console.log(`product.fromUPC(${req.params.upc})`);
  return productFromUPC(magento, req.params.upc)
  .then((item) => {
    return new Promise((resolve, reject) => {
      let dataX = transform.product(item);
      resolve(dataX);
    });
  })
  .catch((err) => {
    return(err);
  });
};

product.URLFromUPC = (magento, req) => {
  console.log(`product.URLFromUPC(${req.params.upc})`);
  return productFromUPC(magento, req.params.upc)
  .then((item) => {
    return new Promise((resolve, reject) => {
      let dataX = transform.productURL(item);
      resolve(dataX);
    });
  })
  .catch((err) => {
    return(err);
  });
};
